const products = [
  {
    title: 'Acme Cup',
    amount: 15,
    image_url: ['/products/cup-black.png', '/products/cup-white.png'],
    category: 'drinkware',
    tag: 'homepage-featured-product',
    color: ['black', 'white'],
  },
  {
    title: 'Acme Mug',
    amount: 15,
    image_url: ['/products/mug-1.png', '/products/mug-2.png'],
    category: 'drinkware',
    tag: 'common',
  },
  {
    title: 'Acme Drawstring Bag',
    amount: 12,
    image_url: ['/products/bag-black.png', '/products/bag-white.png'],
    category: 'bags',
    tag: 'homepage-featured-product',
    color: ['black', 'white'],
  },
  {
    title: 'Acme Circles T-Shirt',
    amount: 20,
    image_url: [
      '/products/t-shirt-circles-black.png',
      '/products/t-shirt-circles-blue.png',
      '/products/t-shirt-circles-white.png',
    ],
    category: 'shirts',
    tag: 'homepage-featured-product',
    size: ['s', 'm', 'l'],
    color: ['black', 'white', 'blue'],
  },
  {
    title: 'Acme Keyboard',
    amount: 150,
    image_url: ['/products/keyboard.png'],
    category: 'electronics',
    tag: 'common',
  },
  {
    title: 'Acme Sticker',
    amount: 4,
    image_url: ['/products/sticker.png'],
    category: 'stickers',
    tag: 'common',
  },
  {
    title: 'Acme Rainbow Sticker',
    amount: 4,
    image_url: ['/products/sticker-rainbow.png'],
    category: 'stickers',
    tag: 'common',
  },
  {
    title: 'Acme Hoodie',
    amount: 50,
    image_url: ['/products/hoodie-1.png', '/products/hoodie-2.png'],
    category: 'hoodies',
    tag: 'common',
    size: ['l', 'xl', 'xxl'],
  },
  {
    title: 'Acme Cap',
    amount: 20,
    image_url: ['/products/hat-1.png', '/products/hat-2.png', '/products/hat-3.png'],
    category: 'headware',
    tag: 'common',
  },
  {
    title: 'Acme Baby Cap',
    amount: 10,
    image_url: ['/products/baby-cap-black.png', '/products/baby-cap-gray.png', '/products/baby-cap-white.png'],
    category: 'kids',
    tag: 'common',
    color: ['black', 'gray', 'white'],
  },
  {
    title: 'Acme Cowboy Hat',
    amount: 160,
    image_url: [
      '/products/cowboy-hat-black-1.png',
      '/products/cowboy-hat-black-2.png',
      '/products/cowboy-hat-black-3.png',
      '/products/cowboy-hat-black-4.png',
      '/products/cowboy-hat-black-5.png',
      '/products/cowboy-hat-black-6.png',
      '/products/cowboy-hat-tan-1.png',
      '/products/cowboy-hat-tan-2.png',
      '/products/cowboy-hat-tan-3.png',
      '/products/cowboy-hat-tan-4.png',
      '/products/cowboy-hat-tan-5.png',
      '/products/cowboy-hat-tan-6.png',
    ],
    category: 'headware',
    tag: 'common',
    color: ['black', 'tan'],
  },
  {
    title: 'Acme T-Shirt',
    amount: 20,
    image_url: [
      '/products/t-shirt-color-black.png',
      '/products/t-shirt-color-blue.png',
      '/products/t-shirt-color-gray.png',
      '/products/t-shirt-color-pink.png',
      '/products/t-shirt-color-white.png',
    ],
    category: 'shirts',
    tag: 'common',
    size: ['xs', 's', 'm', 'l', 'xl'],
    color: ['black', 'white', 'blue', 'gray', 'pink'],
  },
  {
    title: 'Acme Prism T-Shirt',
    amount: 25,
    image_url: [
      '/products/t-shirt-spiral-1.png',
      '/products/t-shirt-spiral-2.png',
      '/products/t-shirt-spiral-3.png',
      '/products/t-shirt-spiral-4.png',
    ],
    category: 'shirts',
    tag: 'common',
    size: ['m', 'l', 'xl'],
  },
  {
    title: 'Acme Slip-On Shoes',
    amount: 45,
    image_url: ['/products/shoes-1.png', '/products/shoes-2.png', '/products/shoes-3.png', '/products/shoes-4.png'],
    category: 'footware',
    tag: 'common',
    size: ['38', '39', '40', '41', '42'],
  },
  {
    title: 'Acme Bomber Jacket',
    amount: 50,
    image_url: ['/products/bomber-jacket-army.png', '/products/bomber-jacket-black.png'],
    category: 'jackets',
    tag: 'common',
    size: ['s', 'm', 'l', 'xl', 'xxl'],
    color: ['army', 'black'],
  },
  {
    title: 'Acme Pacifier',
    amount: 10,
    image_url: ['/products/pacifier-1.png', '/products/pacifier-2.png'],
    category: 'kids',
    tag: 'common',
  },
  {
    title: 'Acme Baby Onesie',
    amount: 10,
    image_url: [
      '/products/baby-onesie-beige-1.png',
      '/products/baby-onesie-beige-2.png',
      '/products/baby-onesie-black-1.png',
      '/products/baby-onesie-black-2.png',
      '/products/baby-onesie-white-1.png',
      '/products/baby-onesie-white-2.png',
    ],
    category: 'kids',
    tag: 'common',
    size: ['nb', '3m', '6m', '12m', '18m', '24m'],
    color: ['white', 'black', 'beige'],
  },
  {
    title: 'Acme Dog Sweater',
    amount: 20,
    image_url: ['/products/dog-sweater-1.png', '/products/dog-sweater-2.png'],
    category: 'pets',
    tag: 'common',
    size: ['0 - 5 lbs', '5 - 20 lbs', '20 - 50 lbs', '50 - 75 lbs', '75+ lbs'],
  },
];

module.exports = {products};
