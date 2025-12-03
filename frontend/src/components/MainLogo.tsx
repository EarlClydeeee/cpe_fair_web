'use client';

import { useRouter } from "next/navigation";
import MainLogo from "@/assets/images/logos/archons_logo.svg";

const MainLogoArchon = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Go to home"
      onClick={() => router.push("/")}
      className="transition-all duration-200 hover:drop-shadow-[0_0_4px_rgb(255,215,50)]"
    >
      <img
        src={MainLogo.src}
        alt="CPE Fair Logo"
        className="w-100 sm:w-40 md:w-60 lg:w-80 xl:w-100 max-w-full h-auto"
      />
    </button>
  );
};

export default MainLogoArchon;