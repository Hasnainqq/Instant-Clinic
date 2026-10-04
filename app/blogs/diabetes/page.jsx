import Link from "next/link";

export const metadata = {
  title: "Type 2 Diabetes: Symptoms, Diagnosis & Management",
  description:
    "Learn what type 2 diabetes is, its symptoms and risk factors, how it is diagnosed with FBS, HbA1c and OGTT, how it is managed, and which complications to prevent.",
  keywords: [
    "type 2 diabetes",
    "diabetes",
    "blood sugar",
    "HbA1c",
    "insulin resistance",
    "metformin",
    "type 2 diabetes symptoms",
    "type 2 diabetes diagnosis",
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

export default function Type2DiabetesMellitus() {
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
              Endocrinology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Type 2 Diabetes Mellitus — Symptoms, Diagnosis and Management
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
            Type 2 diabetes is one of the most common conditions I see in
            practice, and many patients only discover it by accident, during a
            routine blood test or when a wound refuses to heal.
          </p>
          <p>
            The good news is that it is{" "}
            <strong className="text-[#172420]">
              manageable, and often preventable
            </strong>
            . The earlier it is found, the better the outcome.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is type 2 diabetes?
          </h2>
          <p>
            Type 2 diabetes is a chronic condition in which the body cannot use
            insulin properly. This is called insulin resistance. At first, the
            pancreas compensates by producing more insulin. Over time it cannot
            keep up, and blood sugar rises above normal.
          </p>
          <p>
            It accounts for the large majority of all diabetes cases and usually
            develops in adults, although it is increasingly seen in younger
            people.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms and risk factors
          </h2>
          <p>
            Symptoms develop slowly and are easy to ignore. The common ones are:
          </p>
          <ul className="list-disc pl-5">
            <li>Increased thirst and frequent urination</li>
            <li>Constant hunger and unexplained weight loss</li>
            <li>Fatigue and blurred vision</li>
            <li>Slow-healing cuts and frequent infections</li>
            <li>Tingling or numbness in the hands and feet</li>
            <li>
              Dark, velvety skin patches around the neck or armpits (acanthosis
              nigricans)
            </li>
          </ul>
          <p>Risk factors that I look for in every patient include:</p>
          <ul className="list-disc pl-5">
            <li>Overweight or obesity, especially abdominal fat</li>
            <li>A parent or sibling with diabetes</li>
            <li>Physical inactivity</li>
            <li>Age above 45</li>
            <li>Prediabetes, hypertension, or high cholesterol</li>
            <li>Gestational diabetes or polycystic ovary syndrome (PCOS)</li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            How is it diagnosed?
          </h2>
          <p>
            Diagnosis is based on blood tests. Using the American Diabetes
            Association (ADA) criteria, diabetes is diagnosed when any of the
            following is present:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong className="text-[#172420]">
                Fasting blood sugar (FBS):
              </strong>{" "}
              126 mg/dL (7.0 mmol/L) or higher, after at least 8 hours of
              fasting
            </li>
            <li>
              <strong className="text-[#172420]">HbA1c:</strong> 6.5% or higher,
              reflecting average blood sugar over about 3 months
            </li>
            <li>
              <strong className="text-[#172420]">
                Oral glucose tolerance test (OGTT):
              </strong>{" "}
              2-hour value of 200 mg/dL (11.1 mmol/L) or higher after a 75 g
              glucose load
            </li>
            <li>
              A random blood sugar of 200 mg/dL or higher with classic symptoms
            </li>
          </ul>
          <p>
            Without clear symptoms, the result should be confirmed with a repeat
            test. Values between 100 and 125 mg/dL (fasting) or an HbA1c of
            5.7–6.4% indicate prediabetes, which is the best time to act.
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
            How is it managed?
          </h2>
          <p>
            Management starts with lifestyle. Losing even 5–10% of body weight,
            eating fewer refined carbohydrates and sugary drinks, and doing
            about 150 minutes of moderate exercise per week can improve blood
            sugar significantly.
          </p>
          <p>
            When medication is needed,{" "}
            <strong className="text-[#172420]">metformin</strong> remains the
            usual first-line drug. It lowers glucose production in the liver,
            improves insulin sensitivity, is inexpensive, and does not typically
            cause weight gain. Common side effects are stomach upset and
            diarrhea, which often settle with a gradual dose increase.
          </p>
          <p>
            If targets are not met, or if the patient has heart disease, heart
            failure, or kidney disease, we add other agents such as SGLT2
            inhibitors or GLP-1 receptor agonists. Insulin is used when needed.
            For most adults, the usual HbA1c target is below 7%, though I
            individualize it based on age and other illnesses.
          </p>
          <p>
            Regular monitoring matters too: HbA1c every 3–6 months, along with
            blood pressure and cholesterol control.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Complications to prevent
          </h2>
          <p>
            Persistently high blood sugar damages small and large blood vessels.
            The main complications are:
          </p>
          <ul className="list-disc pl-5">
            <li>Heart attack and stroke</li>
            <li>Diabetic retinopathy, which can lead to blindness</li>
            <li>Diabetic nephropathy and chronic kidney disease</li>
            <li>
              Peripheral neuropathy and foot ulcers, sometimes ending in
              amputation
            </li>
          </ul>
          <p>
            Prevention means good glycemic control, an annual eye examination,
            yearly urine albumin and kidney function tests, and daily foot
            checks. Stopping smoking is equally important.
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
                <a href="https://emedicine.medscape.com/article/117853-overview">
                  Type 2 Diabetes Mellitus
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/type-2-diabetes">
                  Type 2 Diabetes
                </a>
              </li>
              <li>
                American Diabetes Association{" "}
                <a href="https://diabetesjournals.org/care">
                  Standards of Care in Diabetes
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Diagnosis and treatment of diabetes,
            including medications such as metformin, should be decided by a
            qualified healthcare professional based on the patient's clinical
            condition.
          </div>
        </div>
      </div>
    </article>
  );
}
