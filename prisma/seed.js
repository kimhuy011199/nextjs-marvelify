const { PrismaClient } = require('@prisma/client');
const {
  products,
  variants,
  discounts,
  deliveryMethods,
  paymentMethods,
} = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.variant.deleteMany();
    console.log('Deleted records in variant table');

    await prisma.product.deleteMany();
    console.log('Deleted records in product table');

    await prisma.discount.deleteMany();
    console.log('Deleted records in discount table');

    await prisma.deliveryMethod.deleteMany();
    console.log('Deleted records in delivery method table');

    await prisma.paymentMethod.deleteMany();
    console.log('Deleted records in payment method table');

    await prisma.product.createMany({
      data: products,
    });
    console.log('Added product data');

    await prisma.variant.createMany({
      data: variants,
    });
    console.log('Added variant data');

    await prisma.discount.createMany({
      data: discounts,
    });
    console.log('Added discount data');

    await prisma.deliveryMethod.createMany({
      data: deliveryMethods,
    });
    console.log('Added delivery method data');

    await prisma.paymentMethod.createMany({
      data: paymentMethods,
    });
    console.log('Added payment method data');

    console.log('Finish seeding data 🚀');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
