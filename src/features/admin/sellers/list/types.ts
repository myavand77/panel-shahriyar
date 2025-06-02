export interface BasicInfoIndividual {
  first_name: string;
  last_name: string;
  national_id: string;
  mobile: string;
  email: string;
}

export interface BasicInfoCompany {
  company_name: string;
  brand_name: string;
  national_id: string;
  economic_id: string;
  email: string;
}

export interface Address {
  state: string;
  city: string;
  address: string;
  postal_code: string;
}

export interface BankAccount {
  bank_name: string;
  account_number: string;
  sheba_number: string;
}

export interface TechnicalInfo {
  url: string;
  web_service_url: string;
  api_key: string;
  callback_url: string;
  allowed_ips: string[];
  email: string;
}

export interface Agent {
  first_name: string;
  last_name: string;
  national_id: string;
  mobile: string;
  email: string;
  telegram_id: string;
  whatsapp_id: string;
  phone: string;
}

export interface Secret {
  api_key: string;
}

export interface Installment {
  installments: number;
  subscription: number;
  status: "ACTIVE_CASH" | "ACTIVE_INSTALLMENT" | string;
}

export interface Vendor {
  id: string;
  user_id: string;
  provider_id: number;
  merchant_id: number;
  shop_id: number;
  vendor_type: "company" | string;
  description: string;
  basic_info_individual: BasicInfoIndividual;
  basic_info_company: BasicInfoCompany;
  address: Address;
  bank_account: BankAccount;
  brand: string;
  logo: string;
  category: string;
  shop_status: "ENABLE" | "DISABLE" | string;
  documents: string[];
  technical_info: TechnicalInfo;
  agent: Agent;
  status: "pending" | string;
  secret: Secret;
  installment: Installment;
  created_at: string;
  updated_at: string;
}

export type VendorsResponse = Vendor[];
