import Link from "next/link";

export const FooterInfo = () => (
  <div className="container mx-auto w-10/12">
    <hr className="my-1 border-b-2" />
    <div className="flex flex-col justify-between lg:flex-row">
      <div>
        <p className="text-heading5">
          Copyright <span className="text-logoColor-brandAG">©</span> 2023
          Architecture Garage
        </p>
      </div>
      <div>
        <i>
          Powered by <b className="text-logoColor-brandAG">Dr</b>Lysn
        </i>
      </div>
      <div>
        <Link href="/privacy-policy" className="text-heading5">
          Privacy Policy
        </Link>
        <span className="text-logoColor-brandAG"> | </span>
        <Link href="/terms" className="text-heading5">
          Terms
        </Link>
      </div>
    </div>
  </div>
);
