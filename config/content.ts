import { ContentSection, HeroHeader, PriceComparionRow, PriceComparison } from "types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Revolutionize Your Cooling Experience with BreezeBox`,
  subheader: `Never Worry About Maintenance or Upgrades. Experience Next-Gen Air Conditioning with a Monthly Subscription. (£20/Month)`,
  image: `/aircon-light.png`,
}
 
export const priceComparisonText: PriceComparison = { 
    header: `Thinking about buying an airconditioner?`,
    subheader: `See how much a BreezeBox subscription can save you! Price comparison from leading UK retailers.`,
    image: `/hero-img.webp`,
  }

  export const priceComparisonRows: PriceComparionRow[] = [
    {
      invoice: "Initial Purchase/Rental ",
      paymentStatus: "550",
      totalAmount: "50",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "Month 1",
      paymentStatus: "550",
      totalAmount: "70",
      paymentMethod: "PayPal",
    },
    {
      invoice: "Month 2",
      paymentStatus: "550",
      totalAmount: "90",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "Month 3",
      paymentStatus: "550",
      totalAmount: "110",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "Month 6",
      paymentStatus: "550",
      totalAmount: "130",
      paymentMethod: "",
    },
    {
      invoice: "Month 12",
      paymentStatus: "550",
      totalAmount: "150",
      paymentMethod: "",
    }
  ]

export const featureCards: ContentSection = {
  header: `Built for city flats`,
  subheader: ``,
  content: [
    {
      text: `Easy`,
      subtext: `Quick & easy setup. Unbox it, plug it in, and connect it up!`,
      image: ``,
    },
    {
      text: `Portable`,
      subtext: `Completely portable. Move from bedroom to home office, as you need.`,
      image: ``,
    },
    {
      text: `Renters`,
      subtext: `Ideal for renters - no installation required.`,
      image: ``,
    },
    {
        text: `Sustainable`,
        subtext: `Eco-Friendly Technology that Lowers Your Carbon Footprint without Sacrificing Performance.`,
        image: ``,
      },
  ], 
}

export const features: ContentSection = {
  header: `How it works?`,
  subheader: ``,
  image: `/home-air-conditioner.png`,
  content: [
    {
      text: `Effortless Ordering`,
      subtext: `Order in 2 minutes`,
      image: `/seo.svg`,
    },
    {
      text: `Fast Shipping`,
      subtext: `Get your BreezeBox delivered to your door (Free Delivery)`,
      image: `/performant.svg`,
    },
    {
      text: `Flexible Rental`,
      subtext: `Keep the Air-Con as long as you like, we’ll collect it when you’re done`,
      image: `/customize.svg`,
    },
    {
        text: `You're in Control`,
        subtext: `Flexibility to renew, cancel, or buy outright`,
        image: `/customize.svg`,
      },
  ],
}