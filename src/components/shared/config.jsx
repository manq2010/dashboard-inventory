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
    path: '/dashboard',
    icon: (

        <ChartBarIcon className="h-6 w-6"/>
      
    )
  },
  {
    title: 'Analytics',
    path: '/dashboard/analytics',
    icon: (
        <ChartPieIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Customers',
    path: '/dashboard/customers',
    icon: (
        <UserGroupIcon className="h-6 w-6"/>
    )
  },
  {
      title: 'Items',
      path: '/dashboard/items',
      icon: (
        <ShoppingBagIcon className="h-6 w-6"/>
    )
},
{
  title: 'Rentals',
  path: '/dashboard/rentals',
  icon: (
      <QueueListIcon className="h-6 w-6"/>
  )
},
  {
    title: 'Account',
    path: '/dashboard/account',
    icon: (
        <UserIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Orders',
    path: '/dashboard/orders',
    icon: (
        <ReceiptPercentIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Invoices',
    path: '/dashboard/invoices',
    icon: (
        <BanknotesIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Logistics',
    path: '/dashboard/logistics',
    icon: (
        <TruckIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: (
        <HashtagIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Kanban',
    path: '/dashboard/kanban',
    icon: (
        <BookOpenIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Chat',
    path: '/dashboard/chat',
    icon: (
        <ChatBubbleLeftRightIcon className="h-6 w-6"/>
    )
  },
  {
    title: 'Calender',
    path: '/dashboard/calender',
    icon: (
        <CalendarDaysIcon className="h-6 w-6"/>
    )
  }
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //       <LockClosedIcon className="h-6 w-6"/>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //       <UserPlusIcon className="h-6 w-6"/>
  //   )
  // }
];
