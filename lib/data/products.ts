import { ProductType } from '@/lib/types';
import delay from 'delay';

const originalProducts = [
  {
    id: '01',
    handle: 'spiderman-case',
    createdAt: '05-25-2024',
    name: 'Spiderman Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Spiderman logo, making it a must-have for any Spiderman fan.',
    isFeatured: true,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049345/marvelify/rau45vtlpcbmdfoi6l7s.jpg',
    variants: [
      {
        id: '0101',
        productHandle: 'spiderman-case',
        productName: 'Spiderman Case',
        name: 'Silver',
        price: 20,
        priceAfterDiscounted: 20,
        currency: 'USD',
        availableQuantity: 6,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049345/marvelify/rau45vtlpcbmdfoi6l7s.jpg',
      },
      {
        id: '0102',
        productHandle: 'spiderman-case',
        productName: 'Spiderman Case',
        name: 'Black',
        price: 25,
        priceAfterDiscounted: 22,
        currency: 'USD',
        availableQuantity: 8,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049344/marvelify/a0eopcgdy1ne3ctvur0f.jpg',
      },
    ],
  },
  {
    id: '02',
    handle: 'ironman-case',
    createdAt: '05-24-2024',
    name: 'Ironman Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Ironman logo, making it a must-have for any Ironman fan.',
    isFeatured: true,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/qfgbbcrt3tm33bntbyjn.jpg',
    variants: [
      {
        id: '0201',
        productHandle: 'ironman-case',
        productName: 'Ironman Case',
        name: 'Silver',
        price: 22,
        priceAfterDiscounted: 20,
        currency: 'USD',
        availableQuantity: 45,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/qfgbbcrt3tm33bntbyjn.jpg',
      },
      {
        id: '0202',
        productHandle: 'ironman-case',
        productName: 'Ironman Case',
        name: 'Black',
        price: 22,
        priceAfterDiscounted: 22,
        currency: 'USD',
        availableQuantity: 45,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/q2ulvxdmdb0zgshobzew.jpg',
      },
    ],
  },
  {
    id: '03',
    handle: 'loki-case',
    createdAt: '05-23-2024',
    name: 'Loki Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Loki logo, making it a must-have for any Loki fan.',
    isFeatured: false,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/awmwjyaorx2gqhtxzilq.jpg',
    variants: [
      {
        id: '0301',
        productHandle: 'loki-case',
        productName: 'Loki Case',
        name: 'Silver',
        price: 18,
        priceAfterDiscounted: 18,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/awmwjyaorx2gqhtxzilq.jpg',
      },
      {
        id: '0302',
        productHandle: 'loki-case',
        productName: 'Loki Case',
        name: 'Black',
        price: 18,
        priceAfterDiscounted: 18,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/pwtpq2irduefynrpyz1x.jpg',
      },
    ],
  },
  {
    id: '04',
    handle: 'black-panther-case',
    createdAt: '05-22-2024',
    name: 'Black Panther Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Black Panther logo, making it a must-have for any Black Panther fan.',
    isFeatured: true,
    isAvailableForSale: false,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/w8fgeakltpciwjlt4wug.jpg',
    variants: [
      {
        id: '0401',
        productHandle: 'black-panther-case',
        productName: 'Black Panther Case',
        name: 'Silver',
        price: 20,
        priceAfterDiscounted: 20,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/w8fgeakltpciwjlt4wug.jpg',
      },
      {
        id: '0402',
        productHandle: 'black-panther-case',
        productName: 'Black Panther Case',
        name: 'Black',
        price: 20,
        priceAfterDiscounted: 18,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/hftim5id0atrmq84gnek.jpg',
      },
    ],
  },
  {
    id: '05',
    handle: 'thanos-case',
    createdAt: '05-21-2024',
    name: 'Thanos Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Thanos logo, making it a must-have for any Thanos fan.',
    isFeatured: false,
    isAvailableForSale: false,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/wkmvgcz9atudvmffjjmd.jpg',
    variants: [
      {
        id: '0501',
        productHandle: 'thanos-case',
        productName: 'Thanos Case',
        name: 'Silver',
        price: 16,
        priceAfterDiscounted: 16,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/wkmvgcz9atudvmffjjmd.jpg',
      },
      {
        id: '0502',
        productHandle: 'thanos-case',
        productName: 'Thanos Case',
        name: 'Black',
        price: 16,
        priceAfterDiscounted: 16,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136081/marvelify/mlosi0q7zkdcezb4q1ke.jpg',
      },
    ],
  },
  {
    id: '06',
    handle: 'captain-marvel-case',
    createdAt: '05-20-2024',
    name: 'Captain Marvel Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Captain Marvel logo, making it a must-have for any Captain Marvel fan.',
    isFeatured: false,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/yo1wuufz643je7bksoxg.jpg',
    variants: [
      {
        id: '0601',
        productHandle: 'captain-marvel-case',
        productName: 'Captain Marvel Case',
        name: 'Silver',
        price: 14,
        priceAfterDiscounted: 14,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/yo1wuufz643je7bksoxg.jpg',
      },
      {
        id: '0602',
        productHandle: 'captain-marvel-case',
        productName: 'Captain Marvel Case',
        name: 'Black',
        price: 14,
        priceAfterDiscounted: 14,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136082/marvelify/ykn9avjy0syzhycoakhk.jpg',
      },
    ],
  },
  {
    id: '07',
    handle: 'the-falcon-case',
    createdAt: '05-19-2024',
    name: 'The Falcon Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic The Falcon logo, making it a must-have for any The Falcon fan.',
    isFeatured: false,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/tgjawqmgtyk1roqubbiw.jpg',
    variants: [
      {
        id: '0701',
        productHandle: 'the-falcon-case',
        productName: 'The Falcon Case',
        name: 'Silver',
        price: 17,
        priceAfterDiscounted: 17,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/tgjawqmgtyk1roqubbiw.jpg',
      },
      {
        id: '0702',
        productHandle: 'the-falcon-case',
        productName: 'The Falcon Case',
        name: 'Black',
        price: 17,
        priceAfterDiscounted: 17,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136083/marvelify/ma31bbnz722vvbzgapcj.jpg',
      },
    ],
  },
  {
    id: '08',
    handle: 'thor-case',
    createdAt: '05-18-2024',
    name: 'Thor Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Thor logo, making it a must-have for any Thor fan.',
    isFeatured: false,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/pli28hungwrlypojzxdi.jpg',
    variants: [
      {
        id: '0801',
        productHandle: 'thor-case',
        productName: 'Thor Case',
        name: 'Silver',
        price: 18,
        priceAfterDiscounted: 15,
        currency: 'USD',
        availableQuantity: 6,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/pli28hungwrlypojzxdi.jpg',
      },
      {
        id: '0802',
        productHandle: 'thor-case',
        productName: 'Thor Case',
        name: 'Black',
        price: 15,
        priceAfterDiscounted: 15,
        currency: 'USD',
        availableQuantity: 4,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136082/marvelify/otqguuz3zxdqenpikpfb.jpg',
      },
    ],
  },
  {
    id: '09',
    handle: 'captain-america-paint-case',
    createdAt: '05-17-2024',
    name: 'Captain America Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Captain America logo, making it a must-have for any Captain America fan.',
    isFeatured: false,
    isAvailableForSale: false,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/xjqv98p7d6uwrfev5seg.jpg',
    variants: [
      {
        id: '0901',
        productHandle: 'captain-america-paint-case',
        productName: 'Captain America Case',
        name: 'Silver',
        price: 14,
        priceAfterDiscounted: 14,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/xjqv98p7d6uwrfev5seg.jpg',
      },
      {
        id: '0902',
        productHandle: 'captain-america-paint-case',
        productName: 'Captain America Case',
        name: 'Black',
        price: 16,
        priceAfterDiscounted: 16,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136081/marvelify/qcyykpu9knyiiccnfy4p.jpg',
      },
    ],
  },
  {
    id: '10',
    handle: 'captain-america-case',
    createdAt: '05-16-2024',
    name: 'Captain America Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Captain America logo, making it a must-have for any Captain America fan.',
    isFeatured: false,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/t4zmzrsqhs3wld48khig.jpg',
    variants: [
      {
        id: '1001',
        productHandle: 'captain-america-case',
        productName: 'Captain America Case',
        name: 'Silver',
        price: 18,
        priceAfterDiscounted: 18,
        currency: 'USD',
        availableQuantity: 20,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/t4zmzrsqhs3wld48khig.jpg',
      },
      {
        id: '1002',
        productHandle: 'captain-america-case',
        productName: 'Captain America Case',
        name: 'Black',
        price: 20,
        priceAfterDiscounted: 17,
        currency: 'USD',
        availableQuantity: 20,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136082/marvelify/grzl7omj0asocmizym4x.jpg',
      },
    ],
  },
  {
    id: '11',
    handle: 'black-widow-case',
    createdAt: '05-15-2024',
    name: 'Black Widow Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Black Widow logo, making it a must-have for any Black Widow fan.',
    isFeatured: false,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/yr2cfbid9p1knphshg81.jpg',
    variants: [
      {
        id: '1101',
        productHandle: 'black-widow-case',
        productName: 'Black Widow Case',
        name: 'Silver',
        price: 15,
        priceAfterDiscounted: 15,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/yr2cfbid9p1knphshg81.jpg',
      },
      {
        id: '1102',
        productHandle: 'black-widow-case',
        productName: 'Black Widow Case',
        name: 'Black',
        price: 15,
        priceAfterDiscounted: 15,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136080/marvelify/dphgnyaia7sbo0ygz3nu.jpg',
      },
    ],
  },
  {
    id: '12',
    handle: 'moon-knight-case',
    createdAt: '05-14-2024',
    name: 'Moon Knight Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Moon Knight logo, making it a must-have for any Moon Knight fan.',
    isFeatured: true,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/ygoy2nphq53y82jkjsbq.jpg',
    variants: [
      {
        id: '1201',
        productHandle: 'moon-knight-case',
        productName: 'Moon Knight Case',
        name: 'Silver',
        price: 15,
        priceAfterDiscounted: 12,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/ygoy2nphq53y82jkjsbq.jpg',
      },
      {
        id: '1202',
        productHandle: 'moon-knight-case',
        productName: 'Moon Knight Case',
        name: 'Black',
        price: 14,
        priceAfterDiscounted: 12,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136080/marvelify/rctzvj9xrsc5obirdyyd.jpg',
      },
    ],
  },
  {
    id: '13',
    handle: 'hawkeye-case',
    createdAt: '05-13-2024',
    name: 'Hawkeye Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Hawkeye logo, making it a must-have for any Hawkeye fan.',
    isFeatured: false,
    isAvailableForSale: true,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/zalmbvrlfqr1dxnirwfo.jpg',
    variants: [
      {
        id: '1301',
        productHandle: 'hawkeye-case',
        productName: 'Hawkeye Case',
        name: 'Silver',
        price: 19,
        priceAfterDiscounted: 19,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716049343/marvelify/zalmbvrlfqr1dxnirwfo.jpg',
      },
      {
        id: '1302',
        productHandle: 'hawkeye-case',
        productName: 'Hawkeye Case',
        name: 'Black',
        price: 19,
        priceAfterDiscounted: 19,
        currency: 'USD',
        availableQuantity: 40,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136083/marvelify/ntz67ejrluvamzzt9sca.jpg',
      },
    ],
  },
  {
    id: '14',
    handle: 'antman-case',
    createdAt: '05-12-2024',
    name: 'Antman Case',
    description:
      'Made with high-quality materials, the case features a sleek design with the iconic Antman logo, making it a must-have for any Antman fan.',
    isFeatured: false,
    isAvailableForSale: false,
    features: '',
    previewImg:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136080/marvelify/vedr2zh54dvdt4kyr8ek.jpg',
    variants: [
      {
        id: '1401',
        productHandle: 'antman-case',
        productName: 'Antman Case',
        name: 'Silver',
        price: 14,
        priceAfterDiscounted: 14,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136080/marvelify/vedr2zh54dvdt4kyr8ek.jpg',
      },
      {
        id: '1402',
        productHandle: 'antman-case',
        productName: 'Antman Case',
        name: 'Black',
        price: 14,
        priceAfterDiscounted: 14,
        currency: 'USD',
        availableQuantity: 0,
        previewImg:
          'https://res.cloudinary.com/cloudinaryassets/image/upload/v1716136080/marvelify/tvq5ob52vlqtal9m3zy0.jpg',
      },
    ],
  },
];

const getProducts = async (
  searchParams:
    | {
        sort?: string;
        availability?: string | string[];
        feature?: string | string[];
      }
    | undefined
) => {
  await delay(2000);
  let products = JSON.parse(JSON.stringify(originalProducts)) as ProductType[];

  if (!searchParams) {
    return products;
  }

  if (searchParams?.sort) {
    products.sort((a, b) => {
      if (searchParams.sort === 'highest') {
        return b.variants[0].price - a.variants[0].price;
      }
      if (searchParams.sort === 'lowest') {
        return a.variants[0].price - b.variants[0].price;
      }
      return 0;
    });
  }

  if (searchParams?.availability) {
    products = products.filter((product) => {
      if (searchParams.availability === 'in') {
        return product.isAvailableForSale;
      }
      if (searchParams.availability === 'out') {
        return !product.isAvailableForSale;
      }
      return true;
    });
  }

  return products;
};

const getProductByHandle = async (handle: string) => {
  await delay(2000);
  return originalProducts.find((product) => product.handle === handle);
};

const getFeaturedProducts = async () => {
  await delay(2000);
  return originalProducts.filter((product) => product.isFeatured);
};

const getRelatedProducts = async (handle: string) => {
  await delay(2000);
  return originalProducts
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
