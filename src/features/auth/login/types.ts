// Types for OTP request
export type TOtpRequestPayload = {
  phone_number: string;
};

export type TOtpRequestResponse = {
  // Define expected response fields here, for now using generic any
  [key: string]: any;
};

export type TOtpVerifyPayload = {
  phone_number: string;
  otp_code: string;
};

export type TOtpVerifyResponse = {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
};
