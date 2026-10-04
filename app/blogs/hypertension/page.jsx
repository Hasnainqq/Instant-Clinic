import Link from "next/link";

export const metadata = {
  title: "Hypertension: Causes, Symptoms, Diagnosis & Treatment",
  description:
    "Learn what hypertension (high blood pressure) is, its causes and risk factors, symptoms, complications like stroke, how BP is diagnosed, and how lifestyle changes and antihypertensives help.",
  keywords: [
    "hypertension",
    "high blood pressure",
    "BP",
    "antihypertensives",
    "stroke",
    "cardiovascular risk",
    "hypertension treatment",
    "hypertension symptoms",
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

export default function Hypertension() {
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
              Cardiology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Hypertension — Causes, Symptoms, Diagnosis and Treatment
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
            Most patients I diagnose with hypertension are surprised. They feel
            fine, they have no complaints, and they only came in for a routine
            check or an unrelated problem. That is exactly why hypertension is
            often called the silent killer.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is hypertension?
          </h2>
          <p>
            Hypertension, or high blood pressure, means the force of blood
            against your artery walls stays persistently too high. BP is written
            as two numbers: systolic (when the heart contracts) over diastolic
            (when it relaxes). In most guidelines, a reading of{" "}
            <strong className="text-[#172420]">140/90 mmHg or higher</strong> on
            repeated measurements is hypertension. The American guidelines use a
            stricter cut-off of 130/80 mmHg.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Causes and risk factors
          </h2>
          <p>
            About 90–95% of cases are primary (essential) hypertension, with no
            single identifiable cause. The rest are secondary, meaning another
            condition is driving the pressure up. Common secondary causes
            include:
          </p>
          <ul className="list-disc pl-5">
            <li>Chronic kidney disease and renal artery stenosis</li>
            <li>Primary aldosteronism and other endocrine disorders</li>
            <li>Obstructive sleep apnea</li>
            <li>
              Drugs such as NSAIDs, oral contraceptives, decongestants, and
              steroids
            </li>
          </ul>
          <p>
            Risk factors for primary hypertension include older age, family
            history, obesity, a high-salt diet, excess alcohol, physical
            inactivity, smoking, diabetes, and chronic stress.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms and complications
          </h2>
          <p>
            Most people with high blood pressure have no symptoms at all. Some
            report headache, dizziness, or nosebleeds, but these usually appear
            only when BP is severely raised. A reading above 180/120 mmHg with
            chest pain, breathlessness, confusion, visual changes, or weakness
            is a hypertensive emergency and needs immediate hospital care.
          </p>
          <p>
            Over the years, uncontrolled hypertension damages blood vessels and
            organs. The main complications are{" "}
            <strong className="text-[#172420]">stroke</strong>, heart attack,
            heart failure, chronic kidney disease, retinal damage, aortic
            aneurysm, peripheral artery disease, and cognitive decline.
            Hypertension is one of the biggest contributors to overall
            cardiovascular risk.
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
            How is hypertension diagnosed and monitored?
          </h2>
          <p>
            One high reading is not enough. I confirm the diagnosis with
            repeated measurements on separate visits, taken seated after five
            minutes of rest with a correctly sized cuff. Out-of-office readings
            are even more reliable because they avoid white-coat effect:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Home BP monitoring: an average of 135/85 mmHg or higher suggests
              hypertension.
            </li>
            <li>
              24-hour ambulatory monitoring: an average of 130/80 mmHg or higher
              over the full day is considered abnormal.
            </li>
          </ul>
          <p>
            Once diagnosed, I usually order baseline tests: urine analysis,
            serum creatinine and electrolytes, blood glucose, lipid profile, and
            an ECG. These look for secondary causes and for damage that has
            already occurred.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Lifestyle and drug treatment
          </h2>
          <p>
            Lifestyle change is the foundation of treatment, whether or not
            tablets are needed. The most effective steps are:
          </p>
          <ul className="list-disc pl-5">
            <li>Cut sodium intake, ideally below 2,300 mg per day.</li>
            <li>
              Follow a DASH-style diet rich in vegetables, fruit, and low-fat
              dairy.
            </li>
            <li>Lose excess weight; even a few kilograms help.</li>
            <li>Exercise at least 150 minutes per week.</li>
            <li>Limit alcohol and stop smoking.</li>
          </ul>
          <p>
            When lifestyle measures are not enough, or BP is clearly in the
            stage 2 range, I start antihypertensives. First-line options are ACE
            inhibitors, angiotensin receptor blockers (ARBs), calcium channel
            blockers, and thiazide-type diuretics. Many patients need two drugs,
            often in a single-pill combination to improve adherence. The usual
            target is below 130/80 mmHg if tolerated. Treatment is usually
            lifelong, so regular follow-up and honest conversations about side
            effects matter.
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
                <a href="https://emedicine.medscape.com/article/241381-overview">
                  Hypertension
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/high-blood-pressure-hypertension">
                  High Blood Pressure (Hypertension)
                </a>
              </li>
              <li>
                American Heart Association / American College of Cardiology{" "}
                <a href="https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065">
                  2017 Guideline for High Blood Pressure in Adults
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Blood pressure targets and
            medications should be decided by a qualified healthcare professional
            based on the patient's clinical condition.
          </div>
        </div>
      </div>
    </article>
  );
}
