/** Cadence by West Rose Media: sales page URLs and assets */

export const CADENCE_APP = {
  register: "https://app.westrosemedia.com/os/register",
  login: "https://app.westrosemedia.com/os/login",
  app: "https://app.westrosemedia.com/os",
} as const;

export const CADENCE_STRIPE = {
  entrepreneur: {
    monthly: "https://buy.stripe.com/6oU9AS8kU2iN7HBeVv87K16",
    annual: "https://buy.stripe.com/6oUeVc0Ss1eJbXRbJj87K17",
  },
  founder: {
    monthly: "https://buy.stripe.com/aFafZgat2cXrge7bJj87K18",
    annual: "https://buy.stripe.com/14A8wO9oYg9D4vp7t387K19",
  },
  promoter: {
    monthly: "https://buy.stripe.com/7sYdR844EbTnge7fZz87K1a",
    annual: "https://buy.stripe.com/bJeaEW8kU1eJd1V8x787K1b",
  },
} as const;

export const CADENCE_IMAGES = {
  /** Light/cream wordmark for dark overlays (hero). Swapped with logoDark if assets were mislabeled. */
  logoLight:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/2.png?alt=media&token=c3368936-78c0-4fb8-828f-7b9166db208c",
  /** Dark wordmark for light nav / light sections */
  logoDark:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/1.png?alt=media&token=da53f623-1c4b-4d55-8c0e-b3812d60886a",
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4185.jpg?alt=media&token=28bf6bd2-861b-459b-bc13-59381159cc0c",
  about: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR9774.jpg?alt=media&token=4b143443-d184-4db4-b310-4239e659cd1f",
} as const;
