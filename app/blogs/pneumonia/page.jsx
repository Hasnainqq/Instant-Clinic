import Link from "next/link";

export const metadata = {
  title: "Pneumonia: Causes, Diagnosis, CURB-65 and Treatment",
  description:
    "A doctor's guide to pneumonia: causes, symptoms, chest X-ray and lab diagnosis, CURB-65 severity scoring, antibiotic treatment, and prevention of community-acquired pneumonia.",
  keywords: [
    "pneumonia",
    "community-acquired pneumonia",
    "pneumonia symptoms",
    "pneumonia chest X-ray",
    "CURB-65",
    "pneumonia antibiotics",
    "pneumonia treatment",
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

export default function Pneumonia() {
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
              Pulmonology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Pneumonia — Causes, Diagnosis and Treatment
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
            A patient walks in with a cough that has lasted several days, now
            with fever and a sharp pain on breathing in. One of the first things
            I think about is pneumonia.
          </p>
          <p>
            <strong className="text-[#172420]">Pneumonia</strong> is an
            infection of the lung tissue in which the air sacs (alveoli) fill
            with fluid or pus. It ranges from a mild illness treated at home to
            a life-threatening one needing intensive care. Most cases I see are{" "}
            <strong className="text-[#172420]">
              community-acquired pneumonia
            </strong>{" "}
            (CAP), meaning it developed outside a hospital.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What causes pneumonia?
          </h2>
          <p>
            Pneumonia can be caused by bacteria, viruses, or, less commonly,
            fungi. <em>Streptococcus pneumoniae</em> is the most common
            bacterial cause of CAP. Other bacteria include{" "}
            <em>Haemophilus influenzae</em> and the "atypical" organisms such as{" "}
            <em>Mycoplasma pneumoniae</em> and <em>Legionella</em>. Viruses,
            including influenza, RSV, and SARS-CoV-2, are also important causes,
            and a viral illness can pave the way for a secondary bacterial
            infection.
          </p>
          <p>
            Risk is higher in adults over 65, young children, smokers, and
            people with COPD, diabetes, heart disease, or weakened immunity.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Symptoms to watch for
          </h2>
          <ul className="list-disc pl-5">
            <li>Cough, with or without yellow, green, or rusty sputum</li>
            <li>Fever, chills, and sweating</li>
            <li>Shortness of breath or fast breathing</li>
            <li>Chest pain that worsens with breathing or coughing</li>
            <li>Fatigue and loss of appetite</li>
          </ul>
          <p>
            Older adults may not have a fever at all. Sometimes the only sign is
            new confusion, which is why I take it seriously in elderly patients.
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
            How is pneumonia diagnosed?
          </h2>
          <p>
            Diagnosis starts with the history and examination. I listen for
            crackles or bronchial breathing and check the respiratory rate and
            oxygen saturation.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Chest X-ray
          </h3>
          <p>
            A <strong className="text-[#172420]">chest X-ray</strong> is the
            standard test to confirm the diagnosis. It typically shows a
            consolidation, an area of lung that appears white, and also helps
            identify complications such as a pleural effusion.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Laboratory tests
          </h3>
          <p>
            A complete blood count, CRP, and kidney function tests are commonly
            ordered. In hospitalized patients, blood cultures and sputum
            cultures may be sent, along with urinary antigen tests for
            pneumococcus and Legionella when indicated. Many mild cases need no
            extensive testing.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Assessing severity with CURB-65
          </h2>
          <p>
            Deciding where to treat a patient is just as important as choosing
            the drug. The <strong className="text-[#172420]">CURB-65</strong>{" "}
            score gives one point for each of the following:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong className="text-[#172420]">C</strong>onfusion (new)
            </li>
            <li>
              <strong className="text-[#172420]">U</strong>rea above 7 mmol/L
              (BUN above 19 mg/dL)
            </li>
            <li>
              <strong className="text-[#172420]">R</strong>espiratory rate of 30
              or more per minute
            </li>
            <li>
              <strong className="text-[#172420]">B</strong>lood pressure low
              (systolic below 90 or diastolic 60 or less)
            </li>
            <li>
              Age <strong className="text-[#172420]">65</strong> or older
            </li>
          </ul>
          <p>
            A score of 0–1 generally suggests outpatient care, 2 suggests
            considering hospital admission, and 3 or more indicates severe
            pneumonia, with ICU assessment for scores of 4–5. The score supports
            clinical judgment but does not replace it.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment
          </h2>
          <p>
            Bacterial pneumonia is treated with{" "}
            <strong className="text-[#172420]">antibiotics</strong>. For
            otherwise healthy outpatients, the ATS/IDSA guideline suggests
            options such as amoxicillin or doxycycline. Patients with
            comorbidities, or those admitted to hospital, usually receive a
            combination such as a beta-lactam plus a macrolide, or a respiratory
            fluoroquinolone alone. Treatment typically lasts a minimum of 5
            days, and patients should be clinically stable before stopping.
          </p>
          <p>
            Supportive care matters too: fluids, rest, paracetamol for fever and
            pain, and oxygen when saturation is low. Most people feel better
            within a week, though fatigue and cough can linger for weeks.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Prevention
          </h2>
          <ul className="list-disc pl-5">
            <li>Pneumococcal vaccination for children and at-risk adults</li>
            <li>
              Yearly influenza vaccine, plus COVID-19 and RSV vaccines where
              recommended
            </li>
            <li>Regular handwashing</li>
            <li>Quitting smoking and limiting alcohol</li>
            <li>Good control of chronic conditions like diabetes and COPD</li>
          </ul>
          <p>
            Seek urgent care if you have trouble breathing, bluish lips,
            persistent high fever, chest pain, or confusion.
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
                <a href="https://emedicine.medscape.com/article/234240-overview">
                  Community-Acquired Pneumonia
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/pneumonia">
                  Pneumonia
                </a>
              </li>
              <li>
                ATS/IDSA{" "}
                <a href="https://www.atsjournals.org/doi/10.1164/rccm.201908-1581ST">
                  Diagnosis and Treatment of Adults with Community-acquired
                  Pneumonia (2019)
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
