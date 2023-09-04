import { buttonVariants } from "components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "components/ui/table"
import { priceComparisonRows, priceComparisonText } from "config/content"
import { cn } from "lib/utils"
import Link from "next/link"
  

  
  export function PriceComparison() {
    return (
        <div className="flex ">
        <div className="flex flex-1 flex-col items-left gap-4 text-left lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">
            {priceComparisonText.header}
          </h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-3xl">
            {priceComparisonText.subheader}
          </h2>
        </div>
        <Link
          href="https://github.com/redpangilinan/next-shadcn-landing"
          target="_blank"
          className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
        >
          Get started
        </Link>
      </div>
      <div className="flex-1">
      <Table >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {priceComparisonRows.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
        </div>
      
    )
  }
  