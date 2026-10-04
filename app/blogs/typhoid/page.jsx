import Link from "next/link";

export const metadata = {
  title: "Typhoid Fever: Symptoms, Diagnosis, Treatment & Vaccine",
  description:
    "Understand typhoid (enteric fever): how Salmonella Typhi spreads, symptoms week by week, diagnosis with blood culture and the Widal test, antibiotic treatment, and typhoid vaccination.",
  keywords: [
    "typhoid fever",
    "enteric fever",
    "Salmonella Typhi",
    "Widal test",
    "blood culture",
    "typhoid antibiotics",
    "typhoid vaccine",
    "typhoid symptoms",
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

export default function TyphoidFever() {
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
              Infectious Disease · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Typhoid Fever — Symptoms, Diagnosis, Treatment and Vaccination
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
            A prolonged fever that keeps climbing day after day is one of the
            most common reasons patients walk into my clinic, and typhoid is
            always on my differential. It is still very much a problem in
            Pakistan and the wider South Asian region.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is typhoid fever?
          </h2>
          <p>
            Typhoid fever, also called{" "}
            <strong className="text-[#172420]">enteric fever</strong>, is a
            systemic infection caused by the bacterium{" "}
            <em>Salmonella enterica</em> serotype Typhi (
            <strong className="text-[#172420]">Salmonella Typhi</strong>).
            Humans are the only reservoir, which means every case traces back to
            another infected person.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            How does typhoid spread?
          </h2>
          <p>
            Transmission is faecal-oral. You get infected by swallowing food or
            water contaminated with the stool or urine of someone who is
            infected. Street food washed with unsafe water, ice made from
            untreated water, and poor handwashing are classic culprits.
          </p>
          <p>
            Some people recover but keep carrying the bacteria, usually in the
            gallbladder, and shed it for months or even years. These chronic
            carriers can infect others without ever feeling unwell, which is why
            food handlers matter so much in outbreaks.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Symptoms of typhoid week by week
          </h2>
          <p>
            After an incubation period of roughly one to two weeks, the illness
            tends to follow a recognizable pattern if left untreated.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-[#172420]">Week 1:</strong> A fever that
              rises in a stepwise fashion, headache, tiredness, body aches, dry
              cough, and either constipation or diarrhea. The pulse may be
              surprisingly slow for the degree of fever.
            </li>
            <li>
              <strong className="text-[#172420]">Week 2:</strong> A persistent
              high fever (often 39–40°C), abdominal pain and distension, an
              enlarged spleen, and sometimes faint pink "rose spots" on the
              trunk. Patients can become dull and confused, which is described
              as the typhoid state.
            </li>
            <li>
              <strong className="text-[#172420]">Week 3:</strong> Complications
              appear if treatment has been delayed, including intestinal
              bleeding, bowel perforation, and encephalopathy. This is the most
              dangerous phase.
            </li>
            <li>
              <strong className="text-[#172420]">Week 4:</strong> In those who
              survive without treatment, the fever slowly settles. Relapse can
              still occur in some patients even after apparent recovery.
            </li>
          </ul>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            How is typhoid diagnosed?
          </h2>
          <p>
            <strong className="text-[#172420]">Blood culture</strong> remains
            the standard test. It is most likely to turn positive in the first
            week, and sensitivity drops once antibiotics have been started. Bone
            marrow culture is more sensitive still, but it is rarely needed.
          </p>
          <p>
            The <strong className="text-[#172420]">Widal test</strong> is
            cheaper and widely used here, but it has real limits. It measures
            antibodies against the O and H antigens, and those antibodies may
            not rise until after the first week. Previous infection,
            vaccination, or other illnesses can cause false positives, so a
            single titer should never be read in isolation. Newer rapid antibody
            tests exist but have similar reliability issues. Stool culture can
            also help, particularly in suspected carriers.
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
            Treatment: antibiotics and supportive care
          </h2>
          <p>
            Typhoid needs{" "}
            <strong className="text-[#172420]">antibiotics</strong>, along with
            fluids, rest, and fever control. The choice of drug depends on local
            resistance patterns, which is where it gets tricky. Many strains are
            now resistant to fluoroquinolones, and extensively drug-resistant
            (XDR) typhoid, first reported in Sindh in 2016, does not respond to
            the older first-line agents or to third-generation cephalosporins.
          </p>
          <p>
            Azithromycin is commonly used for uncomplicated disease, while
            ceftriaxone is used for severe cases where the strain is
            susceptible. XDR infection is typically managed with azithromycin or
            a carbapenem. Please do not self-medicate: incomplete or unnecessary
            antibiotic courses are exactly what fuels resistance.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Prevention and typhoid vaccination
          </h2>
          <p>
            The typhoid conjugate vaccine (TCV) is now the preferred option. It
            works in young children, can be given as a single dose from around
            six months of age, and gives longer protection than the older
            polysaccharide vaccine. Pakistan has used it in public campaigns in
            response to XDR typhoid.
          </p>
          <p>
            Vaccination should go alongside everyday measures: drink boiled or
            treated water, wash hands with soap before eating and after using
            the toilet, eat food that is freshly cooked and served hot, and
            avoid raw street salads and ice of unknown origin.
          </p>
          <p>
            See a doctor early if you have a fever lasting more than three days,
            especially with abdominal pain or confusion.
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
                <a href="https://emedicine.medscape.com/article/231135-overview">
                  Typhoid Fever
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/typhoid-fever">
                  Typhoid Fever
                </a>
              </li>
              <li>
                World Health Organization{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/typhoid">
                  Typhoid Fact Sheet
                </a>
              </li>
              <li>
                CDC{" "}
                <a href="https://www.cdc.gov/typhoid-fever/">Typhoid Fever</a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Diagnosis, antibiotic selection, and
            vaccination should be guided by a qualified healthcare professional
            based on the patient's clinical condition and local resistance
            patterns.
          </div>
        </div>
      </div>
    </article>
  );
}
