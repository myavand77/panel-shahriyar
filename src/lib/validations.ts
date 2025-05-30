export const validations = {
  text: {
    validate: (value: string) => value.length > 0,
    message: "این فیلد الزامی است",
  },

  email: {
    validate: (value: string) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    },
    message: "لطفا یک ایمیل معتبر وارد کنید",
  },

  number: {
    validate: (value: string) => {
      const numberRegex = /^\d+$/;
      return numberRegex.test(value);
    },
    message: "لطفا فقط عدد وارد کنید",
  },

  mobile: {
    validate: (value: string) => {
      const mobileRegex = /^(0|0098|\+98)9(0[1-9]|[1-9]\d|2[0-2]|98)\d{7}$/;
      return mobileRegex.test(value);
    },
    message: "لطفا یک شماره موبایل معتبر وارد کنید",
  },

  postalCode: {
    validate: (value: string) => {
      const postalRegex = /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/;
      return postalRegex.test(value);
    },
    message: "لطفا یک کد پستی معتبر وارد کنید",
  },

  shaba: {
    validate: (value: string) => {
      const shabaRegex = /^[0-9]{24}$/;
      return shabaRegex.test(value);
    },
    message: "لطفا یک شماره شبا معتبر وارد کنید (24 رقم)",
  },

  url: {
    validate: (value: string) => {
      // URL pattern that includes localhost with ports and paths
      const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](\.[a-zA-Z]{2,})+|localhost)(:\d+)?(\/[^\s]*)?$/;
      
      if (!urlPattern.test(value)) {
        return false;
      }

      // Add http:// if no protocol is specified
      const urlWithProtocol = value.match(/^https?:\/\//) ? value : `http://${value}`;
      try {
        new URL(urlWithProtocol);
        return true;
      } catch {
        return false;
      }
    },
    message: "لطفا یک آدرس اینترنتی معتبر وارد کنید",
  },

  telegramId: {
    validate: (value: string) => {
      const telegramRegex = /^[a-zA-Z0-9_]{5,32}$/;
      return telegramRegex.test(value);
    },
    message: "لطفا یک شناسه تلگرام معتبر وارد کنید (بدون @)",
  },

  constantPhone: {
    validate: (value: string) => {
      const phoneRegex = /^0[0-9]{2,}(-[0-9]{7,})?$/;
      return phoneRegex.test(value);
    },
    message: "لطفا یک شماره تلفن ثابت معتبر وارد کنید",
  },

  nationalCode: {
    validate: (value: string) => {
      const allDigitEqual = [
        "0000000000",
        "1111111111",
        "2222222222",
        "3333333333",
        "4444444444",
        "5555555555",
        "6666666666",
        "7777777777",
        "8888888888",
        "9999999999",
      ];
      const codeMelliPattern = /^([0-9]{10})+$/;

      if (allDigitEqual.includes(value) || !codeMelliPattern.test(value)) {
        return false;
      }

      const chArray = Array.from(value);
      const num0 = parseInt(chArray[0]) * 10;
      const num2 = parseInt(chArray[1]) * 9;
      const num3 = parseInt(chArray[2]) * 8;
      const num4 = parseInt(chArray[3]) * 7;
      const num5 = parseInt(chArray[4]) * 6;
      const num6 = parseInt(chArray[5]) * 5;
      const num7 = parseInt(chArray[6]) * 4;
      const num8 = parseInt(chArray[7]) * 3;
      const num9 = parseInt(chArray[8]) * 2;
      const a = parseInt(chArray[9]);
      const b = num0 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9;
      const c = b % 11;

      return (c < 2 && a === c) || (c >= 2 && 11 - c === a);
    },
    message: "لطفا یک کد ملی معتبر وارد کنید",
  },
};

export type ValidationType = keyof typeof validations;

export function validateField(
  type: ValidationType,
  value: string
): { isValid: boolean; message: string } {
  const validation = validations[type];
  const isValid = validation.validate(value);
  return {
    isValid,
    message: isValid ? "" : validation.message,
  };
}
