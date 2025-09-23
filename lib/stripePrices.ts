export const STRIPE_PRICE_MAP: Record<string, string> = {
  "spotlight": process.env.STRIPE_PRICE_SPOTLIGHT_ONE_TIME || "",
  "lite": process.env.STRIPE_PRICE_LITE_SUBSCRIPTION_MONTHLY_2400 || "",
  "immersion": process.env.STRIPE_PRICE_IMMERSION_BASE_ONE_TIME || "",
  "icon": process.env.STRIPE_PRICE_ICON_ONE_TIME || "",
};

export const STRIPE_ADDON_PRICES: Record<string, string> = {
  "immersion_participant": process.env.STRIPE_PRICE_IMMERSION_PARTICIPANT_ADDON_1000 || "",
  "spotlight_extra_images": process.env.STRIPE_PRICE_SPOTLIGHT_EXTRA_IMAGES || "",
};
