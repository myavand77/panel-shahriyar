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
