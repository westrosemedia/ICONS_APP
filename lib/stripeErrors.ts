export function getPublicStripeErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : "";

  if (message.includes("Expired API Key")) {
    return "Checkout is temporarily unavailable. Please try again shortly or contact support.";
  }

  if (message.includes("STRIPE_SECRET_KEY is not configured")) {
    return "Checkout is not configured yet. Please contact support.";
  }

  if (
    message.includes("No such price") ||
    message.includes("resource_missing")
  ) {
    return "This offer is not available right now. Please contact support.";
  }

  return "Unable to start checkout. Please try again or contact support.";
}
