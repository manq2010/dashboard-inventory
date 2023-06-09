import {
    ChartBarIcon,
    LockClosedIcon,
    ShoppingBagIcon,
    UserIcon,
    UserPlusIcon,
    UserGroupIcon,
    CalendarDaysIcon,
    TruckIcon,
    ChatBubbleLeftRightIcon,
    BanknotesIcon,
    ReceiptPercentIcon,
    QueueListIcon,
    BookOpenIcon,
    ChartPieIcon,
    HashtagIcon,
}  from '@heroicons/react/24/solid';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (

        <ChartBarIcon className="h-6 w-6 text-gray-500"/>
      
    )
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: (
        <ChartPieIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: (
        <UserGroupIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
      title: 'Items',
      path: '/items',
      icon: (
        <ShoppingBagIcon className="h-6 w-6 text-gray-500"/>
    )
},
{
  title: 'Rentals',
  path: '/rentals',
  icon: (
      <QueueListIcon className="h-6 w-6 text-gray-500"/>
  )
},
  {
    title: 'Account',
    path: '/account',
    icon: (
        <UserIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: (
        <ReceiptPercentIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Invoices',
    path: '/invoices',
    icon: (
        <BanknotesIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Logistics',
    path: '/logistics',
    icon: (
        <TruckIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: (
        <HashtagIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Kanban',
    path: '/kanban',
    icon: (
        <BookOpenIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: (
        <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Calender',
    path: '/calender',
    icon: (
        <CalendarDaysIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Login',
    path: '/auth/login',
    icon: (
        <LockClosedIcon className="h-6 w-6 text-gray-500"/>
    )
  },
  {
    title: 'Register',
    path: '/auth/register',
    icon: (
        <UserPlusIcon className="h-6 w-6 text-gray-500"/>
    )
  }
];
