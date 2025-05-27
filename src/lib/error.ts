import { showToast } from "@/lib/toast";

export function handleApiError(error: unknown, defaultMessage: string) {
  let message = defaultMessage;
  if (typeof error === "string") {
    message += " " + error;
  } else if (typeof error === "object") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as any;
    message +=
      " " +
      (err?.data?.message ||
        err?.data?.responseMessage ||
        err?.statusText ||
        err?.status ||
        JSON.stringify(err));
  }
  showToast({ text: message, type: "error" });
}

// Helper function to validate Iranian phone numbers
export function isValidIranianPhoneNumber(phone: string): boolean {
  const regex = /^(0|0098|\+98)9(0[1-9]|[1-9]\d|2[0-2]|98)\d{7}$/;
  return regex.test(phone);
}
