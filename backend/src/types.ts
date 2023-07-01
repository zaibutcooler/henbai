import { Types } from "mongoose";

export interface CataType {
  name: string;
  big: boolean;
  enhance: boolean;
}

export interface OrderType {
  product: Types.ObjectId | ProductType;
  buyer: Types.ObjectId | ProfileType;
  country: string;
  city: string;
  location: string;
  contactAddress: string[];
  count: number;
  paid: boolean;
}

export interface ProductType {
  title: string;
  seller: Types.ObjectId | ProfileType;
  type: Types.ObjectId | CataType;
  reviews: Types.ObjectId[] | ReviewType;
  description: string;
  price: number;
  images: string[];
  instock: boolean;
  delay: string;
  count: number;
}

export interface SellerType {
  user: Types.ObjectId | UserType;
  description: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  products: Types.ObjectId[] | ProductType[];
  orders: Types.ObjectId[] | OrderType[];
  profileReviews: Types.ObjectId[] | ReviewType[];
}

export interface ProfileType {
  user: Types.ObjectId | UserType;
  image: string;
  firstName: string;
  lastName: string;
  isSeller: boolean;
  seller: Types.ObjectId | SellerType | null;
  dob: Date;
  country: string;
  city: string;
}

export interface ReviewType {
  isProduct: boolean;
  writer: Types.ObjectId | ProfileType;
  rating: number;
  body: string;
}

export interface UserType {
  email: string;
  password: string;
  profile: Types.ObjectId | ProfileType;
  created: Date;
}
