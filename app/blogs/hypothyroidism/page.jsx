import Link from "next/link";

export const metadata = {
  title: "Hypothyroidism: Causes, Symptoms, TSH Testing & Levothyroxine",
  description:
    "A practical guide to hypothyroidism: what it is, common causes like Hashimoto's, symptoms, how TSH and free T4 are used for diagnosis, levothyroxine treatment, and follow-up.",
  keywords: [
    "hypothyroidism",
    "hypothyroidism symptoms",
    "TSH",
    "free T4",
    "levothyroxine",
    "thyroid",
    "Hashimoto's thyroiditis",
    "goiter",
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

export default function Hypothyroidism() {
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
            Hypothyroidism — Causes, Diagnosis and Treatment
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
            Tiredness, weight gain, feeling cold when everyone else is
            comfortable, dry skin — these are some of the most common complaints
            I hear in clinic, and they are easy to dismiss as &quot;just
            stress.&quot; Sometimes, though, the real culprit is an underactive
            thyroid.
          </p>
          <p>
            Hypothyroidism is common, easy to diagnose with a simple blood test,
            and very treatable. The key is thinking of it in the first place.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is hypothyroidism?
          </h2>
          <p>
            The thyroid is a small butterfly-shaped gland at the front of the
            neck. It makes thyroid hormones that set the pace of your
            metabolism, affecting heart rate, body temperature, digestion, mood,
            and energy. In hypothyroidism, the gland does not make enough of
            these hormones, and the body&apos;s processes slow down.
          </p>
          <p>It is more common in women and becomes more frequent with age.</p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            What causes it?
          </h2>
          <p>
            The most common cause in iodine-sufficient areas is{" "}
            <strong className="text-[#172420]">
              Hashimoto&apos;s thyroiditis
            </strong>
            , an autoimmune condition in which the immune system gradually
            damages the thyroid. Other causes include:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Thyroid surgery or radioactive iodine treatment (for example,
              after treating hyperthyroidism)
            </li>
            <li>Medications such as lithium and amiodarone</li>
            <li>
              Severe iodine deficiency, which remains an important cause
              worldwide and can lead to goiter (an enlarged thyroid)
            </li>
            <li>
              Pituitary or hypothalamic disease, known as central hypothyroidism
            </li>
            <li>Congenital thyroid problems in newborns</li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms to watch for
          </h2>
          <p>
            Symptoms usually develop slowly, which is why many people do not
            notice them for months or even years. Typical features include:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Fatigue and sluggishness</li>
            <li>Weight gain and constipation</li>
            <li>Cold intolerance</li>
            <li>Dry skin, brittle nails, and hair thinning</li>
            <li>Low mood or poor concentration</li>
            <li>Heavy or irregular periods</li>
            <li>Muscle aches, a hoarse voice, and a visible goiter</li>
          </ul>
          <p>
            None of these is specific on its own, so the diagnosis always needs
            laboratory confirmation.
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
            How is it diagnosed?
          </h2>
          <p>
            Diagnosis rests on two blood tests:{" "}
            <strong className="text-[#172420]">TSH</strong> (thyroid-stimulating
            hormone) and <strong className="text-[#172420]">free T4</strong>.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="text-[#172420]">
                Overt primary hypothyroidism:
              </strong>{" "}
              high TSH with a low free T4.
            </li>
            <li>
              <strong className="text-[#172420]">
                Subclinical hypothyroidism:
              </strong>{" "}
              high TSH with a normal free T4.
            </li>
            <li>
              <strong className="text-[#172420]">
                Central hypothyroidism:
              </strong>{" "}
              low or inappropriately normal TSH with a low free T4, which points
              toward the pituitary.
            </li>
          </ul>
          <p>
            If Hashimoto&apos;s is suspected, anti-thyroid peroxidase (anti-TPO)
            antibodies can support the diagnosis. An ultrasound is not needed
            routinely but may be used if there is a goiter or a nodule.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment with levothyroxine
          </h2>
          <p>
            The standard treatment is{" "}
            <strong className="text-[#172420]">levothyroxine</strong>, a
            synthetic form of T4 taken once daily. In young, otherwise healthy
            adults, a full replacement dose is often around 1.6 mcg/kg/day. In
            older patients or those with heart disease, we start lower and
            increase slowly.
          </p>
          <p>Some practical points that make a real difference:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Take it on an empty stomach, ideally 30–60 minutes before
              breakfast, with water.
            </li>
            <li>
              Keep it at least 4 hours apart from calcium and iron supplements,
              which reduce absorption.
            </li>
            <li>Take it at the same time every day.</li>
            <li>
              Tell your doctor right away if you become pregnant, as the dose
              often needs to be increased.
            </li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Follow-up
          </h2>
          <p>
            TSH is rechecked about 6–8 weeks after starting treatment or after
            any dose change, and the dose is adjusted until TSH sits in the
            target range. Once stable, testing every 6–12 months is usually
            enough.
          </p>
          <p>
            Too little levothyroxine leaves symptoms uncontrolled, while too
            much can cause palpitations, atrial fibrillation, and bone loss over
            time. Regular monitoring protects against both. For most people,
            treatment is lifelong, and with the right dose they live completely
            normal lives.
          </p>
          <p>
            Seek urgent care for severe lethargy, confusion, a very low body
            temperature, or slow breathing in someone with known hypothyroidism.
            These can signal myxedema coma, a medical emergency.
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
                <a href="https://emedicine.medscape.com/article/122393-overview">
                  Hypothyroidism
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/hypothyroidism">
                  Hypothyroidism
                </a>
              </li>
              <li>
                Almandoz JP, Gharib H. Hypothyroidism: etiology, diagnosis, and
                management. Med Clin North Am. 2012;96(2):203-21.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22443971/">PubMed</a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Levothyroxine dosing should be
            determined and monitored by a qualified healthcare professional
            based on the patient&apos;s clinical condition and thyroid function
            tests.
          </div>
        </div>
      </div>
    </article>
  );
}
