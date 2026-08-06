import { quickLinks } from "./data";

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">
        Quick Links
      </h3>

      <ul className="space-y-3">
        {quickLinks.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              className="text-slate-400 transition hover:text-orange-500"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}