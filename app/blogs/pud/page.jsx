import Link from "next/link";

export const metadata = {
  title: "Peptic Ulcer Disease: Causes, Symptoms and Treatment",
  description:
    "Understand peptic ulcer disease: how H. pylori and NSAIDs cause ulcers, typical symptoms, how endoscopy confirms the diagnosis, eradication therapy with PPIs, and complications like GI bleeding.",
  keywords: [
    "peptic ulcer",
    "peptic ulcer disease",
    "H. pylori",
    "NSAIDs",
    "epigastric pain",
    "endoscopy",
    "GI bleeding",
    "H. pylori eradication therapy",
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

export default function PepticUlcerDisease() {
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
              Gastroenterology · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Peptic Ulcer Disease — Causes, Symptoms and Treatment
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
            One of the most common complaints I hear in clinic is a burning pain
            in the upper abdomen that has been going on for weeks. Often the
            patient has already been taking antacids on their own. In many of
            these cases, the real problem is a{" "}
            <strong className="text-[#172420]">peptic ulcer</strong>.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is peptic ulcer disease?
          </h2>
          <p>
            A peptic ulcer is an open sore in the lining of the stomach (gastric
            ulcer) or the first part of the small intestine (duodenal ulcer). It
            develops when the protective mucus layer weakens and stomach acid
            and pepsin damage the tissue underneath.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Main causes
          </h2>
          <p>Two causes account for the vast majority of ulcers:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-[#172420]">H. pylori infection.</strong>{" "}
              This spiral-shaped bacterium lives in the stomach lining and
              causes chronic inflammation. It is the leading cause of peptic
              ulcers worldwide and is especially common where it is acquired in
              childhood.
            </li>
            <li>
              <strong className="text-[#172420]">NSAIDs.</strong> Ibuprofen,
              diclofenac, naproxen and aspirin block prostaglandins, which the
              stomach needs to protect itself. Long-term or high-dose use, older
              age, and combining NSAIDs with steroids or blood thinners all
              raise the risk.
            </li>
          </ul>
          <p>
            Smoking, heavy alcohol use, and severe physiological stress can
            contribute, while rarer causes include Zollinger-Ellison syndrome.
            Spicy food and stress alone do not cause ulcers, though they can
            aggravate symptoms.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Symptoms
          </h2>
          <p>
            The classic symptom is gnawing or burning{" "}
            <strong className="text-[#172420]">epigastric pain</strong>. Pain
            from a duodenal ulcer often improves after eating but may wake the
            patient at night, whereas gastric ulcer pain tends to worsen with
            meals. Other symptoms include bloating, nausea, early satiety, and
            belching.
          </p>
          <p>
            Some patients, particularly those on NSAIDs, have no pain at all and
            first present with bleeding.
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
            Every patient with suspected ulcer disease should be tested for H.
            pylori. Options include the urea breath test, stool antigen test,
            and biopsy taken during endoscopy. Blood antibody tests only show
            past exposure and cannot confirm an active infection. Because PPIs
            can cause false-negative results, they should be stopped about two
            weeks before breath or stool testing.
          </p>
          <p>
            <strong className="text-[#172420]">Endoscopy</strong> allows direct
            visualization of the ulcer and biopsy. It is recommended for
            patients over about 55 and for anyone with alarm features: weight
            loss, difficulty swallowing, persistent vomiting, anemia, or black
            stools. Gastric ulcers are usually biopsied to exclude cancer.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Treatment
          </h2>
          <p>
            <strong className="text-[#172420]">Acid suppression.</strong> Proton
            pump inhibitors (PPIs) such as omeprazole or esomeprazole are the
            mainstay, usually given for 4 to 8 weeks to allow healing.
          </p>
          <p>
            <strong className="text-[#172420]">Eradication therapy.</strong> If
            H. pylori is present, it must be treated. Current American College
            of Gastroenterology guidance favors 14 days of bismuth quadruple
            therapy (a PPI, bismuth, tetracycline, and metronidazole) as
            first-line treatment, since clarithromycin-based triple therapy
            fails more often in areas with higher resistance. Eradication should
            be confirmed with a repeat test at least four weeks after finishing
            antibiotics.
          </p>
          <p>
            <strong className="text-[#172420]">NSAID-related ulcers.</strong>{" "}
            Stop the NSAID whenever possible. If it cannot be avoided, a PPI
            should be taken alongside it, and a COX-2 selective drug may be
            considered in high-risk patients.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Complications
          </h2>
          <p>Untreated ulcers can lead to serious problems:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-[#172420]">GI bleeding</strong>, the most
              common complication, presenting as vomiting blood or black, tarry
              stools
            </li>
            <li>
              Perforation, a surgical emergency causing sudden severe pain
            </li>
            <li>
              Gastric outlet obstruction from scarring, causing repeated
              vomiting
            </li>
          </ul>
          <p>
            Go to the emergency department immediately if you notice blood in
            vomit, black stools, fainting, or sudden severe abdominal pain.
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
                <a href="https://emedicine.medscape.com/article/181753-overview">
                  Peptic Ulcer Disease
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/peptic-ulcer">
                  Peptic Ulcer
                </a>
              </li>
              <li>
                Chey WD, et al. ACG Clinical Guideline: Treatment of
                Helicobacter pylori Infection. Am J Gastroenterol. 2024.
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Diagnosis and treatment of peptic
            ulcer disease, including antibiotics and acid-suppressing
            medication, should be directed by a qualified healthcare
            professional.
          </div>
        </div>
      </div>
    </article>
  );
}
