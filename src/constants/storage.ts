export const STORAGE_PREFIX = "@vibe-crm-panel";

export const STORAGE_KEYS = {
  TOKEN: `${STORAGE_PREFIX}:token`,
  REFRESH_TOKEN: `${STORAGE_PREFIX}:refresh-token`,
  SELECTED_STORE_ID: `${STORAGE_PREFIX}:selected-store-id`,
  SELECTED_ADDRESS_ID: `${STORAGE_PREFIX}:selected-address-id`,
} as const;
