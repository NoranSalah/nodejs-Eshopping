import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nouran',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('Nouran1234', 8),
    },
    {
      name: 'Sarah',
      email: 'sarah@gmail.com',
      password: bcrypt.hashSync('Sarah1234', 8),
    },
  ],
  products: [
    {
      name: 'Nike Shirt',
      image: '/images/p1.jpg',
      price: 120,
      brand: 'Nike',
      description: 'high quality Shirt product',
    },
    {
      name: 'Adidas Shirt',
      image: '/images/p2.jpg',
      price: 100,
      brand: 'Adidas',
      description: 'high quality Shirt product',
    },
    {
      name: 'Lacoste Shirt',
      image: '/images/p3.jpg',
      price: 220,
      brand: 'Lacoste',
      description: 'high quality Shirt product',
    },

  ],
};
export default data;
