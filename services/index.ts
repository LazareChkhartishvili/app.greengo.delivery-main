import { CreateEditCategorySchema } from '@/schemas/category-schema';
import { CreateEditProductSchema } from '@/schemas/product-schema';
import { CreateEditRoleSchema } from '@/schemas/role-schema';
import {
  CategoryIRoot,
  CategoryIRootObject,
  CompanyCategoryIRoot,
  CompanyCategoryIRootObject,
  CompanyIRoot,
  ProductCategoryIRoot,
  ProductIRoot,
  ProductIRootObject,
  RolesIRoot,
  SingleUserIRoot,
  UserListIRoot,
} from '@/types';

export const api = {
  services: {
    roles: {
      getRoles: async (token: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/role/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as RolesIRoot;
        return data;
      },

      getSingleRole: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/role/${id}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as RolesIRoot;
        return data;
      },

      createEditRole: async (
        token: string,
        roleData: CreateEditRoleSchema,
        id?: string
      ) => {
        const formData = new FormData();
        for (const key in roleData) {
          if (roleData[key as keyof typeof roleData] != null) {
            formData.append(
              key,
              roleData[key as keyof typeof roleData] as string
            );
          }
        }

        const url = id
          ? `app/admin/setting/role/${id}/update`
          : 'app/admin/setting/role/create';
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        return response;
      },

      deleteRole: async (token: string, id: number) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/role/${id}/delete`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        const data = (await response.json()) as RolesIRoot;
        return data;
      },
    },

    users: {
      getUsers: async (token: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/user/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as UserListIRoot;
        return data;
      },

      getSingleUser: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/user/${id}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as SingleUserIRoot;
        return data;
      },
    },

    status: {
      getStatus: async (token: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/status/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as RolesIRoot;
        return data;
      },

      getSingleStatus: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/status/${id}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as RolesIRoot;
        return data;
      },

      deleteStatus: async (token: string, id: number) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/status/${id}/delete`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        const data = (await response.json()) as RolesIRoot;
        return data;
      },

      createEditStatus: async (
        token: string,
        statusData: CreateEditRoleSchema,
        id?: string
      ) => {
        const formData = new FormData();
        for (const key in statusData) {
          if (statusData[key as keyof typeof statusData] != null) {
            formData.append(
              key,
              statusData[key as keyof typeof statusData] as string
            );
          }
        }

        const url = id
          ? `app/admin/setting/status/${id}/update`
          : 'app/admin/setting/status/create';
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        return response;
      },
    },

    category: {
      getCategory: async (token: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/category/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      getSingleCategory: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/category/${id}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      deleteCategory: async (token: string, id: number) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/category/${id}/delete`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      createEditCategory: async (
        token: string,
        categoryData: CreateEditCategorySchema,
        id?: string
      ) => {
        const formData = new FormData();
        for (const key in categoryData) {
          if (categoryData[key as keyof typeof categoryData] != null) {
            formData.append(
              key,
              categoryData[key as keyof typeof categoryData] as string
            );
          }
        }

        const url = id
          ? `app/admin/setting/category/${id}/update`
          : 'app/admin/setting/category/create';
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        return response;
      },

      dragSettingCategory: async (
        token: string,
        dragData: { id: number; sort: number }[]
      ) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/category/sort-update`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sorts: dragData }),
          }
        );
        if (!response.ok) {
          throw new Error('Failed to update data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },
    },

    city: {
      getCity: async (token: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/city/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      getSingleCity: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/city/${id}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      deleteCity: async (token: string, id: number) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/setting/city/${id}/delete`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      createEditCity: async (
        token: string,
        cityData: CreateEditCategorySchema,
        id?: string
      ) => {
        const formData = new FormData();
        for (const key in cityData) {
          if (cityData[key as keyof typeof cityData] != null) {
            formData.append(
              key,
              cityData[key as keyof typeof cityData] as string
            );
          }
        }

        const url = id
          ? `app/admin/setting/city/${id}/update`
          : 'app/admin/setting/city/create';
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        return response;
      },
    },

    company: {
      getCompany: async (token: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CompanyIRoot;
        return data;
      },

      getSingleCompany: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/${id}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CategoryIRootObject;
        return data;
      },

      deleteCompany: async (token: string, id: number) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/${id}/delete`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      createEditCompany: async (
        token: string,
        companyData: CreateEditCategorySchema,
        id?: string
      ) => {
        const formData = new FormData();
        for (const key in companyData) {
          if (companyData[key as keyof typeof companyData] != null) {
            formData.append(
              key,
              companyData[key as keyof typeof companyData] as string
            );
          }
        }

        const url = id
          ? `app/admin/company/${id}/update`
          : 'app/admin/company/create';

        console.log(
          'Creating company with URL:',
          `https://greengo-api-production.up.railway.app/api/${url}`
        );
        console.log('Token:', token);
        console.log('FormData:', formData);

        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            },
            body: formData,
          }
        );

        console.log('Response status:', response.status);
        console.log('Response:', response);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
        }

        return response;
      },

      getCompanyProducts: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product/${id}/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as ProductIRoot;
        return data;
      },

      getCategoryProducts: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product-category/${id}/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as ProductCategoryIRoot;
        return data;
      },

      dragCompany: async (
        token: string,
        dragData: { id: number; sort: number }[]
      ) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/sort-update`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sorts: dragData }),
          }
        );
        if (!response.ok) {
          throw new Error('Failed to update data');
        }
        const data = (await response.json()) as CompanyIRoot;
        return data;
      },
    },

    products: {
      getSingleProduct: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product/${id}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as ProductIRootObject;
        return data;
      },

      deleteProduct: async (token: string, id: number) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product/${id}/delete`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      createEditProduct: async (
        token: string,
        productData: CreateEditProductSchema,
        productId?: string
      ) => {
        const formData = new FormData();
        for (const key in productData) {
          if (productData[key as keyof typeof productData] != null) {
            formData.append(
              key,
              productData[key as keyof typeof productData] as string
            );
          }
        }

        const url = productId
          ? `app/admin/company/product/${productId}/update`
          : 'app/admin/company/product/create';
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        return response;
      },

      createCategoryProduct: async (
        token: string,
        productData: CreateEditProductSchema,
        productId?: string
      ) => {
        const formData = new FormData();
        for (const key in productData) {
          if (productData[key as keyof typeof productData] != null) {
            formData.append(
              key,
              productData[key as keyof typeof productData] as string
            );
          }
        }

        const url = productId
          ? `app/admin/company/product-category/${productId}/update`
          : 'app/admin/company/product-category/create';
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        return response;
      },

      dragProducts: async (
        token: string,
        dragData: { id: number; sort: number }[]
      ) => {
        const response = await fetch(
          //app/admin/company/sort-update ???
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product-category/sort-update`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sorts: dragData }),
          }
        );
        if (!response.ok) {
          throw new Error('Failed to update data');
        }
        const data = (await response.json()) as ProductIRoot;
        return data;
      },
    },

    companyCategory: {
      getCompanyCategory: async (token: string, id: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product-category/${id}/list`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CompanyCategoryIRoot;
        return data;
      },

      getSingleCompanyCategory: async (token: string, categoryId: string) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product-category/${categoryId}/show`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = (await response.json()) as CompanyCategoryIRootObject;
        return data;
      },

      deleteCompanyCategory: async (token: string, categoryId: number) => {
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/app/admin/company/product-category/${categoryId}/delete`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to delete data');
        }
        const data = (await response.json()) as CategoryIRoot;
        return data;
      },

      createEditCompanyCategory: async (
        token: string,
        categoryData: CreateEditCategorySchema,
        categoryId?: string
      ) => {
        const formData = new FormData();
        for (const key in categoryData) {
          if (categoryData[key as keyof typeof categoryData] != null) {
            formData.append(
              key,
              categoryData[key as keyof typeof categoryData] as string
            );
          }
        }

        const url = categoryId
          ? `app/admin/company/product-category/${categoryId}/update`
          : 'app/admin/company/product-category/create';
        const response = await fetch(
          `https://greengo-api-production.up.railway.app/api/${url}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        return response;
      },
    },
  },
};
