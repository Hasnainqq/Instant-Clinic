import Link from "next/link";

export const metadata = {
  title: "Online Doctor Consultation in Pakistan | Instant & Hassle-Free",
  description:
    "Skip the 3-day waiting period. Get an instant online doctor consultation in Pakistan. Pay via EasyPaisa and chat directly with a qualified doctor right away.",
  keywords: [
    "online doctor consultation in pakistan",
    "online doctor easypaisa",
    "instant doctor chat pakistan",
    "best online doctor in lahore",
    "telemedicine pakistan",
  ],
};

function PulseRule({ className = "" }) {
  return (
    <svg
      width="44"
      height="12"
      viewBox="0 0 44 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 6H12L16 1L21 11L26 3L29 6H44"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OnlineConsultationGuide() {
  return (
    <article className="bg-white px-4 py-16 font-body lg:px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blogs"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0E5C52] transition-transform hover:-translate-x-0.5"
        >
          ← Back to Health Tips &amp; Articles
        </Link>

        {/* Header */}
        <header className="mb-10 border-b border-[#C7D3C7] pb-8">
          <div className="mb-5 flex items-center gap-3 text-[#0E5C52]">
            <PulseRule />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">
              Telemedicine · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Instant Online Doctor Consultation in Pakistan
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-[#C7D3C7] bg-white px-5 py-4 text-sm text-[#4B564F]">
            <span>
              <span className="font-semibold text-[#172420]">
                Medical review:
              </span>{" "}
              Dr. Hasnain Sikander, MBBS
            </span>
            <span
              className="hidden h-4 w-px bg-[#C7D3C7] sm:block"
              aria-hidden="true"
            />
            <span>
              <span className="font-semibold text-[#172420]">
                Last updated:
              </span>{" "}
              August 2026
            </span>
          </div>
        </header>

        {/* Body */}
        <div className="space-y-6 text-[17px] leading-relaxed text-[#2E3A34]">
          <p>
            When you are feeling unwell, the last thing you want to do is
            navigate a tedious booking system or wait days for an available
            slot.
          </p>
          <p>
            Many patients complain about the lengthy procedures on standard
            healthcare aggregator apps like Marham or Oladoc, where appointments
            are often delayed by 2 to 3 days. Medical issues require prompt
            attention, which is why I created a{" "}
            <strong className="text-[#172420]">
              direct, instant telemedicine service
            </strong>
            .
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            How My Instant Consultation Works
          </h2>
          <p>
            I believe healthcare should be fast and accessible. My process
            eliminates the middleman entirely. Here is how you can get treated
            within minutes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-[#172420]">Step 1:</strong> Send the
              consultation fee securely via EasyPaisa to{" "}
              <strong className="text-[#172420]">03477907036</strong>.
            </li>
            <li>
              <strong className="text-[#172420]">Step 2:</strong> Open the chat
              on this website and drop a screenshot of your payment.
            </li>
            <li>
              <strong className="text-[#172420]">Step 3:</strong> Instantly
              start chatting directly with me about your medical history,
              symptoms, and concerns.
            </li>
          </ul>

          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            Need immediate medical advice? You can skip the wait and
            <Link
              href="/"
              className="ml-1 font-semibold text-[#0E5C52] underline transition-colors hover:text-[#0E5C52]/80"
            >
              start your consultation now
            </Link>
            .
          </div>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Why Choose a Direct Online Consultation?
          </h2>
          <p>
            Aggregator platforms are useful for finding local clinics, but they
            are highly inefficient for urgent digital consultations.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-[#172420]">Zero Waiting Periods:</strong>{" "}
              No booking slots, no scheduling conflicts. You chat directly with
              a doctor when you need it most.
            </li>
            <li>
              <strong className="text-[#172420]">
                Secure & Familiar Payments:
              </strong>{" "}
              Utilizing EasyPaisa ensures anyone in Pakistan can access care
              seamlessly without needing a credit card.
            </li>
            <li>
              <strong className="text-[#172420]">Complete Privacy:</strong> Your
              chat history and medical records are handled directly by the
              physician, ensuring strict doctor-patient confidentiality.
            </li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            What Conditions Can Be Treated Online?
          </h2>
          <p>
            Telemedicine is an excellent, evidence-based approach for diagnosing
            and managing a variety of non-emergency medical conditions,
            including:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Gastrointestinal problems (diarrhea, acid reflux, viral
              gastroenteritis)
            </li>
            <li>Upper respiratory tract infections, flu, and cough</li>
            <li>Skin rashes, allergies, and mild dermatological issues</li>
            <li>Reviewing lab test reports and offering second opinions</li>
            <li>Refilling prescriptions for chronic conditions</li>
          </ul>

       
          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong>{" "}
            Online consultations are designed for non-emergency medical
            conditions. If you are experiencing severe chest pain, shortness of
            breath, uncontrolled bleeding, or any life-threatening emergency,
            please visit the nearest hospital emergency room immediately.
          </div>
        </div>
      </div>
    </article>
  );
}
