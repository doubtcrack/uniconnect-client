// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Best Contributions",
    url: "/best-selling",
  },
  {
    title: "Products",
    url: "/products",
  },
  // {
  //   title: "Events",
  //   url: "/events",
  // },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "onCampus delivery",
    Description: "Personally meet and exchange within university ",
    icon: (
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixBDvyXJWzwO7nC3aG6d7LlKkch22yZh6lULkM1Jgpk2RsIJlDhmhbcer-m5iKRuZkHSNgCHMzk70JmnXfEB25UXUJ4_3DYIOw0l2Mt_j_aofm7rzyZzRQdg8Vy8J41JzoBVgD7mgISTD4VuJfGhQ-seGc7pPycIEvxEGL_NRisIsviDJOjVFbkTfHfQ/s60/oncampus_delievery.webp"
        alt="benefit-icons"
      />
    ),
  },
  {
    id: 2,
    title: "payment on the spot",
    Description: "Contact the seller and Finalise the price",
    icon: (
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzK-m3cUOJ7uG2nisjoGZgk19uiKFrdnSdrVDYSzcKesRuk87U39L7OboAkG7eIy8J06gGiFxEQOwcjps2smlUPV0WhpHmp9r7gpMUAK0JvSpWAtiRk3hyFw-JktFu5UlLrfq2YGK5dDBCiqTJFBUoa7YYQp92kHaGu-CuwwAor6i0zRaC6y1ky4KKbw/s60/cash-on-delivery.webp"
        alt="benefit-icons"
      />
    ),
  },
  {
    id: 3,
    title: "Help others/Get Help",
    Description:
      "Post your items if not in use right now to promote reuse & recycling",
    icon: (
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4YlGnsu2UowZQLJsCqnriJ4AUA_VixettxfCjX9UNKCH2GpB0DneuBOnMhItAUeQkhRABVN6yP7clONpSqHuMx-iq81UtxMmMjzZ0PWDu-1mLo7EY5Mg_epSXj6uWxF1cg0WQ2gtYFUJJsYf1BoRdQbomjUMUcc0wWZR8IP3-E9IT0NzoRyuR_SGZAQ/s60/connect.webp"
        alt="benefit-icons"
      />
    ),
  },
  {
    id: 4,
    title: "Make connections",
    Description:
      "The seller is also a student & most probably a Senior, so make a bond with them.",
    icon: (
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjx_FcXYPAWe38LTWj41oDj5c2Lfkl-npZELFMPr0ha876GgA-flQ2-OcIWY3vXX3ZaLoxq4d4FjlesiZK9GRHYv25QUkbi8_bGb1j7nyxJqBeJMkZ_hdE-mRyfJMIy09SZnftzXt-Wm-AkoDa9MM6St2Vjm1aYrCd6iX8fmfef8GjVFyk2lwqLvix7bA/s60/help.webp"
        alt="benefit-icons"
      />
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Digital Gadgets",
    description: "We offer the newest products at the most competitive prices",
    image_Url:
      "https://uniconnect-v2.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fdigital-category.webp&w=256&q=75",
    imgWidth: 190,
    imgHeight: 240,
    styles: {
      background:
        "linear-gradient(216deg, rgba(173, 244, 206, 1) 16%, rgba(173, 232, 244, 1) 100% )",
      flexDirection: "row",
      paddingBlock: "2rem",
      paddingInline: "1rem",
      gridColumn: "span 3 / span 3",
    },
  },
  {
    id: 2,
    title: "Cloths and Accesories",
    description: "The most popular brands with the most reasonable prices",
    image_Url:
      "https://uniconnect-v2.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Ffashion-category.webp&w=256&q=75",
    imgWidth: 200,
    imgHeight: 220,
    styles: {
      background:
        "linear-gradient(216deg, rgba(255, 186, 125, 1) 16%, rgba(255, 167, 139, 1) 100% )",
      flexDirection: "row",
      paddingInline: "1rem",
      paddingBlock: "2rem",
      gridRow: "span 6 / span 6",
      gridColumn: "span 3 / span 3",
    },
  },
  {
    id: 3,
    title: "Digital Files",
    description:
      "Access the e-books, notes, previous year papers and make your learning easier by best learning resources.",
    image_Url:
      "https://uniconnect-v2.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2FdigitalFiles-category.webp&w=828&q=75",
    imgWidth: 190,
    imgHeight: 240,
    styles: {
      background:
        "linear-gradient(126deg, rgba(215, 215, 215, 1) 16%, rgba(242, 241, 241, 1) 100%)",
      flexDirection: "row",
      paddingInline: "1rem",
      paddingBlock: "0.5rem",
      gridRow: "span 6 / span 6",
      gridColumn: "span 3 / span 3",
    },
  },
  {
    id: 4,
    title: "Sports and Trip",
    description: "Variety in choice",
    image_Url:
      "https://uniconnect-v2.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fsport-category.webp&w=256&q=75",
    imgWidth: 130,
    imgHeight: 150,
    styles: {
      background:
        "linear-gradient(216deg,rgb(235 255 0) 16%,rgba(255, 214, 10, 1) 100%)",
      flexDirection: "row-reverse",
      paddingInline: "1rem",
      paddingBlock: "2rem",
      gridRow: "span 5 / span 5",
      gridColumn: "span 3 / span 3",
    },
  },
  {
    id: 5,
    title: "Books and Stationery",
    description: "Variety in choice",
    image_Url:
      "https://uniconnect-v2.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fstationery-category.webp&w=384&q=75",
    imgWidth: 300,
    imgHeight: 250,
    styles: {
      background: "#ffe3ee",
      flexDirection: "row",
      paddingInline: "1rem",
      paddingBlock: "unset",
      gridRow: "span 2 / span 2",
      gridColumn: "span 4 / span 4",
    },
  },
  {
    id: 6,
    title: "Furniture and Room Stuff",
    description: "In accordance with the designs of the day",
    image_Url:
      "https://uniconnect-v2.vercel.app/_next/image?url=%2Fimages%2Fcategory-img%2Fhouse-category.webp&w=384&q=75",
    imgWidth: 320,
    imgHeight: 240,
    styles: {
      background: "#e1ebc0",
      flexDirection: "row",
      paddingInline: "1rem",
      paddingBlock: "unset",
      gridRow: "span 2 / span 2",
      gridColumn: "span 5 / span 5",
    },
  },
  {
    id: 7,
    title: "Others",
    description: "Variety in choice",
    image_Url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy8dPShr-XdhSGEqtKIhOYPHFo-9r4NW8R2NccpZ4KyQvSMOzA2bfrFhVW-he2FWt-Cb2jgJ15wRq13mPDf3as0c70sZXTDArgyW3nsISro7iVUCWYCO1TzmVjwLTPiRaatGKhx1SHire0INt0rFIEYuUuTJVo2zNV9tnm5rZyZmlRQ-icryL6Vy6peQ/s320/%5Bremoval.ai%5D_tmp-6479eaafaaf0b.png",
    imgWidth: 200,
    imgHeight: 240,
    styles: {
      background: "#dfdfe1",
      flexDirection: "row-reverse",
      paddingInline: "1rem",
      paddingBlock: "2rem",
      gridRow: "span 2 / span 2",
      gridColumn: "span 9 / span 9",
      position: "relative",
      justifyContent: "center",
    },
  },
];

