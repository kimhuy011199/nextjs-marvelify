import { db } from '@/lib/db';

const PRODUCTS_PER_PAGE = 6;

export interface ProductSearchParamsInterface {
  sort?: string;
  availability?: string | string[];
  feature?: string | string[];
  page?: number;
}

const getProducts = async (
  searchParams: ProductSearchParamsInterface | undefined
) => {
  let orderBy = {};
  switch (searchParams?.sort) {
    case 'latest':
      orderBy = { createdAt: 'desc' };
      break;
    case 'highest':
      orderBy = { price: 'desc' };
      break;
    case 'lowest':
      orderBy = { price: 'asc' };
      break;
    default:
      orderBy = { createdAt: 'desc' };
      break;
  }

  let availability = [];
  if (searchParams?.availability) {
    switch (searchParams?.availability) {
      case 'in':
        availability.push({
          isAvailableForSale: true,
        });
        break;
      case 'out':
        availability.push({
          isAvailableForSale: false,
        });
        break;
      default:
        break;
    }
  }

  let feature: any = [];
  if (searchParams?.feature) {
    if (typeof searchParams.feature === 'string') {
      feature.push({
        features: {
          contains: searchParams.feature,
        },
      });
    } else {
      feature = searchParams.feature.map((feature) => {
        return {
          features: {
            contains: feature,
          },
        };
      });
    }
  }

  let skip = searchParams?.page
    ? (searchParams.page - 1) * PRODUCTS_PER_PAGE
    : 0;

  const filter = {
    where: {
      AND: [
        {
          OR: [...feature],
        },
        {
          OR: [...availability],
        },
      ],
    },
  };

  const products = await db.product.findMany({
    orderBy,
    ...filter,
    skip,
    take: PRODUCTS_PER_PAGE,
    include: {
      variants: true,
    },
  });
  const totalProducts = await db.product.count(filter);
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return {
    products,
    totalProducts,
    totalPages,
  };
};

const getProductByHandle = async (handle: string) => {
  const product = await db.product.findFirst({
    where: {
      handle: handle,
    },
    include: {
      variants: true,
    },
  });
  return product;
};

const getFeaturedProducts = async () => {
  const featuredProducts = await db.product.findMany({
    where: {
      isFeatured: true,
    },
    include: {
      variants: true,
    },
  });
  return featuredProducts;
};

const getRelatedProducts = async (handle: string) => {
  const products = await db.product.findMany({
    include: {
      variants: true,
    },
  });
  return products
    .filter((product) => product.handle !== handle)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
};

export {
  getProducts,
  getProductByHandle,
  getRelatedProducts,
  getFeaturedProducts,
};
