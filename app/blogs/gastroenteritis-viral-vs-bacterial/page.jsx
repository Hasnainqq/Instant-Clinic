import Link from "next/link";

export const metadata = {
  title: "Gastroenteritis: Viral vs Bacterial",
  description:
    "Learn the key differences between viral and bacterial gastroenteritis, including symptoms, stool findings, and when antibiotics are actually appropriate.",
  keywords: [
    "viral vs bacterial gastroenteritis",
    "viral gastroenteritis",
    "bacterial gastroenteritis",
    "viral vs bacterial diarrhea",
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

export default function GastroenteritisAntibiotics() {
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
              Gastroenterology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Gastroenteritis — Viral vs Bacterial
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
                Last reviewed:
              </span>{" "}
              August 2026
            </span>
          </div>
        </header>

        {/* Body */}
        <div className="space-y-6 text-[17px] leading-relaxed text-[#2E3A34]">
          <p>
            Many patients come to me with a complaint of diarrhea lasting a day
            or two, and I need to decide whether antibiotics are actually
            necessary.
          </p>
          <p>
            The short answer is{" "}
            <strong className="text-[#172420]">usually no</strong>. Most cases
            of acute gastroenteritis are caused by viruses and resolve with
            supportive treatment, typically oral rehydration therapy.
          </p>
          <p>
            To work out whether a patient needs antibiotics, I usually ask the
            following questions to help distinguish viral from bacterial
            diarrhea:
          </p>
          <ul className="list-disc pl-5">
            <li>
              How many episodes of diarrhea have you had in the last 24 hours?
            </li>
            <li>Is there any blood in the stool?</li>
            <li>Do you have a fever?</li>
            <li>Are you experiencing severe cramping abdominal pain?</li>
            <li>What did you eat before the symptoms started?</li>
            <li>Have you traveled to any remote areas recently?</li>
            <li>
              Do you have any vomiting, nausea, blurred vision, or mental fog?
            </li>
          </ul>
          <p>
            The Infectious Diseases Society of America (IDSA) recommends against
            empiric antimicrobial treatment for most people with acute watery
            diarrhea who have not recently traveled internationally. Supportive
            treatment, particularly oral rehydration, remains the mainstay of
            therapy.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            When should antibiotics be considered?
          </h2>
          <p>
            Antibiotics may be appropriate when there is strong suspicion of a
            bacterial infection, or when the patient belongs to a higher-risk
            group.
          </p>
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            If you are looking for a consultation service, you can
            <Link
              href="/"
              className="ml-1 font-semibold text-[#0E5C52] underline transition-colors hover:text-[#0E5C52]/80"
            >
              approach us
            </Link>
            .
          </div>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Viral Gastroenteritis
          </h2>
          <p>
            Typically presents with a short prodrome, mild fever, and vomiting,
            followed by non-bloody watery diarrhea. Vomiting is often prominent
            early on.
          </p>
          <p>
            In adults, the illness usually resolves within about 3 days. In
            children, it tends to run a slightly longer course, typically 3–8
            days, with frequent watery stools.
          </p>
          <p>
            Management is supportive: rehydrate orally (PO) or intravenously
            (IV) as needed, treat symptoms such as fever and pain, and watch for
            complications like shock, dehydration, or electrolyte imbalance.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Bacterial Gastroenteritis
          </h2>
          <p>
            Bacterial gastroenteritis is more likely to present with high fever,
            shaking chills, bloody bowel movements (dysentery), and crampy
            abdominal pain. It can also present with systemic toxicity, and
            dehydration remains the main complication to watch for.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Stool findings
          </h3>
          <p>
            Watery, non-bloody stools favor a viral cause. Mucus or overt blood
            in the stool almost always points to a bacterial or parasitic
            infection.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Fever characteristics and duration
          </h3>
          <p>
            Viral gastroenteritis typically causes a low-grade fever, while a
            high or persistent fever — sometimes refractory to antipyretics —
            suggests a bacterial or other invasive cause. Acute infectious
            diarrhea generally resolves within 14 days; symptoms lasting longer
            than that suggest a parasitic or non-infectious cause.
          </p>

          {/* References */}
          <div className="pt-6">
            <div className="mb-4 flex items-center gap-3 text-[#8A8F87]">
              <PulseRule />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                References
              </span>
            </div>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-[#4B564F] marker:text-[#C77D3B] marker:font-semibold">
              <li>
                Medscape{" "}
                <a href="https://emedicine.medscape.com/article/176515-overview">
                  Viral Gastroenteritis
                </a>
              </li>
              <li>
                Medscape{" "}
                <a href="https://emedicine.medscape.com/article/176400-overview">
                  Bacterial Gastroenteritis
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Antibiotics should be prescribed by a
            qualified healthcare professional based on the patient's clinical
            condition and suspected or confirmed cause.
          </div>
        </div>
      </div>
    </article>
  );
}
