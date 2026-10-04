import Link from "next/link";

export const metadata = {
  title: "Anemia: Types, Symptoms, Diagnosis & Treatment",
  description:
    "Learn what anemia is, its main types and causes, symptoms like fatigue and pallor, how doctors diagnose it with CBC, ferritin and peripheral smear, and how it is treated.",
  keywords: [
    "anemia",
    "iron deficiency anemia",
    "hemoglobin",
    "fatigue",
    "pallor",
    "CBC",
    "ferritin",
    "anemia symptoms and treatment",
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

export default function AnemiaGuide() {
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
              Hematology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Anemia — Types, Symptoms, Diagnosis and Treatment
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
            One of the most common reasons patients are tired, breathless, or
            simply &quot;not themselves&quot; is anemia, and it is often missed
            because the symptoms creep in slowly. A single blood test can
            usually tell us what is going on.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is anemia?
          </h2>
          <p>
            Anemia means your blood carries too little{" "}
            <strong className="text-[#172420]">hemoglobin</strong>, the
            iron-rich protein inside red blood cells that delivers oxygen to
            your tissues. By World Health Organization thresholds, anemia is
            generally defined as hemoglobin below 13 g/dL in men, below 12 g/dL
            in non-pregnant women, and below 11 g/dL in pregnancy.
          </p>
          <p>
            It is a sign, not a diagnosis in itself. The real task is to find
            out why the hemoglobin is low.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Types and causes of anemia
          </h2>
          <p>
            The easiest way I classify anemia in clinic is by red cell size
            (MCV) on the blood count:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-[#172420]">
                Microcytic (small cells):
              </strong>{" "}
              iron deficiency anemia, thalassemia, and anemia of chronic
              disease.
            </li>
            <li>
              <strong className="text-[#172420]">
                Normocytic (normal size):
              </strong>{" "}
              acute blood loss, chronic kidney disease, hemolysis, and chronic
              inflammation.
            </li>
            <li>
              <strong className="text-[#172420]">
                Macrocytic (large cells):
              </strong>{" "}
              vitamin B12 or folate deficiency, liver disease, and heavy alcohol
              use.
            </li>
          </ul>
          <p>
            Worldwide,{" "}
            <strong className="text-[#172420]">iron deficiency anemia</strong>{" "}
            is the most common type. Typical causes include heavy menstrual
            bleeding, pregnancy, a diet low in iron, malabsorption (for example
            celiac disease), and slow gastrointestinal blood loss from ulcers,
            hookworm, or tumors. In men and postmenopausal women, iron
            deficiency should always make us look for a bleeding source.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Symptoms to look for
          </h2>
          <p>
            The most common complaint is persistent{" "}
            <strong className="text-[#172420]">fatigue</strong>, followed by{" "}
            <strong className="text-[#172420]">pallor</strong> of the skin, palm
            creases, and inner eyelids. Other features include shortness of
            breath on exertion, palpitations, dizziness, headaches, and cold
            hands and feet.
          </p>
          <p>
            Iron deficiency has some clues of its own: brittle nails, hair loss,
            sore tongue, cracks at the corners of the mouth, restless legs, and
            pica, a craving for ice, clay, or starch. Chest pain, fainting, or
            severe breathlessness needs urgent medical attention.
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
            How anemia is diagnosed
          </h2>
          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Complete blood count (CBC)
          </h3>
          <p>
            The <strong className="text-[#172420]">CBC</strong> confirms low
            hemoglobin and gives the MCV and RDW, which point toward the likely
            type. Platelet and white cell counts help exclude bone marrow
            problems.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Ferritin and iron studies
          </h3>
          <p>
            <strong className="text-[#172420]">Ferritin</strong> reflects iron
            stores and is the single best test for iron deficiency. A low value
            is diagnostic, but ferritin also rises with infection and
            inflammation, so a &quot;normal&quot; result can hide true
            deficiency. Transferrin saturation and TIBC help in these cases.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Peripheral smear
          </h3>
          <p>
            Looking at the blood under the microscope adds real detail. Iron
            deficiency shows small, pale (hypochromic) cells with pencil shapes.
            B12 or folate deficiency shows large oval cells and hypersegmented
            neutrophils. Target cells suggest thalassemia, and fragmented cells
            point toward hemolysis. A reticulocyte count tells us whether the
            marrow is responding appropriately.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment
          </h2>
          <p>
            Treatment always has two parts: replace what is missing and fix the
            cause.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-[#172420]">Iron deficiency:</strong> oral
              iron is first-line. Taking it once daily or on alternate days
              often improves absorption and reduces stomach upset. Hemoglobin
              usually begins to rise within a few weeks, and iron is generally
              continued for about three months after it normalizes to refill
              stores.
            </li>
            <li>
              <strong className="text-[#172420]">Intravenous iron:</strong> used
              when tablets are not tolerated, absorption is poor, blood loss is
              ongoing, or in chronic kidney disease.
            </li>
            <li>
              <strong className="text-[#172420]">
                B12 or folate deficiency:
              </strong>{" "}
              replacement by injection or tablets, depending on the cause.
            </li>
            <li>
              <strong className="text-[#172420]">
                Severe or symptomatic anemia:
              </strong>{" "}
              blood transfusion may be needed, along with treatment of the
              underlying condition.
            </li>
          </ul>
          <p>
            Dietary measures such as red meat, lentils, and leafy greens with
            vitamin C help, but diet alone rarely corrects established iron
            deficiency anemia.
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
                <a href="https://emedicine.medscape.com/">
                  Anemia (add exact article link)
                </a>
              </li>
              <li>
                American Academy of Family Physicians{" "}
                <a href="https://www.aafp.org/afp/topics/anemia">
                  Anemia: Clinical Collection
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Iron and other treatments should be
            started only after evaluation by a qualified healthcare
            professional.
          </div>
        </div>
      </div>
    </article>
  );
}
