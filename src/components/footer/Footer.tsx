import { ArrowUp } from "lucide-react";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#081423] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black tracking-wider">
              REVI
              <span className="text-orange-500">G</span>
              OO
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Ride Easy, We Care.
            </p>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              REVIGOO is a technology-enabled bike service
              marketplace connecting motorcycle owners with
              trusted garages through a transparent,
              convenient and reliable service experience.
            </p>

          </div>

          <FooterLinks />

          <FooterSocial />

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-slate-500">
            © 2026 REVIGOO. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 transition hover:scale-110"
          >
            <ArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}