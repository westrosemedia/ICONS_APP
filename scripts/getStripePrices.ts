/**
 * Helper script to get Stripe Price IDs from your pricing table
 * Run: npx tsx scripts/getStripePrices.ts
 */

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20",
});

async function getPricingTablePrices() {
  try {
    // Your pricing table ID from PPB page
    const pricingTableId = "prctbl_1SQB3eCcsY3WjV3QGmc6dPm2";
    
    // Get pricing table
    const pricingTable = await stripe.pricingTables.retrieve(pricingTableId);
    
    console.log("\n📊 Pricing Table Information:\n");
    console.log("Pricing Table ID:", pricingTable.id);
    console.log("\nPrices in this table:\n");
    
    pricingTable.features.forEach((feature: any, index: number) => {
      console.log(`${index + 1}. ${feature.name}`);
      if (feature.price) {
        console.log(`   Price ID: ${feature.price.id}`);
        console.log(`   Amount: $${(feature.price.unit_amount / 100).toFixed(2)} ${feature.price.currency.toUpperCase()}`);
        console.log(`   Type: ${feature.price.type}`);
      }
    });
    
    // Also check for any products
    console.log("\n💡 To use these in your course:");
    console.log("1. Copy the Price ID(s) you want to use");
    console.log("2. Add them to your course document in Firestore:");
    console.log("   stripePriceId: 'price_xxxxx'");
    console.log("\nOr use the pricing table directly on the course page!");
    
  } catch (error: any) {
    console.error("Error:", error.message);
    console.log("\n💡 Alternative: Check your Stripe Dashboard → Products");
    console.log("   Find your PPB product and copy the Price IDs");
  }
}

getPricingTablePrices();

