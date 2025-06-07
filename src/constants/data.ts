import { NavItem } from '@/types';

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Home',
    url: '/dashboard/overview',
    icon: 'home',
    shortcut: ['h', 'h'],
    isActive: false,
    items: []
  },
  {
    title: 'Restaurants',
    url: '/dashboard/restaurants',
    icon: 'store',
    shortcut: ['r', 'r'],
    isActive: false,
    items: []
  },
  {
    title: 'Users',
    url: '/dashboard/users',
    icon: 'users',
    shortcut: ['u', 'u'],
    isActive: false,
    items: []
  },
  {
    title: 'Subscription & Billing',
    url: '/dashboard/billing',
    icon: 'creditCard',
    shortcut: ['b', 'b'],
    isActive: false,
    items: []
  },
  {
    title: 'Menus',
    url: '/dashboard/menus',
    icon: 'list',
    shortcut: ['m', 'm'],
    isActive: false,
    items: []
  },
  {
    title: 'Content Library',
    url: '/dashboard/library',
    icon: 'library',
    shortcut: ['c', 'c'],
    isActive: false,
    items: []
  },
  {
    title: 'Analytics & Reports',
    url: '/dashboard/analytics',
    icon: 'barChart',
    shortcut: ['a', 'a'],
    isActive: false,
    items: []
  },
  {
    title: 'AI Tools',
    url: '/dashboard/ai',
    icon: 'bot',
    shortcut: ['i', 'i'],
    isActive: false,
    items: []
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: 'settings',
    shortcut: ['s', 's'],
    isActive: false,
    items: []
  }
];


export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }
];
