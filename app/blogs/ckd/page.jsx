import Link from "next/link";

export const metadata = {
  title: "Chronic Kidney Disease (CKD): Causes, Stages, Diagnosis & Dialysis",
  description:
    "Understand chronic kidney disease (CKD): its causes, stages, symptoms, how it is diagnosed with eGFR and urine ACR, how to slow progression, and when dialysis is needed.",
  keywords: [
    "chronic kidney disease",
    "CKD",
    "GFR",
    "eGFR",
    "creatinine",
    "proteinuria",
    "dialysis",
    "kidney failure",
    "CKD stages",
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

export default function ChronicKidneyDisease() {
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
              Nephrology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Chronic Kidney Disease — Causes, Stages, Diagnosis and Dialysis
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
            Some of the most worrying reports I see are the ones where a
            patient&apos;s kidney function has quietly dropped over years
            without a single symptom. That is the nature of chronic kidney
            disease (CKD): it is silent until it is advanced.
          </p>
          <p>
            CKD is defined as abnormal kidney structure or function that lasts
            for{" "}
            <strong className="text-[#172420]">more than three months</strong>.
            In practice, this means a reduced glomerular filtration rate (GFR),
            evidence of kidney damage such as protein in the urine, or both.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What causes CKD?
          </h2>
          <p>
            Diabetes and high blood pressure are the two leading causes
            worldwide, and together they account for most cases I come across.
            Other causes include:
          </p>
          <ul className="list-disc pl-5">
            <li>Glomerulonephritis (inflammation of the kidney filters)</li>
            <li>Polycystic kidney disease and other inherited conditions</li>
            <li>Recurrent kidney stones or urinary tract obstruction</li>
            <li>Long-term use of NSAIDs such as ibuprofen or diclofenac</li>
            <li>Recurrent kidney infections and reflux</li>
          </ul>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Stages and symptoms
          </h2>
          <p>
            CKD is staged by GFR, from G1 to G5. Higher GFR means better
            function.
          </p>
          <ul className="list-disc pl-5">
            <li>G1: 90 or above (normal, but with kidney damage)</li>
            <li>G2: 60–89 (mildly reduced)</li>
            <li>G3a: 45–59 and G3b: 30–44 (moderately reduced)</li>
            <li>G4: 15–29 (severely reduced)</li>
            <li>G5: below 15 (kidney failure)</li>
          </ul>
          <p>
            Early stages usually cause no symptoms. As CKD advances, patients
            develop fatigue, swollen ankles and puffy eyes, foamy urine, nausea,
            poor appetite, itching, muscle cramps, and shortness of breath.
            Needing to pass urine more often at night is another common early
            clue.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            How is CKD diagnosed?
          </h2>
          <p>Two simple tests do most of the work.</p>
          <p>
            <strong className="text-[#172420]">eGFR.</strong> A blood test
            measures serum creatinine, a waste product from muscle metabolism.
            Because creatinine rises as the kidneys fail, it is used with age
            and sex in a formula to estimate GFR (eGFR). An eGFR below 60 for
            three months or longer meets the criteria for CKD.
          </p>
          <p>
            <strong className="text-[#172420]">
              Urine albumin-to-creatinine ratio (ACR).
            </strong>{" "}
            This detects proteinuria, an early marker of kidney damage that can
            appear even when eGFR is still normal. An ACR below 30 mg/g is
            normal, 30–300 mg/g is moderately increased, and above 300 mg/g is
            severely increased. Doctors combine the GFR stage and ACR category
            to estimate risk and decide how closely to monitor you.
          </p>
          <p>
            A kidney ultrasound is often added to check kidney size and look for
            obstruction, stones, or cysts.
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
            How to slow progression
          </h2>
          <p>
            CKD cannot usually be reversed, but its progression can often be
            slowed significantly. The key steps are:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong className="text-[#172420]">
                Control blood pressure.
              </strong>{" "}
              KDIGO guidance suggests a systolic target below 120 mmHg when
              tolerated, usually with an ACE inhibitor or ARB if there is
              proteinuria.
            </li>
            <li>
              <strong className="text-[#172420]">Control blood sugar.</strong>{" "}
              In diabetes, tight but safe glucose control protects the kidneys.
            </li>
            <li>
              <strong className="text-[#172420]">
                Kidney-protective drugs.
              </strong>{" "}
              SGLT2 inhibitors have been shown to slow CKD progression, even in
              some patients without diabetes. Finerenone may help in diabetic
              kidney disease.
            </li>
            <li>
              <strong className="text-[#172420]">Avoid nephrotoxins.</strong>{" "}
              Stay away from NSAIDs, and check with a doctor before using herbal
              remedies or contrast dye.
            </li>
            <li>
              <strong className="text-[#172420]">Lifestyle.</strong> Reduce
              salt, stop smoking, stay active, and maintain a healthy weight.
            </li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            When is dialysis needed?
          </h2>
          <p>
            Dialysis is considered when CKD progresses to kidney failure,
            usually an eGFR below 15 (stage G5). The decision depends more on
            symptoms than on a single number. Common triggers include:
          </p>
          <ul className="list-disc pl-5">
            <li>Fluid overload not responding to diuretics</li>
            <li>Dangerously high potassium</li>
            <li>Severe metabolic acidosis</li>
            <li>Persistent nausea, vomiting, or loss of appetite</li>
            <li>Uremic pericarditis or confusion caused by uremia</li>
          </ul>
          <p>
            Options include hemodialysis, peritoneal dialysis, and kidney
            transplantation, which generally offers the best long-term outcome
            for suitable patients. If your eGFR is falling toward 20–30, ask
            your doctor early about planning for dialysis access or transplant
            evaluation.
          </p>
          <p>
            The takeaway: if you have diabetes, hypertension, or a family
            history of kidney disease, get your creatinine and urine ACR checked
            at least once a year. Early detection is the best protection.
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
                <a href="https://emedicine.medscape.com/article/238798-overview">
                  Chronic Kidney Disease (CKD)
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/chronic-kidney-disease">
                  Chronic Kidney Disease
                </a>
              </li>
              <li>
                NIDDK{" "}
                <a href="https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd">
                  Chronic Kidney Disease
                </a>
              </li>
              <li>
                KDIGO 2024 Clinical Practice Guideline for the Evaluation and
                Management of CKD
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Diagnosis, medication changes, and
            decisions about dialysis should be made by a qualified healthcare
            professional based on the patient&apos;s clinical condition.
          </div>
        </div>
      </div>
    </article>
  );
}
