export interface GatewayInfoProps {
  apiKey?: string;
  swaggerAddress?: string;
}

export interface VendorAddress {
  address: string;
  city: string;
  postal_code: string;
  state: string;
}

export interface VendorAgent {
  email: string;
  first_name: string;
  last_name: string;
  mobile: string;
  national_id: string;
  phone: string;
  telegram_id: string;
  whatsapp_id: string;
}

export interface VendorBankAccount {
  account_number: string;
  bank_name: string;
  sheba_number: string;
}

export interface VendorBasicInfoCompany {
  brand_name: string;
  company_name: string;
  economic_id: string;
  email: string;
  national_id: string;
}

export interface VendorBasicInfoIndividual {
  email: string;
  first_name: string;
  last_name: string;
  mobile: string;
  national_id: string;
}

export interface VendorInstallment {
  installments: number;
  status: 'ACTIVE_INSTALLMENT';
  subscription: number;
}

export interface VendorSecret {
  api_key: string;
}

export interface VendorTechnicalInfo {
  allowed_ips: string[];
  api_key: string;
  callback_url: string;
  email: string;
  url: string;
  web_service_url: string;
}

export interface Vendor {
  address: VendorAddress;
  agent: VendorAgent;
  bank_account: VendorBankAccount;
  basic_info_company: VendorBasicInfoCompany;
  basic_info_individual: VendorBasicInfoIndividual;
  brand: string;
  category: string;
  created_at: string;
  description: string;
  documents: string[];
  id: string;
  installment: VendorInstallment;
  logo: string;
  merchant_id: number;
  provider_id: number;
  secret: VendorSecret;
  shop_id: number;
  shop_status: 'ENABLE';
  status: 'pending';
  technical_info: VendorTechnicalInfo;
  updated_at: string;
  user_id: string;
  vendor_type: 'individual';
}
