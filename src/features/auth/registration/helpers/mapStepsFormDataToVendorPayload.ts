import { StepsFormData } from "@/features/auth/components/steps/StepsFormContext";
import { TVendorCreationPayload } from "@/features/auth/registration/types";

export function mapStepsFormDataToVendorPayload(
  data: StepsFormData,
  vendorType: "individual" | "company"
): TVendorCreationPayload {
  return {
    address: {
      address: data.address || "",
      city: data.city || "",
      postal_code: data.postalCode || "",
      state: data.province || "",
    },
    agent: {
      email: data.repEmail || "",
      first_name: data.repName || "",
      last_name: data.repLastName || "",
      mobile: data.repPhone || "",
      national_id: data.repNationalId || "",
      phone: data.repLandline || "",
      telegram_id: data.repTelegram || "",
      whatsapp_id: data.repWhatsapp || "",
    },
    bank_account: {
      account_number: data.accountNumber || "",
      bank_name: "نام بانک", // TODO: Collect this in your form
      sheba_number: data.shaba || "",
    },
    basic_info_company: {
      brand_name: data.brandName || "",
      company_name: data.companyName || "",
      economic_id: data.economicCode || "",
      email: data.email || "",
      national_id: data.nationalId || "",
    },
    basic_info_individual: {
      email: data.email || "",
      first_name: data.name || "",
      last_name: data.lastName || "",
      mobile: data.phone || "",
      national_id: data.nationalId || "",
    },
    brand: data.brand || data.brandName || "",
    category: data.category || "",
    description: "", // TODO: Add a field in your form if needed
    documents: [
      data.establishmentNotice ? data.establishmentNotice.toString() : "",
      data.lastChangesNotice ? data.lastChangesNotice.toString() : "",
      data.shareholdersNotice ? data.shareholdersNotice.toString() : "",
      data.signatoriesNotice ? data.signatoriesNotice.toString() : "",
    ], // TODO: Map your file uploads here if needed

    installment: {
      installments: 1, // TODO: Add fields in your form if needed
      status: "ACTIVE_INSTALLMENT",
      subscription: 1,
    },
    logo: data.logo ? data.logo.toString() : "", // TODO: Upload the file and use the URL here if needed
    technical_info: {
      allowed_ips: data.ips || [],
      api_key: data.apiKey || "",
      callback_url: data.callback || "",
      email: data.email || "",
      url: data.website || "",
      web_service_url: data.webservice || "",
    },
    vendor_type: vendorType,
  };
}
