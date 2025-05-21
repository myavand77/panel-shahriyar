// Converts Persian and Arabic digits in a string to English digits
function persianToEnglishDigits(str: string): string {
  return str.replace(/[\u06F0-\u06F9]/g, d => String(d.charCodeAt(0) - 0x06F0))
            .replace(/[\u0660-\u0669]/g, d => String(d.charCodeAt(0) - 0x0660));
}

// Validates IPv4 addresses, converting Persian/Arabic digits to English first
export function isValidIP(ip: string): boolean {
  const englishIP = persianToEnglishDigits(ip);
  return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(englishIP);
} 