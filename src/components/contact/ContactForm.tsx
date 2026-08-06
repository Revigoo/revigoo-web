export default function ContactForm() {
  return (
    <form className="mt-16 rounded-3xl bg-white p-8 shadow-lg">

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="text"
          placeholder="Full Name"
          className="rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
        />

      </div>

      <input
        type="text"
        placeholder="Phone Number"
        className="mt-6 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
      />

      <textarea
        rows={6}
        placeholder="Tell us about your requirement..."
        className="mt-6 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-orange-500"
      />

      <button
        className="mt-8 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
      >
        Send Message
      </button>

    </form>
  );
}