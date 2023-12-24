import Link from "next/link";
import HorizontalRow from "../form/HorizontalRow";

export const FooterInfo = () => (
  <div className="container mx-auto w-10/12 font-accent">
    <HorizontalRow />
    <div className="flex flex-col justify-between lg:flex-row">
      <div>
        <p className="text-heading5">
          Copyright <span className="text-accentColor">©</span> 2023
          Architecture Garage
        </p>
      </div>
      <div>
        <i>
          Powered by <b className="text-accentColor">Dr</b>Lysn
        </i>
      </div>
      <div>
        <Link href="/privacy-policy" className="text-heading5">
          Privacy Policy
        </Link>
        <span className="text-accentColor"> | </span>
        <Link href="/terms" className="text-heading5">
          Terms
        </Link>
      </div>
    </div>
  </div>
);
