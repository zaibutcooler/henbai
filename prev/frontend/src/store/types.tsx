import { Types } from "mongoose";

export interface OrderType {}

export interface ProductType {}

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
  firstName: string;
  lastName: string;
  dob: Date;
  country: string;
  city: string;
}

export interface ReviewType {}

export interface UserType {
  email: string;
  password: string;
  seller: boolean;
  profile: Types.ObjectId | ProfileType;
  created: Date;
}
