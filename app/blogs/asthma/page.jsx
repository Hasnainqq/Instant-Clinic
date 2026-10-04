import Link from "next/link";

export const metadata = {
  title: "Asthma: Symptoms, Triggers, Diagnosis and Treatment",
  description:
    "Understand asthma: what it is, common triggers, symptoms like wheeze, how it is diagnosed with spirometry and peak flow, and how inhalers and an action plan keep it under control.",
  keywords: [
    "asthma",
    "asthma symptoms",
    "wheeze",
    "inhaler",
    "bronchodilator",
    "peak flow",
    "allergic asthma",
    "asthma action plan",
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

export default function AsthmaGuide() {
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
            Asthma — Triggers, Diagnosis and Treatment
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
            A cough that keeps you awake at night, a tight chest after climbing
            stairs, a whistling sound when you breathe out — these are some of
            the most common reasons patients walk into my clinic. Very often,
            the answer is <strong className="text-[#172420]">asthma</strong>.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is asthma?
          </h2>
          <p>
            Asthma is a chronic inflammatory condition of the airways. The
            lining of the bronchial tubes becomes swollen and over-sensitive,
            the surrounding muscles tighten, and extra mucus is produced. The
            result is narrowed airways and difficulty moving air in and out of
            the lungs.
          </p>
          <p>
            The key feature is that this narrowing is{" "}
            <strong className="text-[#172420]">variable and reversible</strong>.
            You may feel completely well for weeks and then have a flare-up
            after a trigger. Asthma can start in childhood or appear for the
            first time in adulthood.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Common triggers
          </h2>
          <p>
            Triggers differ from person to person. In{" "}
            <strong className="text-[#172420]">allergic asthma</strong>, the
            immune system overreacts to harmless substances. The most common
            triggers I see include:
          </p>
          <ul className="list-disc pl-5">
            <li>Dust mites, pollen, mold, and pet dander</li>
            <li>Cigarette smoke, dust, fumes, and air pollution</li>
            <li>Viral respiratory infections such as colds and flu</li>
            <li>Cold air and exercise</li>
            <li>Strong smells, perfumes, and cleaning products</li>
            <li>
              Certain medicines, including aspirin and other NSAIDs, and beta
              blockers
            </li>
            <li>Stress, strong emotions, and uncontrolled acid reflux</li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms to look for
          </h2>
          <p>
            Typical symptoms include a high-pitched{" "}
            <strong className="text-[#172420]">wheeze</strong> (especially when
            breathing out), a persistent dry cough, chest tightness, and
            shortness of breath. Symptoms are often worse at night or in the
            early morning, and may flare with exercise or exposure to a trigger.
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
            How is asthma diagnosed?
          </h2>
          <p>
            Diagnosis starts with a careful history and examination: when the
            symptoms occur, what sets them off, and whether there is a family
            history of asthma, eczema, or allergies. Objective testing then
            confirms it.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Spirometry
          </h3>
          <p>
            Spirometry is the main test. You blow out as hard and as fast as
            possible into a device that measures how much air you exhale (FVC)
            and how much you exhale in the first second (FEV1). A low FEV1/FVC
            ratio suggests airflow obstruction. If the FEV1 improves
            significantly after a{" "}
            <strong className="text-[#172420]">bronchodilator</strong> — usually
            by 12% and 200 mL or more — that reversibility strongly supports
            asthma.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Peak flow monitoring
          </h3>
          <p>
            A <strong className="text-[#172420]">peak flow</strong> meter is a
            small handheld device that measures how fast you can blow air out.
            Readings taken morning and evening over a couple of weeks show
            whether your airflow varies from day to day, which is typical of
            asthma. It is also useful at home to track control once you are
            diagnosed.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment: inhalers
          </h2>
          <p>
            Asthma cannot be cured, but it can be controlled very well. Most
            treatment is delivered by an{" "}
            <strong className="text-[#172420]">inhaler</strong>, which sends the
            medicine directly to the airways. Using a spacer makes this easier
            and more effective, especially for children.
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong className="text-[#172420]">Reliever inhalers</strong> are
              fast-acting bronchodilators such as salbutamol. They relax the
              airway muscles within minutes and relieve wheeze and
              breathlessness.
            </li>
            <li>
              <strong className="text-[#172420]">Controller inhalers</strong>{" "}
              contain inhaled corticosteroids, which reduce airway inflammation
              and are taken regularly, even when you feel well.
            </li>
            <li>
              <strong className="text-[#172420]">Combination inhalers</strong>{" "}
              pair a steroid with a long-acting bronchodilator for moderate or
              persistent asthma.
            </li>
          </ul>
          <p>
            Current guidelines, including GINA, advise against relying on a
            reliever alone, because untreated inflammation raises the risk of
            severe attacks. If you need your reliever more than twice a week,
            your asthma is not well controlled and your treatment should be
            reviewed. Allergic asthma may also benefit from allergen avoidance
            and, in selected cases, additional therapies.
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
                <a href="https://emedicine.medscape.com/article/296301-overview">
                  Asthma
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/asthma">Asthma</a>
              </li>
              <li>
                Global Initiative for Asthma (GINA){" "}
                <a href="https://ginasthma.org/reports/">
                  Global Strategy for Asthma Management and Prevention
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Asthma medicines and action plans
            should be prescribed and tailored by a qualified healthcare
            professional. If you or someone else has severe breathing
            difficulty, seek emergency care immediately.
          </div>
        </div>
      </div>
    </article>
  );
}
