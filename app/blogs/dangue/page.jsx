import Link from "next/link";

export const metadata = {
  title: "Dengue Fever: Symptoms, Diagnosis (NS1, IgM) and Treatment",
  description:
    "Learn what dengue fever is, how the Aedes mosquito spreads it, key symptoms and warning signs, how NS1 and IgM tests work, supportive treatment, and prevention.",
  keywords: [
    "dengue",
    "dengue fever",
    "dengue symptoms",
    "dengue platelets",
    "Aedes mosquito",
    "dengue NS1 test",
    "dengue hemorrhagic fever",
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

export default function DengueFever() {
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
              Infectious Diseases · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Dengue Fever — Symptoms, Diagnosis and Treatment
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
              October 2026
            </span>
          </div>
        </header>

        {/* Body */}
        <div className="space-y-6 text-[17px] leading-relaxed text-[#2E3A34]">
          <p>
            Every monsoon season, I see the same story: a patient with a high
            fever, a pounding headache and body pain so intense it feels like
            the bones are breaking. Nine times out of ten, the first question is
            about platelets. Let me explain what dengue really is and what
            matters most.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is dengue?
          </h2>
          <p>
            Dengue is a viral infection caused by one of four related dengue
            virus serotypes (DENV-1 to DENV-4). Most infections are mild or even
            silent, but a minority progress to severe disease, formerly called
            dengue hemorrhagic fever. Recovering from one serotype gives
            lifelong protection against that type only, and a second infection
            with a different serotype carries a higher risk of severe illness.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            How does dengue spread?
          </h2>
          <p>
            Dengue spreads through the bite of an infected female{" "}
            <strong className="text-[#172420]">Aedes mosquito</strong>, mainly{" "}
            <em>Aedes aegypti</em>. These mosquitoes breed in clean, stagnant
            water, such as flower pots, water coolers, discarded tires and roof
            tanks, and they bite mostly during the day, especially early morning
            and late afternoon. It does not spread directly from person to
            person through casual contact. Symptoms usually begin 4 to 10 days
            after the bite.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Symptoms and warning signs
          </h2>
          <p>
            Classic dengue begins suddenly with high{" "}
            <strong className="text-[#172420]">fever</strong>, severe headache,
            pain behind the eyes, muscle and joint pain, nausea, vomiting and a
            skin rash. The fever lasts about 2 to 7 days.
          </p>
          <p>
            The most dangerous period is often{" "}
            <strong className="text-[#172420]">when the fever settles</strong>,
            around days 3 to 7. This is the critical phase, when plasma can leak
            from blood vessels. The WHO lists these warning signs:
          </p>
          <ul className="list-disc pl-5">
            <li>Severe abdominal pain or tenderness</li>
            <li>Persistent vomiting</li>
            <li>Bleeding from the gums or nose, or blood in vomit or stool</li>
            <li>Restlessness or unusual drowsiness</li>
            <li>
              Fluid accumulation, such as in the abdomen or around the lungs
            </li>
            <li>A rapid drop in platelets with a rising hematocrit</li>
          </ul>
          <p>
            Severe dengue, including dengue hemorrhagic fever and dengue shock
            syndrome, is a medical emergency and needs hospital care.
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
            How is dengue diagnosed?
          </h2>
          <p>The right test depends on how many days you have been sick.</p>
          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            NS1 antigen
          </h3>
          <p>
            <strong className="text-[#172420]">NS1</strong> is a viral protein
            detectable in blood from the first day of illness, and it is most
            useful in the first 5 days. A positive result confirms dengue, but a
            negative result later in the illness does not rule it out.
          </p>
          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            IgM and IgG antibodies
          </h3>
          <p>
            IgM antibodies usually become detectable after day 5, which makes
            them more reliable later in the illness. IgG appears later and can
            point to a previous infection. Cross-reactivity with other
            flaviviruses can occur, so results must be read in context. PCR is
            also available in some centers.
          </p>
          <p>
            Alongside these tests, a complete blood count tracks{" "}
            <strong className="text-[#172420]">platelets</strong>, white cells
            and hematocrit. These trends tell me more about how sick a patient
            is than a single number.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Supportive treatment
          </h2>
          <p>There is no specific antiviral for dengue. Care is supportive:</p>
          <ul className="list-disc pl-5">
            <li>
              Rest and plenty of oral fluids, such as ORS, water and soups.
            </li>
            <li>
              Paracetamol (acetaminophen) for fever and pain. Avoid aspirin and
              NSAIDs like ibuprofen, which raise bleeding risk.
            </li>
            <li>
              Daily monitoring of platelets and hematocrit during the critical
              phase.
            </li>
            <li>
              IV fluids and close observation in hospital if warning signs
              appear.
            </li>
          </ul>
          <p>
            A common misconception is that low platelets alone mean a
            transfusion. Platelet transfusion is generally reserved for
            significant bleeding, not for a low count by itself.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Prevention
          </h2>
          <p>
            Prevention means controlling the mosquito. Empty and scrub
            containers holding standing water weekly, cover water tanks, and use
            window screens, bed nets and repellents. Wear long sleeves during
            daytime hours. Dengue vaccines exist, but they are restricted to
            specific age groups and settings, so ask your doctor whether one
            applies to you.
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
                <a href="https://emedicine.medscape.com/article/215840-overview">
                  Dengue Fever
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/dengue-fever">
                  Dengue Fever
                </a>
              </li>
              <li>
                World Health Organization{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue">
                  Dengue and Severe Dengue
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. If you have a fever with any warning
            sign of dengue, seek care from a qualified healthcare professional
            promptly.
          </div>
        </div>
      </div>
    </article>
  );
}
