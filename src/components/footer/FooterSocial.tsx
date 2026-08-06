import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function FooterSocial() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">
        Follow Us
      </h3>

      <div className="flex gap-4">

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl text-white transition hover:bg-orange-500"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl text-white transition hover:bg-orange-500"
        >
          <FaLinkedin />
        </a>

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl text-white transition hover:bg-orange-500"
        >
          <FaFacebook />
        </a>

        <a
          href="#"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl text-white transition hover:bg-orange-500"
        >
          <FaWhatsapp />
        </a>

      </div>
    </div>
  );
}