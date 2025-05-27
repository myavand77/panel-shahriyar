import React, { createContext, useContext, ReactNode } from "react";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";

// Define the shape of your form data here (add all fields from all steps)
export type StepsFormData = {
  // Step 1
  phone?: string;
  // Step 2
  otp?: string;
  // Step 3 (personal)
  name?: string;
  lastName?: string;
  email?: string;
  brand?: string;
  nationalId?: string;
  phone2?: string;
  province?: string;
  city?: string;
  category?: string;
  address?: string;
  postalCode?: string;
  accountNumber?: string;
  shaba?: string;
  logo?: File | null;
  // Step 3 (company)
  companyName?: string;
  brandName?: string;
  economicCode?: string;
  // Step 4 (company documents)
  establishmentNotice?: File | null;
  lastChangesNotice?: File | null;
  shareholdersNotice?: File | null;
  signatoriesNotice?: File | null;
  // Step 4 (shared)
  website?: string;
  webservice?: string;
  apiKey?: string;
  callback?: string;
  ips?: string[];
  // Step 5
  repName?: string;
  repLastName?: string;
  repNationalId?: string;
  repPhone?: string;
  repLandline?: string;
  repEmail?: string;
  repWhatsapp?: string;
  repTelegram?: string;
  // Step 6, 7, ... add as needed
};

const StepsFormContext = createContext<UseFormReturn<StepsFormData> | null>(null);

export const StepsFormProvider = ({ children }: { children: ReactNode }) => {
  const methods = useForm<StepsFormData>({
    mode: "onChange",
    defaultValues: {},
  });
  return (
    <StepsFormContext.Provider value={methods}>
      <FormProvider {...methods}>{children}</FormProvider>
    </StepsFormContext.Provider>
  );
};

export const useStepsForm = () => {
  const ctx = useContext(StepsFormContext);
  if (!ctx) throw new Error("useStepsForm must be used within a StepsFormProvider");
  return ctx;
}; 