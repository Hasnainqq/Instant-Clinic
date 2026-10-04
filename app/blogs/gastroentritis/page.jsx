import Link from "next/link";

export const metadata = {
  title: "Hepatitis B and C: Causes, Symptoms, Diagnosis and Treatment",
  description:
    "A practical guide to hepatitis B and hepatitis C: how they spread, symptoms, diagnosis with HBsAg, anti-HCV and PCR, antiviral treatment, and prevention.",
  keywords: [
    "hepatitis B",
    "hepatitis C",
    "hepatitis B and C symptoms",
    "HBsAg",
    "anti-HCV",
    "liver cirrhosis",
    "hepatitis antivirals",
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

export default function HepatitisBAndC() {
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
            Hepatitis B and C — What You Need to Know
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
            Some of the most worrying patients I see are the ones who feel
            completely well. They come in for a routine check-up or a
            pre-surgery screen, and the report shows a positive hepatitis
            result. Hepatitis B and hepatitis C often stay silent for years
            while quietly damaging the liver.
          </p>
          <p>
            The good news is that both infections are now far easier to manage
            than they used to be, and one of them can be cured.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What are hepatitis B and C?
          </h2>
          <p>
            Both are viral infections that cause inflammation of the{" "}
            <strong className="text-[#172420]">liver</strong>. Hepatitis B is
            caused by the hepatitis B virus (HBV), a DNA virus. Hepatitis C is
            caused by the hepatitis C virus (HCV), an RNA virus.
          </p>
          <p>
            Either can cause a short-lived acute illness or a long-term chronic
            infection. Chronic infection is the real problem, because over the
            years it can lead to{" "}
            <strong className="text-[#172420]">cirrhosis</strong>, liver
            failure, and hepatocellular carcinoma. The World Health Organization
            estimates that hundreds of millions of people live with chronic
            hepatitis B or C worldwide, and most do not know it.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            How do they spread?
          </h2>
          <p>
            Hepatitis B spreads through contact with infected blood and body
            fluids. The common routes are mother-to-child transmission at birth,
            unprotected sex, sharing needles, and exposure to contaminated
            medical or dental equipment. In many high-prevalence regions,
            transmission during birth or early childhood is the leading cause.
          </p>
          <p>
            Hepatitis C spreads mainly through blood. Sharing needles,
            unsterilized medical or dental instruments, unscreened blood
            transfusions, and unsafe injections are the main risks. Sexual and
            mother-to-child transmission can occur but are less common.
          </p>
          <p>
            Neither virus spreads through hugging, coughing, sneezing, or
            sharing food and utensils.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms
          </h2>
          <p>
            Most people have no symptoms at first, particularly with hepatitis
            C. When symptoms do appear, they include:
          </p>
          <ul className="list-disc pl-5">
            <li>Fatigue and general weakness</li>
            <li>Nausea, poor appetite, and vague upper abdominal discomfort</li>
            <li>Dark urine and pale stools</li>
            <li>Jaundice (yellowing of the skin and eyes)</li>
            <li>Joint pain</li>
          </ul>
          <p>
            In advanced disease, patients may develop abdominal swelling
            (ascites), leg edema, easy bruising, or confusion. These point to
            decompensated cirrhosis and need urgent attention.
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
            How are they diagnosed?
          </h2>
          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Hepatitis B
          </h3>
          <p>
            Diagnosis starts with serology.{" "}
            <strong className="text-[#172420]">HBsAg</strong> (hepatitis B
            surface antigen) is the key screening test, and a positive result
            means active infection. Anti-HBc and anti-HBs help determine whether
            the infection is acute, chronic, resolved, or whether the person is
            immune through vaccination. HBV DNA by PCR measures the viral load
            and guides the decision to start treatment.
          </p>

          <h3 className="font-display pt-2 text-xl font-semibold text-[#172420]">
            Hepatitis C
          </h3>
          <p>
            Screening is done with an{" "}
            <strong className="text-[#172420]">anti-HCV</strong> antibody test.
            Antibodies can stay positive after the virus has cleared, so a
            positive result must be confirmed with HCV RNA by PCR to prove
            current infection. Genotype testing is sometimes done, although
            modern pan-genotypic regimens have made it less critical.
          </p>
          <p>
            Liver function tests, ultrasound, and a fibrosis assessment (such as
            FibroScan or FIB-4 score) then show how much liver damage has
            already occurred.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment
          </h2>
          <p>
            <strong className="text-[#172420]">Hepatitis B:</strong> Acute
            infection usually needs only supportive care. For chronic disease,
            long-term oral{" "}
            <strong className="text-[#172420]">antivirals</strong> such as
            tenofovir or entecavir suppress the virus, slow liver damage, and
            lower the risk of cirrhosis and liver cancer. These drugs control
            hepatitis B rather than cure it, so treatment is often long-term.
            Pegylated interferon is an option for selected patients.
          </p>
          <p>
            <strong className="text-[#172420]">Hepatitis C:</strong> This is
            where treatment has changed most. Direct-acting antivirals (DAAs),
            for example sofosbuvir-based regimens, are taken for about 8 to 12
            weeks and cure more than 95% of patients. Success is confirmed by an
            undetectable HCV RNA 12 weeks after finishing treatment.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Prevention
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Get the hepatitis B vaccine. It is safe, effective, and given to
              newborns, children, and at-risk adults.
            </li>
            <li>
              Pregnant women should be screened for HBsAg so that newborns
              receive the vaccine and immunoglobulin promptly if needed.
            </li>
            <li>
              There is no vaccine for hepatitis C, so prevention depends on safe
              injections, sterilized equipment, and screened blood.
            </li>
            <li>Never share needles, razors, or toothbrushes.</li>
            <li>
              Use barrier protection during sex with new or unknown partners.
            </li>
            <li>
              Get screened if you have had surgery, dental work, or injections
              in settings with poor infection control.
            </li>
          </ul>
          <p>
            A simple blood test can change the course of your liver health. If
            you have never been tested, ask your doctor about screening.
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
                <a href="https://emedicine.medscape.com/article/177632-overview">
                  Hepatitis B
                </a>
              </li>
              <li>
                Medscape{" "}
                <a href="https://emedicine.medscape.com/article/177792-overview">
                  Hepatitis C
                </a>
              </li>
              <li>
                World Health Organization{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis-b">
                  Hepatitis B Fact Sheet
                </a>
              </li>
              <li>
                World Health Organization{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis-c">
                  Hepatitis C Fact Sheet
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Testing and antiviral treatment
            should be directed by a qualified healthcare professional based on
            the patient's clinical condition and laboratory results.
          </div>
        </div>
      </div>
    </article>
  );
}
