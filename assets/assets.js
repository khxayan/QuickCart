import logo2 from "./logo2.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import my_location_image from "./my_location_image.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import header1_image from "./header1.png";
import header2_image from "./header2.png";
import header3_image from "./header3.png";
import upload_area from "./upload_area.png";
import featuredproduct1_image from "./featuredproduct1.png";
import featuredproduct2_image from "./featuredproduct2.png";
import banner_2_bag_pc_image from "./banner 2 bag pc.png";
import banner_2_bag_phone_image from "./banner 2 bag phone.png";
import blue_school_bag23_image from "./Blue School bag23.png";
import featuredproduct3_image from "./featuredproduct3.png";
import checkmark from "./checkmark.png";
import product_details_page_apple_earphone_image1 from "./graybag1.png";


export const assets = {
  logo2,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  header1_image,
  header2_image,
  header3_image,
  upload_area,
  featuredproduct1_image,
  featuredproduct2_image,
  banner_2_bag_pc_image,
  banner_2_bag_phone_image,
  blue_school_bag23_image,
  featuredproduct3_image,
  product_details_page_apple_earphone_image1,
  checkmark,
};

export const BagIcon = () => {
  return (
    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
    </svg>
  )
}

export const CartIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>

  )
}

export const BoxIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
  </svg>
);

export const productsDummyData = [
  {
    _id: "1",
    name: "Urban Rolltop Backpack",
    description: "Stylish rolltop backpack designed for daily use. Water-resistant fabric, padded laptop compartment and multiple pockets make it perfect for college and office.",
    price: 499,
    offerPrice: 399,
    image: [
      "/bag_images/b1_1.png",
      "/bag_images/b1_2.jpg"
    ],
    category: "Laptop Bag",
    date: 1738667236865
  },

  {
    _id: "2",
    name: "Cute Kids School Bag",
    description: "Lightweight and colorful kids backpack with spacious compartments and comfortable shoulder straps. Ideal for school and daily activities.",
    price: 399,
    offerPrice: 329,
    image: [
      "/bag_images/b2_1.png",
      "/bag_images/b2_2.jpg"
    ],
    category: "Kids Bag",
    date: 1738667310300
  },

  {
    _id: "3",
    name: "Cartoon Kids Backpack",
    description: "Fun cartoon printed backpack designed for young students. Durable material with enough space for books, lunch box and water bottle.",
    price: 899,
    offerPrice: 799,
    image: [
      "/bag_images/b3_1.png",
      "/bag_images/b3_2.jpg"
    ],
    category: "School Bag",
    date: 1738667366224
  },

  {
    _id: "4",
    name: "Comfort Travel Backpack",
    description: "Ergonomic travel backpack with breathable padding and large storage compartments. Perfect for short trips, college and everyday carry.",
    price: 399,
    offerPrice: 349,
    image: [
      "/bag_images/b4_4.jpg",
      "/bag_images/b4_5.jpg",
      "/bag_images/b4_6.jpg"
    ],
    category: "Travel Bag",
    date: 1738667417511
  },

  {
    _id: "5",
    name: "Minimal Grey Laptop Backpack",
    description: "Modern laptop backpack with sleek design and anti-theft zipper. Includes padded laptop sleeve and USB charging port.",
    price: 899,
    offerPrice: 699,
    image: [
      "/bag_images/b5_1.png",
      "/bag_images/b5_2.jpg"
    ],
    category: "Laptop Bag",
    date: 1738667503075
  },

  {
    _id: "6",
    name: "Classic College Backpack",
    description: "Spacious college backpack with durable fabric and multiple organizer pockets. Comfortable straps for long hours of carrying.",
    price: 799,
    offerPrice: 599,
    image: [
      "/bag_images/b6_1.png",
      "/bag_images/b6_2.jpg"
    ],
    category: "College Bag",
    date: 1738667788883
  },

  {
    _id: "7",
    name: "Adventure Travel Backpack",
    description: "Heavy-duty travel backpack built for adventure. Large capacity with reinforced stitching and weather resistant material.",
    price: 1499,
    offerPrice: 1199,
    image: [
      "/bag_images/b7_1.png",
      "/bag_images/b7_2.jpeg"
    ],
    category: "Travel Bag",
    date: 1738667977644
  },

  {
    _id: "8",
    name: "Sports Gym Backpack",
    description: "Compact gym backpack designed for fitness lovers. Separate compartments for shoes, water bottle and workout essentials.",
    price: 699,
    offerPrice: 549,
    image: [
      "/bag_images/b8.png"
    ],
    category: "Gym Bag",
    date: 1738668086331
  },

  {
    _id: "9",
    name: "Printed School Backpack",
    description: "Trendy printed backpack with vibrant colors and strong stitching. Ideal for students carrying books and daily essentials.",
    price: 699,
    offerPrice: 599,
    image: [
      "/bag_images/b9.png"
    ],
    category: "School Bag",
    date: 1738668126660
  },

  {
    _id: "10",
    name: "Premium Office Laptop Bag",
    description: "Elegant laptop backpack with minimalist design. Includes padded laptop compartment, hidden pockets and premium fabric finish.",
    price: 1299,
    offerPrice: 999,
    image: [
      "/bag_images/b10.png"
    ],
    category: "Laptop Bag",
    date: 1738668619198
  }
]

