import {
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react';

export const routes = {
  dashboard: {
    main: '/dashboard',
    profile: '/dashboard/profile',
  },

  pages: {
    signIn: '/',
  },

  role: {
    role: '/dashboard/settings/role',
    createRole: '/dashboard/settings/role/create',
    editRole: (slug: string) => `/dashboard/settings/role/${slug}/edit`,
  },
  users: {
    users: '/dashboard/users',
    createUser: '/dashboard/users/create',
    editUser: (slug: string) => `/dashboard/users/${slug}/edit`,
  },
  status: {
    status: '/dashboard/settings/status',
    createStatus: '/dashboard/settings/status/create',
    editStatus: (slug: string) => `/dashboard/settings/status/${slug}/edit`,
  },
  category: {
    category: '/dashboard/settings/category',
    createCategory: '/dashboard/settings/category/create',
    editCategory: (slug: string) => `/dashboard/settings/category/${slug}/edit`,
  },
  city: {
    city: '/dashboard/settings/city',
    createCity: '/dashboard/settings/city/create',
    editCity: (slug: string) => `/dashboard/settings/city/${slug}/edit`,
  },
  company: {
    company: '/dashboard/company',
    createCompany: '/dashboard/company/create',
    editCompany: (slug: string) => `/dashboard/company/${slug}/edit`,
    companyProducts: (id: string) => `/dashboard/company/products/${id}`,
  },
  products: {
    products: (id: string) => `/dashboard/company/products/${id}`,
    createProduct: (id: string) => `/dashboard/company/products/${id}/create`,
    editProduct: (id: string, productId: string) =>
      `/dashboard/company/products/${id}/edit/${productId}`,
  },
  companyCategory: {
    companyCategory: (id: string) => `/dashboard/company/category/${id}`,
    createCompanyCategory: (id: string) =>
      `/dashboard/company/category/${id}/create`,
    editCompanyCategory: (id: string, categoryId: string) =>
      `/dashboard/company/category/${id}/edit/${categoryId}`,
  },
};

export const dataNav = {
  user: {
    name: 'სახელი გვარი',
    email: 'info@stafilo.ge',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'მთავარი გვერდი',
      url: '/dashboard',
      icon: LayoutDashboardIcon,
    },
    {
      title: 'კომპანია',
      url: routes.company.company,
      icon: FolderIcon,
    },

    {
      title: 'მომხმარებლები',
      url: '#',
      icon: UsersIcon,
      items: [
        {
          title: 'ყველა მომხმარებელი',
          url: routes.users.users,
        },
      ],
    },

    {
      title: 'პარამეტრები',
      url: '#',
      icon: SettingsIcon,
      items: [
        {
          title: 'როლი',
          url: routes.role.role,
        },
        {
          title: 'სტატუსი',
          url: routes.status.status,
        },
        {
          title: 'კატეგორია',
          url: routes.category.category,
        },
        {
          title: 'ქალაქი',
          url: routes.city.city,
        },
      ],
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: CameraIcon,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: FileTextIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: FileCodeIcon,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'პარამეტრები',
      url: '#',
      icon: SettingsIcon,
    },
    {
      title: 'დახმარება',
      url: '#',
      icon: HelpCircleIcon,
    },
    // {
    //   title: 'Search',
    //   url: '#',
    //   icon: SearchIcon,
    // },
  ],
  documents: [
    {
      name: 'Data Library',
      url: '#',
      icon: DatabaseIcon,
    },
    {
      name: 'Reports',
      url: '#',
      icon: ClipboardListIcon,
    },
    {
      name: 'Word Assistant',
      url: '#',
      icon: FileIcon,
    },
  ],
};
