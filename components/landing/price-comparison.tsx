import { buttonVariants } from "components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
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
          href="/product/breezebox-monthly"
          target="_blank"
          className={`w-[10rem] ${cn(buttonVariants({ size: "lg" }))}`}
        >
          Get started
        </Link>
      </div>
      <div className="flex-1">
      <Table >
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead>Buying an airconditioner</TableHead>
            <TableHead>Renting an airconditioner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {priceComparisonRows.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
        </div>
      
    )
  }
  