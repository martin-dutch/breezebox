import HeadingText from "components/heading-text"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "components/ui/accordion"
   
  export function FAQ() {
    return (
        <section className="container space-y-8 py-12 lg:py-20" id="features">
        <HeadingText className="text-center">
          {'FAQ'}
        </HeadingText>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What Are the Benefits of Renting an Air Conditioner?</AccordionTrigger>
          <AccordionContent>
          Renting an air conditioner can offer several benefits such as:

No significant upfront costs compared to purchasing a brand-new unit.
Maintenance and repairs are generally handled by the rental company, relieving you of the hassle and extra costs.
Flexibility to upgrade or downgrade your AC unit according to your changing needs.
Short-term solutions for cooling needs during peak seasons without the commitment of purchasing an AC.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What Is Included in the Monthly Rental Fee?</AccordionTrigger>
          <AccordionContent>
          The monthly rental fee typically includes the use of the air conditioner, along with services such as maintenance and repairs. However, it is essential to check with your service provider for the exact details, as some may offer additional services like free installation and periodic servicing to ensure the optimal functioning of the unit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What Happens If the Rented Air Conditioner Breaks Down?</AccordionTrigger>
          <AccordionContent>
          If the rented air conditioner breaks down, you should immediately contact your service provider to report the issue. Generally, the service provider will arrange for a technician to visit your premises to carry out repairs. Often, repairs and maintenance are included in the rental package at no extra charge, ensuring peace of mind throughout the rental period.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger> Can I Rent an Air Conditioner for a Short Period?</AccordionTrigger>
          <AccordionContent>
          Yes, many rental companies offer flexible rental periods to meet various needs. You can rent an air conditioner for short durations such as a day, a week, or a few months. It&apos;s advisable to consult with the rental company to understand the minimum rental period and to find a plan that suits your requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Is It Possible to Purchase the Air Conditioner at the End of the Rental Period?</AccordionTrigger>
          <AccordionContent>
          Some rental companies offer a rent-to-own option, where you can purchase the air conditioner at the end of the rental period at a reduced price. The terms and conditions for such purchases can vary between companies, so it is recommended to clarify this with your provider at the start of the rental period.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        </section>
        
    )
  }
  