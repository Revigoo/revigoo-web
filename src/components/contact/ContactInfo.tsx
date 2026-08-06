import { contactInfo } from "./contactData";

export default function ContactInfo() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {contactInfo.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-500">
              <Icon />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}