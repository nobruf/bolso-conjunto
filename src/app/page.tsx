import { Card } from "@/components/ui/card";
import CardBill from "@/components/ui/card-bill";
import FooterTotal from "@/components/ui/footer-total";
import Header from "@/components/ui/header";
import HeaderAlert from "@/components/ui/header-alert";
import MonthSelector from "@/components/ui/month-selector";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col justify-between ">
      <div className="w-full sticky top-0 bg-background">
        <Header />
        <MonthSelector />
        <HeaderAlert />
      </div>
      <div className="w-full overflow-auto h-auto">
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
      </div>
      <div className="w-full  sticky bottom-0">
        <FooterTotal />
      </div>
    </main>
  );
}

