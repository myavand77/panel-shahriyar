export type TVendorAddress = {
  address: string;
  city: string;
  postal_code: string;
  state: string;
};

export type TVendorAgent = {
  email: string;
  first_name: string;
  last_name: string;
  mobile: string;
  national_id: string;
  phone: string;
  telegram_id: string;
  whatsapp_id: string;
};

export type TVendorBankAccount = {
  account_number: string;
  bank_name: string;
  sheba_number: string;
};

export type TVendorBasicInfoCompany = {
  brand_name: string;
  company_name: string;
  economic_id: string;
  email: string;
  national_id: string;
};

export type TVendorBasicInfoIndividual = {
  email: string;
  first_name: string;
  last_name: string;
  mobile: string;
  national_id: string;
};

export type TVendorInstallment = {
  installments: number;
  status:
    | "ACTIVE_INSTALLMENT"
    | "ACTIVE_CASH"
    | "DISABLE"
    | "SUSPEND"
    | "DELETED"
    | "ACTIVE_INSTALLMENT"
    | "ACTIVE_CASH"
    | "DISABLE"
    | "SUSPEND"
    | "DELETED";
  subscription: number;
};

export type TVendorTechnicalInfo = {
  allowed_ips: string[];
  api_key: string;
  callback_url: string;
  email: string;
  url: string;
  web_service_url: string;
};

export type TVendorSecret = {
  api_key: string;
  hash_key: string;
};

export type TVendorCreationPayload = {
  address: TVendorAddress;
  agent: TVendorAgent;
  bank_account: TVendorBankAccount;
  basic_info_company: TVendorBasicInfoCompany;
  basic_info_individual: TVendorBasicInfoIndividual;
  brand: string;
  category: string;
  description: string;
  documents: string[];
  installment: TVendorInstallment;
  logo: string;
  technical_info: TVendorTechnicalInfo;
  vendor_type: "individual" | "company";
};

export type TVendorCreationResponse = {
  address: TVendorAddress;
  agent: TVendorAgent;
  bank_account: TVendorBankAccount;
  basic_info_company: TVendorBasicInfoCompany;
  basic_info_individual: TVendorBasicInfoIndividual;
  brand: string;
  category: string;
  created_at: string;
  description: string;
  documents: string[];
  id: string;
  installment: TVendorInstallment;
  logo: string;
  merchant_id: number;
  provider_id: number;
  secret: TVendorSecret;
  shop_id: number;
  status: string;
  technical_info: TVendorTechnicalInfo;
  updated_at: string;
  vendor_type: "individual" | "company";
};
