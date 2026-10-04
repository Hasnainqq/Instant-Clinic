import Link from "next/link";

export const metadata = {
  title: "Tuberculosis (TB): Symptoms, Diagnosis and Treatment",
  description:
    "A practical guide to tuberculosis (TB): how Mycobacterium tuberculosis spreads, pulmonary and extrapulmonary symptoms, diagnosis with sputum, GeneXpert and chest X-ray, and the DOTS-based anti-TB drug regimen.",
  keywords: [
    "tuberculosis",
    "TB",
    "Mycobacterium tuberculosis",
    "GeneXpert",
    "DOTS",
    "anti-TB drugs",
    "tuberculosis symptoms",
    "tuberculosis treatment",
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

export default function Tuberculosis() {
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
              Infectious Disease · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Tuberculosis (TB) — Symptoms, Diagnosis and Treatment
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
            A persistent cough that just won&apos;t go away is one of the most
            common reasons patients walk into my clinic, and in Pakistan,
            tuberculosis is always on my list of possible causes.
          </p>
          <p>
            Tuberculosis (TB) is a bacterial infection caused by{" "}
            <strong className="text-[#172420]">
              Mycobacterium tuberculosis
            </strong>
            . It usually attacks the lungs, but it can affect almost any organ.
            The good news is that TB is curable when it is diagnosed early and
            treated properly.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            How does TB spread?
          </h2>
          <p>
            TB spreads through the air. When a person with active pulmonary TB
            coughs, sneezes, or speaks, they release tiny droplet nuclei
            containing the bacteria, and another person can inhale them. It is{" "}
            <strong className="text-[#172420]">not</strong> spread by shaking
            hands, sharing utensils, or touching surfaces.
          </p>
          <p>
            Not everyone who inhales the bacteria becomes sick. Many people
            develop latent TB, where the bacteria stay dormant, cause no
            symptoms, and are not contagious. Only active disease spreads to
            others. The risk of progressing from latent to active TB is higher
            in people with HIV, diabetes, malnutrition, or those on
            immunosuppressive drugs.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Symptoms of tuberculosis
          </h2>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Pulmonary TB
          </h3>
          <p>
            Pulmonary TB is the most common form. I suspect it when a patient
            has a cough lasting more than two to three weeks, along with:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Sputum production, sometimes streaked with blood (hemoptysis)
            </li>
            <li>Low-grade evening fever and night sweats</li>
            <li>Unintentional weight loss and loss of appetite</li>
            <li>Fatigue and chest pain</li>
          </ul>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Extrapulmonary TB
          </h3>
          <p>
            When the bacteria spread beyond the lungs, symptoms depend on the
            organ involved. Common sites include:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong className="text-[#172420]">Lymph nodes:</strong> painless
              neck swelling, the most common extrapulmonary form
            </li>
            <li>
              <strong className="text-[#172420]">Pleura:</strong> pleural
              effusion with chest pain and breathlessness
            </li>
            <li>
              <strong className="text-[#172420]">Spine and bones:</strong> back
              pain and deformity (Pott disease)
            </li>
            <li>
              <strong className="text-[#172420]">Brain:</strong> TB meningitis,
              with headache, vomiting, and altered consciousness
            </li>
            <li>
              <strong className="text-[#172420]">Abdomen and kidneys:</strong>{" "}
              abdominal pain, ascites, or sterile pyuria
            </li>
          </ul>

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
            How is TB diagnosed?
          </h2>
          <p>
            Diagnosis combines clinical suspicion with laboratory and imaging
            tests. The three I rely on most are:
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Sputum smear and culture
          </h3>
          <p>
            Sputum is stained for acid-fast bacilli (AFB) under the microscope.
            It is cheap and quick, but not very sensitive. Culture is more
            accurate and allows drug-susceptibility testing, though results take
            weeks.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            GeneXpert (Xpert MTB/RIF)
          </h3>
          <p>
            GeneXpert is a rapid molecular test that detects the DNA of{" "}
            <em>M. tuberculosis</em> and, at the same time, resistance to
            rifampicin. Results are ready in about two hours, and the World
            Health Organization recommends it as the initial diagnostic test for
            people with suspected TB.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Chest X-ray (CXR)
          </h3>
          <p>
            A chest X-ray typically shows upper-lobe infiltrates, cavitation, or
            hilar lymphadenopathy. CXR is a valuable screening tool, but it
            cannot confirm TB on its own, so I always pair it with a
            microbiological test.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment: the anti-TB drug regimen
          </h2>
          <p>
            Drug-sensitive TB is treated for six months with four first-line
            anti-TB drugs:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong className="text-[#172420]">
                Intensive phase (2 months):
              </strong>{" "}
              isoniazid, rifampicin, pyrazinamide, and ethambutol
            </li>
            <li>
              <strong className="text-[#172420]">
                Continuation phase (4 months):
              </strong>{" "}
              isoniazid and rifampicin
            </li>
          </ul>
          <p>
            Treatment is delivered under{" "}
            <strong className="text-[#172420]">DOTS</strong> (Directly Observed
            Treatment, Short-course), where a health worker or trained supporter
            watches the patient take each dose. This improves adherence and
            reduces the risk of drug resistance. Pyridoxine (vitamin B6) is
            usually added to prevent isoniazid-related neuropathy.
          </p>
          <p>
            Patients should be monitored for side effects, especially
            hepatotoxicity (jaundice, nausea, dark urine) and visual changes
            with ethambutol. Some forms, such as TB meningitis and bone TB, need
            longer courses. Drug-resistant TB requires a specialized regimen
            under expert supervision.
          </p>
          <p>
            The most important message I give every patient: even when you start
            feeling better after a few weeks, do not stop the medicines early.
            Incomplete treatment is the main driver of drug-resistant TB.
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
                <a href="https://emedicine.medscape.com/article/230802-overview">
                  Tuberculosis
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/tuberculosis">
                  Tuberculosis (TB)
                </a>
              </li>
              <li>
                World Health Organization{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/tuberculosis">
                  Tuberculosis Fact Sheet
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Anti-TB drugs must be prescribed and
            monitored by a qualified healthcare professional, and treatment
            should never be started or stopped without medical advice.
          </div>
        </div>
      </div>
    </article>
  );
}
