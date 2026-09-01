import Navbar from "@/componnets/sites/treedis-studio/Navbar";
import LandingPage82 from "@/componnets/sites/treedis-studio/Home staging/page";
import Loaders from "@/componnets/sites/treedis-studio/loaders";
import Frame, { ArNavWorkflowDiagram } from "@/componnets/sites/treedis-studio/Home staging/page1";
import ArNavHowItWorksOne, {
  ArNavHowItWorksTwo,
} from "@/componnets/sites/treedis-studio/Home staging/page2";
import Demo from "@/componnets/sites/treedis-studio/Demo";
import OthersProduct from "@/componnets/sites/treedis-studio/OthersProduct";
import Faq from "@/componnets/sites/treedis-studio/Faq";
import Connected from "@/componnets/sites/treedis-studio/Connected";
import Footer2 from "@/componnets/sites/treedis-studio/Footer2";

export default function Page() {
  return  (
    <>
      <div className="tds-page w-full">
        {/* section 0 Menu*/}
        <Navbar />
        {/* section 0.05 hero, before loader */}
        <LandingPage82 />
        {/* section 0.1 loaders icons */}
        <Loaders />
         {/* section 1 Navigation */}
         {/* section 2 How it works*/}
         <Frame />
         <ArNavWorkflowDiagram />
         {/* section 3 advanced and interactive*/}
         <ArNavHowItWorksOne />
         <ArNavHowItWorksTwo />
         {/* section 4 Demo*/}
          <Demo />
          {/* section 5 other products*/}
          <OthersProduct />
          {/* section 6 FAQ*/}
          <Faq />
         {/* section 7 Connected + Footer */}
         <Connected />
         <Footer2 />
      </div>
    </>
  )
}
