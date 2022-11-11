import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Hasibul Hamid',
      email: 'hamidhasibul@gmail.com',
      password: bcrypt.hashSync('admin'),
      address: 'Halishahar, Chittagong',
      phone: '01521400000',
      image: './assets/images/users/57.jpg',
      isAdmin: true,
    },
    {
      name: 'Tanjimul Hamid',
      email: 'hamidtanjimul@gmail.com',
      password: bcrypt.hashSync('notadmin'),
      address: 'Halishahar, Chittagong',
      phone: '01521400001',
      image: './assets/images/users/28.jpg',
      isAdmin: false,
    },
  ],
  category: [
    {
      name: 'Accessories',
    },
    {
      name: 'Electronics',
    },
  ],
  products: [
    {
      name: 'TWS Earbuds',
      slug: 'tws',
      category: 'Electronics',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor est quia suscipit aspernatur iste porro quis eligendi autem veniam!',
      price: '1500',
      image: './assets/images/yasin-hasan-_h50cvQCj_M-unsplash.jpg',
      seller: 'Hasibul Hamid',
    },
    {
      name: 'Sunglass',
      slug: 'sunglass',
      category: 'Accessories',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor est quia suscipit aspernatur iste porro quis eligendi autem veniam!',
      price: '540',
      image: './assets/images/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg',
      seller: 'Tanjimul Hamid',
    },
  ],
  sellers: [{}],
};

export default data;
