import Link from "next/link";

export const metadata = {
  title: "Hepatitis B and C: Symptoms, Diagnosis, Treatment & Prevention",
  description:
    "Learn about hepatitis B and hepatitis C, including how they spread, symptoms, HBsAg and anti-HCV testing, PCR diagnosis, treatment, and prevention.",
  keywords: [
    "hepatitis B",
    "hepatitis C",
    "HBsAg",
    "anti-HCV",
    "hepatitis B symptoms",
    "hepatitis C symptoms",
    "hepatitis PCR",
    "cirrhosis",
    "antivirals",
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

export default function HepatitisBC() {
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
              Hepatology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Hepatitis B and C — Symptoms, Diagnosis, Treatment &amp; Prevention
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
            Hepatitis B and hepatitis C are viral infections that primarily
            affect the liver. Both can cause acute hepatitis, but they may also
            become chronic infections that gradually damage the liver and
            increase the risk of cirrhosis and liver cancer.
          </p>

          <p>
            One important problem is that many people have few or no symptoms,
            particularly during chronic infection. This means someone can have
            hepatitis for years without knowing it. Blood testing is therefore
            an important part of diagnosis.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Hepatitis B
          </h2>

          <p>
            Hepatitis B is caused by the hepatitis B virus (HBV). It spreads
            through infected blood and other body fluids, including semen. It
            can be transmitted through sexual contact, contaminated needles or
            sharp instruments, and from an infected mother to her baby during
            childbirth.
          </p>

          <p>
            Acute hepatitis B may cause fatigue, fever, nausea, vomiting, loss
            of appetite, abdominal discomfort, dark urine and jaundice. However,
            some people have no noticeable symptoms. Chronic hepatitis B can
            remain silent while inflammation and liver damage gradually develop.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Hepatitis C
          </h2>

          <p>
            Hepatitis C is caused by the hepatitis C virus (HCV) and is mainly
            spread through contact with infected blood. Common routes include
            sharing contaminated needles, unsafe medical or dental procedures,
            unsterile tattoo or piercing equipment, and sharing personal items
            such as razors that may contain blood.
          </p>

          <p>
            Hepatitis C often causes no symptoms. When symptoms occur, they can
            include fatigue, nausea, poor appetite, abdominal discomfort, dark
            urine and jaundice. Without treatment, chronic hepatitis C can
            eventually cause fibrosis, cirrhosis and liver cancer.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            How are Hepatitis B and C diagnosed?
          </h2>

          <p>
            Diagnosis usually starts with blood tests. For hepatitis B, the
            important serology includes hepatitis B surface antigen (HBsAg),
            anti-HBs and total anti-HBc. HBsAg indicates current HBV infection,
            while anti-HBs generally indicates immunity. The complete pattern of
            results helps distinguish current infection, previous infection and
            immunity from vaccination.
          </p>

          <p>
            For hepatitis C, screening usually begins with an anti-HCV antibody
            test. A reactive anti-HCV result means the person has been exposed
            to HCV at some point, but it does not by itself prove that the virus
            is currently present. HCV RNA testing by PCR or another nucleic-acid
            test is used to confirm active infection.
          </p>

          <p>
            Liver enzymes and other blood tests may help assess liver injury.
            Depending on the situation, doctors may also use ultrasound or other
            tests to evaluate fibrosis, cirrhosis or complications.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment
          </h2>

          <p>
            Acute hepatitis B is usually managed with supportive care rather
            than a specific antiviral. Chronic hepatitis B may require long-term
            antiviral treatment and regular monitoring. Medicines such as
            tenofovir and entecavir are among the antiviral options used in
            appropriate patients.
          </p>

          <p>
            Hepatitis C is different because modern treatment can cure the
            infection. Direct-acting antivirals (DAAs) are oral medicines that
            can cure more than 95% of people in many treatment settings,
            commonly with an 8–12 week course. The exact regimen depends on the
            patient's clinical circumstances and liver disease.
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
            Prevention
          </h2>

          <p>
            Hepatitis B can be prevented with vaccination. Safe injection
            practices, properly sterilized medical and dental equipment, safe
            sex, and screening of pregnant women are also important measures.
            People should avoid sharing needles, razors, toothbrushes or other
            items that may be contaminated with blood.
          </p>

          <p>
            There is currently no vaccine for hepatitis C. Prevention therefore
            depends mainly on avoiding exposure to infected blood, using sterile
            equipment for medical procedures, tattoos and piercings, and not
            sharing injection equipment or personal items that can contain
            blood. Testing and treatment also help reduce ongoing transmission.
          </p>

          <p>
            The key difference is that hepatitis B has an effective vaccine and
            can often be controlled with long-term antiviral therapy, while
            hepatitis C currently has no vaccine but can usually be cured with
            modern antiviral treatment.
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
                CDC —{" "}
                <a href="https://www.cdc.gov/hepatitis-b/hcp/clinical-overview/">
                  Clinical Overview of Hepatitis B
                </a>
              </li>

              <li>
                CDC —{" "}
                <a href="https://www.cdc.gov/hepatitis-c/hcp/clinical-overview/">
                  Clinical Overview of Hepatitis C
                </a>
              </li>

              <li>
                WHO —{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis-b">
                  Hepatitis B Fact Sheet
                </a>
              </li>

              <li>
                WHO —{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis-c">
                  Hepatitis C Fact Sheet
                </a>
              </li>

              <li>
                Healthline —{" "}
                <a href="https://www.healthline.com/health/hepatitis-a-vs-b-vs-c">
                  What’s the Difference Between Hepatitis A, B, and C?
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Hepatitis testing and treatment
            should be interpreted by a qualified healthcare professional based
            on the patient's clinical condition, laboratory results and liver
            status.
          </div>
        </div>
      </div>
    </article>
  );
}
