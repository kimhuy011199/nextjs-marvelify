const { PrismaClient } = require('@prisma/client');
const { variants, products } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.variant.deleteMany();
    console.log('Deleted records in variant table');

    await prisma.product.deleteMany();
    console.log('Deleted records in product table');

    await prisma.product.createMany({
      data: products,
    });
    console.log('Added product data');

    await prisma.variant.createMany({
      data: variants,
    });
    console.log('Added variant data');

    console.log('Finish seeding data 🚀');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