export const userDummyData = {
  "_id": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  "name": "Aiyan khan",
  "email": "admin@example.com",
  "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ycnlnUnFiUDBYT2dEZ2h1ZmRXcGlpdWV5OXoiLCJyaWQiOiJ1c2VyXzJzWkZIUzFVSUl5c0p5RFZ6Q3BRaFVoVElodyJ9",
  "cartItems": {
    // "67a1f4e43f34a77b6dde9144": 3
  },
  "__v": 0
}

export const orderDummyData = [
  {
    "_id": "67a20934b3db72db5cc77b2b",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f4e43f34a77b6dde9144",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Urban Rolltop Backpack",
          "description": "Stylish rolltop backpack designed for daily use. Water-resistant fabric, padded laptop compartment and multiple pockets make it perfect for college and office.",
          "price": "499",
          "offerPrice": "399",
          "image": [
            "/bag_images/b1_1.png",
            "/bag_images/b1_2.jpg",
            "/bag_images/b1_3.jpg",
            "/bag_images/b1_4.jpg"
          ],
          "category": "Laptop Bag",
          "date": 1738667236865,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a20934b3db72db5cc77b2c"
      }
    ],
    "amount": "406.99",
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "Aiyan khan",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672426822,
    "__v": 0
  },
  {
    "_id": "67a20949b3db72db5cc77b2e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f52e3f34a77b6dde914a",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Cute Kids School Bag",
          "description": "Lightweight and colorful kids backpack with spacious compartments and comfortable shoulder straps. Ideal for school and daily activities.",
          "price": "429",
          "offerPrice": "329",
          "image": [
            "/bag_images/b2_1.png",
            "/bag_images/b2_2.jpg"
          ],
          "category": "Kids Bag",
          "date": 1738667310300,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a20949b3db72db5cc77b2f"
      }
    ],
    "amount": "329",
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "Aiyan khan",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672448031,
    "__v": 0
  },
  {
    "_id": "67a209bab3db72db5cc77b34",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "67a1f4e43f34a77b6dde9144",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Urban Rolltop Backpack",
          "description": "Stylish rolltop backpack designed for daily use. Water-resistant fabric, padded laptop compartment and multiple pockets make it perfect for college and office.",
          "price": "499",
          "offerPrice": "399",
          "image": [
            "/bag_images/b1_1.png",
            "/bag_images/b1_2.jpg",
            "/bag_images/b1_3.jpg",
            "/bag_images/b1_4.jpg"
          ],
          "category": "Earphone",
          "date": 1738667236865,
          "__v": 0
        },
        "quantity": 1,
        "_id": "67a209bab3db72db5cc77b35"
      }
    ],
    "amount": "406.99",
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "Aiyan khan",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": 1738672560698,
    "__v": 0
  }
]

export const addressDummyData = [
  {
    "_id": "67a1e4233f34a77b6dde9055",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "fullName": "Aiyan khan",
    "phoneNumber": "0123456789",
    "pincode": 654321,
    "area": "Main Road , 123 Street, G Block",
    "city": "City",
    "state": "State",
    "__v": 0
  }
]