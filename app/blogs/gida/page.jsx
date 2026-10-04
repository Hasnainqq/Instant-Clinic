import Link from "next/link";

export const metadata = {
  title: "Iron Deficiency in Pregnancy: Causes, Risks & Treatment",
  description:
    "Learn why iron deficiency is common in pregnancy, its symptoms and risks for mother and baby, how pregnancy anemia is diagnosed, and how iron supplementation helps.",
  keywords: [
    "iron deficiency in pregnancy",
    "pregnancy anemia",
    "antenatal care",
    "iron supplementation",
    "hemoglobin",
    "maternal health",
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

export default function IronDeficiencyInPregnancy() {
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
              Obstetrics · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Iron Deficiency in Pregnancy
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
            One of the most common things I see in antenatal clinics is a
            pregnant woman who is exhausted, pale, and told by everyone that
            this is just &ldquo;normal pregnancy tiredness.&rdquo; Sometimes it
            is. But very often, the real cause is{" "}
            <strong className="text-[#172420]">iron deficiency</strong>.
          </p>
          <p>
            Iron deficiency is the leading cause of pregnancy anemia worldwide,
            and it matters for both maternal health and the baby&rsquo;s
            development. The good news is that it is easy to detect and treat.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Why is iron deficiency so common in pregnancy?
          </h2>
          <p>
            Pregnancy places a heavy demand on iron stores. Blood volume
            increases by roughly 40–50%, and the body needs extra iron to make
            the additional red blood cells. The growing fetus and placenta also
            draw iron from the mother, especially in the third trimester.
          </p>
          <p>
            Many women begin pregnancy with low reserves already, due to heavy
            periods, closely spaced pregnancies, vegetarian diets, or limited
            access to iron-rich foods. Nausea and food aversions in early
            pregnancy can make things worse.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms to watch for
          </h2>
          <p>
            Mild iron deficiency often causes no clear symptoms. As it worsens,
            women may notice:
          </p>
          <ul className="list-disc pl-5">
            <li>Persistent fatigue and weakness</li>
            <li>Pale skin, lips, or inner eyelids</li>
            <li>Dizziness or shortness of breath on mild exertion</li>
            <li>Palpitations or a racing heartbeat</li>
            <li>Headaches, brittle nails, or hair loss</li>
            <li>Restless legs, or cravings for ice, clay, or starch (pica)</li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Risks to mother and baby
          </h2>
          <p>
            Untreated, moderate to severe anemia is linked with preterm
            delivery, low birth weight, and a higher chance of needing a blood
            transfusion. Anemic mothers are less able to tolerate blood loss at
            delivery, which raises the risk of complications from postpartum
            hemorrhage. Postpartum fatigue and low mood can also be more
            pronounced.
          </p>
          <p>
            For the baby, low iron stores at birth have been associated with
            poorer iron status in infancy and possible effects on
            neurodevelopment. This is why correcting iron levels during
            pregnancy is so important.
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
            How it is screened and diagnosed
          </h2>
          <p>
            Screening is a routine part of antenatal care. A complete blood
            count is usually done at the first visit and repeated around 24–28
            weeks. Anemia in pregnancy is generally defined as a{" "}
            <strong className="text-[#172420]">hemoglobin</strong> below 11 g/dL
            in the first and third trimesters, and below 10.5 g/dL in the second
            trimester.
          </p>
          <p>
            If hemoglobin is low, serum ferritin is the most useful test to
            confirm iron deficiency. A low ferritin, along with small, pale red
            cells (low MCV), supports the diagnosis. Other causes, such as
            thalassemia trait, vitamin B12 or folate deficiency, and chronic
            disease, should be considered if the picture does not fit or
            treatment fails.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment
          </h2>
          <p>
            Oral{" "}
            <strong className="text-[#172420]">iron supplementation</strong> is
            the first-line treatment. Ferrous sulfate, fumarate, or gluconate
            are commonly used, and many clinicians now prefer a single daily
            dose or even alternate-day dosing, which can improve absorption and
            cut down on nausea and constipation. Taking iron with vitamin C-rich
            foods or juice helps absorption, while tea, coffee, and calcium
            supplements taken at the same time reduce it.
          </p>
          <p>
            Hemoglobin should be rechecked after two to four weeks. If it is not
            rising, if the woman cannot tolerate tablets, or if anemia is severe
            or found late in pregnancy, intravenous iron is a safe and effective
            option in the second and third trimesters. Blood transfusion is
            reserved for severe, symptomatic cases or near delivery.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Prevention
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Start a prenatal vitamin containing iron early; the CDC recommends
              about 30 mg of iron daily for pregnant women.
            </li>
            <li>
              Eat iron-rich foods: red meat, poultry, fish, lentils, beans,
              spinach, and fortified cereals.
            </li>
            <li>
              Pair plant-based iron sources with vitamin C to improve
              absorption.
            </li>
            <li>
              Attend every scheduled antenatal visit so low levels are caught
              early.
            </li>
          </ul>
          <p>
            If you are pregnant, or planning to be, ask your doctor to check
            your hemoglobin and ferritin. Treating iron deficiency early is one
            of the simplest ways to protect your health and your baby&rsquo;s.
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
                <a href="https://emedicine.medscape.com/article/259838-overview">
                  Anemia in Pregnancy
                </a>
              </li>
              <li>
                American College of Obstetricians and Gynecologists (ACOG),
                Practice Bulletin No. 233: Anemia in Pregnancy
              </li>
              <li>Healthline, Iron Deficiency Anemia During Pregnancy</li>
              <li>
                Centers for Disease Control and Prevention (CDC),
                Recommendations to Prevent and Control Iron Deficiency
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Iron supplements and other treatments
            should be prescribed and monitored by a qualified healthcare
            professional.
          </div>
        </div>
      </div>
    </article>
  );
}
