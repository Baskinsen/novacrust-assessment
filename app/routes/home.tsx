import type { Route } from "./+types/home";
import { CryptoSwapForm } from "../components/CryptoSwapForm";
import CommingSoon from "~/coming-soon/comming-soon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { RecipientDetailsForm } from "~/components/RecipientDetailsForm";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <Tabs defaultValue="crypto-to-cash" className="w-full max-w-[500px] gap-5">
        <TabsList className="px-5 md:px-0 w-full">
          <TabsTrigger value="crypto-to-cash">Crypto to Cash</TabsTrigger>
          <TabsTrigger value="cash-to-crypto">Cash to Crypto</TabsTrigger>
          <TabsTrigger value="cash-to-fiat">Cash to Fiat</TabsTrigger>

        </TabsList>
        <TabsContent value="crypto-to-cash">
          <CryptoSwapForm />
        </TabsContent>
        <TabsContent value="cash-to-crypto">
          <CommingSoon title="Cash to Crypto" />
        </TabsContent>
        <TabsContent value="cash-to-fiat">
          <CommingSoon title="Cash to Fiat Loan" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
