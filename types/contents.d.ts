export type HeroHeader = {
    header: string
    subheader: string
    image: string
  }
  
  export type PriceComparison = {
    header: string
    subheader: string
    image: string
  }
  
  export type PriceComparionRow = {
    invoice: string
    paymentStatus: string
    totalAmount: string
    paymentMethod: string
  }

  export type Content = {
    text: string
    subtext: string
    image: string
  }
  
  export type ContentSection = {
    header: string
    subheader: string
    image?: string
    content: Array<Content>
  }