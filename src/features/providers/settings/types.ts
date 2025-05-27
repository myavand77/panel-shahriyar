export type TVendorMeResponse = {
  address: {
    address: string;
    city: string;
    postal_code: string;
    state: string;
  };
  agent: {
    email: string;
    first_name: string;
    last_name: string;
    mobile: string;
    national_id: string;
    phone: string;
    telegram_id: string;
    whatsapp_id: string;
  };
  bank_account: {
    account_number: string;
    bank_name: string;
    sheba_number: string;
  };
  basic_info_company: {
    brand_name: string;
    company_name: string;
    economic_id: string;
    email: string;
    national_id: string;
  };
  basic_info_individual: {
    email: string;
    first_name: string;
    last_name: string;
    mobile: string;
    national_id: string;
  };
  brand: string;
  category: string;
  created_at: string;
  description: string;
  documents: string[];
  id: string;
  installment: {
    installments: number;
    status: string;
    subscription: number;
  };
  logo: string;
  merchant_id: number;
  provider_id: number;
  secret: {
    api_key: string;
    hash_key: string;
  };
  shop_id: number;
  status: string;
  technical_info: {
    allowed_ips: string[];
    api_key: string;
    callback_url: string;
    email: string;
    url: string;
    web_service_url: string;
  };
  updated_at: string;
  user_id: string;
  vendor_type: string;
};

export type TUpdateVendorRequest = {
  address?: {
    address?: string;
    city?: string;
    postal_code?: string;
    state?: string;
  };
  agent?: {
    email?: string;
    first_name?: string;
    last_name?: string;
    mobile?: string;
    national_id?: string;
    phone?: string;
    telegram_id?: string;
    whatsapp_id?: string;
  };
  bank_account?: {
    account_number?: string;
    bank_name?: string;
    sheba_number?: string;
  };
  basic_info_company?: {
    brand_name?: string;
    company_name?: string;
    economic_id?: string;
    email?: string;
    national_id?: string;
  };
  basic_info_individual?: {
    email?: string;
    first_name?: string;
    last_name?: string;
    mobile?: string;
    national_id?: string;
  };
  brand?: string;
  category?: string;
  description?: string;
  documents?: string[];
  installment?: {
    installments?: number;
    status?: string;
    subscription?: number;
  };
  logo?: string;
  technical_info?: {
    allowed_ips?: string[];
    api_key?: string;
    callback_url?: string;
    email?: string;
    url?: string;
    web_service_url?: string;
  };
};

export type AgentInfoFormValues = {
  "نام نماینده": string;
  "نام خانوادگی نماینده": string;
  "کدملی نماینده": string;
  "تلفن همراه نماینده": string;
  "آی‌دی تلگرام": string;
  "شماره واتساپ": string;
  ایمیل: string;
  "تلفن ثابت": string;
};

export type AuthInfoFormValues = {
  نام: string;
  "نام خانوادگی": string;
  "کد ملی": string;
  "تلفن همراه": string;
  ایمیل: string;
  استان: string;
  شهر: string;
  کدپستی: string;
  برند: string;
  دسته‌بندی: string;
  "شماره حساب": string;
  "شماره شبا": string;
  آدرس: string;
};

export type DocumentsFormValues = {
  tasis?: File | string | null;
  taghirat?: File | string | null;
  sahamdar?: File | string | null;
  emzadar?: File | string | null;
  logo?: File | string | null;
}

export type TechnicalInfoFormValues = {
  website?: string;
  webservice?: string;
  apiKey?: string;
  callback?: string;
  email?: string;
  ips?: string[];
};