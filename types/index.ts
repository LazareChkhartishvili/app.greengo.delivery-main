export interface RolesIRoot {
  success: boolean;
  data: RolesI[];
  message: string;
}

export interface RolesI {
  id: number;
  name: string;
  code: string;
  color: string;
}

export interface SessionRootI {
  user: SessionUserI;
}

export interface SessionUserI {
  success: boolean;
  data: SessionDataI;
  message: string;
  id: string;
}

export interface SessionDataI {
  token: string;
  name: string;
}

export interface UserListIRoot {
  success: boolean;
  data: UserListI[];
  message: string;
}

export interface UserListI {
  id: number;
  name: string;
  id_number: any;
  email: string;
  phone: string;
  status_id: number;
  role_id: number;
  created_at: string;
  updated_at: string;
}

export interface CategoryIRoot {
  success: boolean;
  data: CategoryI[];
  message: string;
}

export interface CategoryIRootObject {
  success: boolean;
  data: CategoryI;
  message: string;
}

export interface CategoryI {
  id: number;
  name_ka: string;
  name_en: any;
  description_ka: any;
  description_en: any;
  picture: any;
  svg: any;
  show_count: string;
  status: number;
}

export interface CityIRoot {
  success: boolean;
  data: CityI[];
  message: string;
}

export interface CityI {
  id: number;
  name_ka: string;
  name_en?: string;
  picture: any;
  show_count: string;
  status?: number;
}

export interface CompanyIRoot {
  success: boolean;
  data: CompanyI[];
  message: string;
}

export interface CompanyI {
  id: number;
  name_ka: string;
  name_en: string;
  description_ka: string;
  description_en: string;
  category_id: number;
  city_id: number;
  address_ka: string;
  address_en: string;
  address_latitude: any;
  address_longitude: any;
  phone: string;
  email: string;
  soc_facebook: string;
  soc_instagram: string;
  soc_youtobe: string;
  picture: string;
  show_count: string;
  status: number;
}

export interface ProductIRoot {
  success: boolean;
  data: ProductI[];
  message: string;
}

export interface ProductIRootObject {
  success: boolean;
  data: ProductI;
  message: string;
}

export interface ProductI {
  id: number;
  company_id: number;
  product_category_id: number;
  name_ka: string;
  name_en: any;
  description_ka: any;
  description_en: any;
  picture: string;
  old_price: string;
  price: string;
  show_count: string;
  status: any;
}

export interface ProductCategoryIRoot {
  success: boolean;
  data: ProductCategoryI[];
  message: string;
}

export interface ProductCategoryI {
  id: number;
  company_id: number;
  name_ka: string;
  name_en: any;
  description_ka: any;
  description_en: any;
  picture: string;
  icon: any;
  show_count: string;
  status: any;
}

export interface CompanyCategoryIRoot {
  success: boolean;
  data: CompanyCategoryI[];
  message: string;
}

export interface CompanyCategoryIRootObject {
  success: boolean;
  data: CompanyCategoryI;
  message: string;
}

export interface CompanyCategoryI {
  id: number;
  company_id: number;
  name_ka: string;
  name_en: any;
  description_ka: any;
  description_en: any;
  picture: string;
  icon: any;
  show_count: string;
  status: any;
}

export interface SingleUserIRoot {
  success: boolean;
  data: SingleUserI;
  message: string;
}

export interface SingleUserI {
  id: number;
  name: string;
  id_number: any;
  email: string;
  phone: string;
  status_id: number;
  role_id: number;
  created_at: string;
  updated_at: string;
}
