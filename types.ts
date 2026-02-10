
export type Page = 'home' | 'program' | 'sponsors' | 'shop' | 'inscription';

export interface NavItem {
  label: string;
  page: Page;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  whatsappMsg: string;
}

export interface SponsorLevel {
  level: string;
  price: string;
  benefits: string[];
  colorClass: string;
  isDiamond?: boolean;
}