// product Data
export const productData = [
  {
    id: 1,
    category: "Digital Gadgets",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 35,
    stock: 10,
  },
  {
    id: 2,
    category: "Digital Gadgets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 80,
    stock: 10,
    category: "Mobile & Tablets",
  },
  {
    id: 1,
    category: "Digital Gadgets",
    name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Apple inc.",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1099,
    discount_price: 1049,
    rating: 4,
    total_sell: 75,
    stock: 10,
    category: "Computers & Laptop",
  },
  {
    id: 4,
    category: "Others",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
      category: "Others",
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 12,
    stock: 10,
  },
  {
    id: 5,
    category: "Others",
    name: "New Trend shoes for gents with all sizes",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 120,
    discount_price: 89,
    rating: 5,
    total_sell: 49,
    stock: 10,
    category: "Shoes",
  },
  {
    id: 1,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    category: "Music and Gaming",
  },
  {
    id: 4,
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 100,
    discount_price: 79,
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 1,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
  {
    id: 2,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
  },
  {
    id: 1,
    category: "Music and Gaming",
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Careers",
    link: "/carrers",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "Digital Gadgets",
  },
  {
    name: "Furniture & Room Stuff",
  },
  {
    name: "Cloths & Accessories",
  },
  {
    name: "Sports & Trips",
  },
  {
    name: "Books, Stationery & Art",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Events",
  },
  {
    name: "Seller DashBoard",
  },
  {
    name: "Shop",
  },
  {
    name: "Chat DashBoard",
  },
];
