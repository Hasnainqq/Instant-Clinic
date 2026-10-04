import Link from "next/link";

export const metadata = {
  title: "Urinary Tract Infection (UTI): Symptoms, Diagnosis & Treatment",
  description:
    "A doctor's guide to urinary tract infection (UTI): who is at risk, symptoms like dysuria, how urine R/E and urine culture are used, antibiotic treatment, and how to prevent recurrence.",
  keywords: [
    "UTI",
    "urinary tract infection",
    "dysuria",
    "cystitis",
    "pyelonephritis",
    "urine culture",
    "UTI antibiotics",
    "recurrent UTI prevention",
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

export default function UrinaryTractInfection() {
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
              Urology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Urinary Tract Infection (UTI) — Diagnosis, Treatment and Prevention
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
            A burning sensation while passing urine is one of the most common
            complaints I hear in clinic, and more often than not it turns out to
            be a urinary tract infection. UTI is among the most common bacterial
            infections worldwide, and while most cases are easy to treat, they
            are also easy to mismanage.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is a UTI?
          </h2>
          <p>
            A UTI is an infection of any part of the urinary system: the
            urethra, bladder, ureters or kidneys. Infection of the bladder is
            called <strong className="text-[#172420]">cystitis</strong>, while
            infection that has traveled up to the kidney is{" "}
            <strong className="text-[#172420]">pyelonephritis</strong>.
            <em> Escherichia coli</em> from the gut is the culprit in the
            majority of uncomplicated cases, roughly 70–95%.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Who is at risk?
          </h2>
          <p>
            Women are affected far more often than men because the urethra is
            shorter. Up to half of all women will have at least one UTI in their
            lifetime. Other risk factors include:
          </p>
          <ul className="list-disc pl-5">
            <li>Pregnancy and menopause</li>
            <li>Diabetes and other causes of weak immunity</li>
            <li>Kidney stones or an enlarged prostate causing obstruction</li>
            <li>Urinary catheters</li>
            <li>Frequent sexual activity or use of spermicides</li>
            <li>Poor fluid intake or habitually holding urine</li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms
          </h2>
          <p>
            Lower UTI (cystitis) typically causes{" "}
            <strong className="text-[#172420]">dysuria</strong>, urinary
            frequency, urgency, lower abdominal discomfort, and cloudy or
            foul-smelling urine. Sometimes there is blood in the urine.
          </p>
          <p>
            Pyelonephritis is more serious. Fever with chills, flank pain,
            nausea and vomiting suggest the kidney is involved, and these
            patients need prompt medical attention. In young children and the
            elderly, a UTI may show up only as fever, irritability or confusion.
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
            How is a UTI diagnosed?
          </h2>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Urine R/E
          </h3>
          <p>
            A urine routine examination is the first step. Pus cells (usually
            more than 5 per high-power field), positive leukocyte esterase and
            positive nitrite support the diagnosis. Red cells and bacteria may
            also be seen. A clean-catch midstream sample reduces contamination.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Urine culture
          </h3>
          <p>
            A <strong className="text-[#172420]">urine culture</strong>{" "}
            identifies the organism and tells us which antibiotics it responds
            to. It is not always needed for a first, simple cystitis, but I
            request it in pregnancy, men, suspected pyelonephritis, recurrent
            infections, diabetic patients, and anyone who has not improved on
            initial treatment. Ideally, send the sample before starting
            antibiotics.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Antibiotic treatment
          </h2>
          <p>
            <strong className="text-[#172420]">Antibiotics</strong> are the
            mainstay of treatment, and the choice should depend on local
            resistance patterns, the severity of infection and culture results
            where available. For uncomplicated cystitis, short courses of
            nitrofurantoin or a single dose of fosfomycin are commonly
            recommended first-line options. Fluoroquinolones are best reserved
            for situations where other options are unsuitable, because of
            resistance and side effects.
          </p>
          <p>
            Pyelonephritis usually needs a longer course, and sometimes hospital
            admission with intravenous antibiotics if the patient is vomiting,
            dehydrated or systemically unwell. Please complete the full course
            even if symptoms settle early, and avoid taking leftover antibiotics
            for the next episode. Asymptomatic bacteriuria generally should not
            be treated, except in pregnancy or before certain urological
            procedures.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Preventing recurrence
          </h2>
          <p>
            Recurrent UTI is generally defined as three or more episodes in a
            year, or two in six months. These simple measures help:
          </p>
          <ul className="list-disc pl-5">
            <li>Drink adequate water through the day</li>
            <li>Do not delay urination, and empty the bladder fully</li>
            <li>Pass urine soon after intercourse</li>
            <li>Wipe front to back and avoid irritating feminine products</li>
            <li>Avoid spermicides</li>
            <li>Keep blood sugar well controlled if you are diabetic</li>
            <li>
              Ask about vaginal estrogen if you are postmenopausal; it can
              reduce recurrence
            </li>
          </ul>
          <p>
            Cranberry products may offer a modest benefit for some people, but
            they are not a substitute for treatment. If infections keep coming
            back, your doctor may consider an ultrasound to look for stones or
            obstruction, or low-dose preventive antibiotics.
          </p>

          <p>
            See a doctor urgently if you have fever, flank pain, vomiting, blood
            in the urine, or if you are pregnant or diabetic.
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
                <a href="https://emedicine.medscape.com/article/231574-overview">
                  Urinary Tract Infection (UTI)
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/urinary-tract-infection-adults">
                  Urinary Tract Infection (UTI)
                </a>
              </li>
              <li>
                MIMS{" "}
                <a href="https://www.mims.com/hongkong/disease/urinary-tract-infection-uncomplicated/disease-summary">
                  Urinary Tract Infection – Uncomplicated
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
            condition and urine culture results.
          </div>
        </div>
      </div>
    </article>
  );
}
