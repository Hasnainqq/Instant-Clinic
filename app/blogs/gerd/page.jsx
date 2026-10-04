import Link from "next/link";

export const metadata = {
  title: "GERD: Causes, Symptoms, Diagnosis and Treatment",
  description:
    "A doctor's guide to GERD (acid reflux): what causes heartburn, which alarm symptoms need an endoscopy, how PPIs work, and when surgery is considered.",
  keywords: [
    "GERD",
    "acid reflux",
    "heartburn",
    "PPI",
    "endoscopy",
    "Barrett's esophagus",
    "GERD treatment",
    "GERD symptoms",
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

export default function GerdGuide() {
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
            GERD — Causes, Symptoms, Diagnosis and Treatment
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
            Burning in the chest after a heavy meal is one of the most common
            complaints I hear in clinic. Most of the time it is harmless, but
            when it keeps coming back, it may be gastroesophageal reflux
            disease, or <strong className="text-[#172420]">GERD</strong>.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is GERD?
          </h2>
          <p>
            GERD is a chronic condition in which stomach contents flow back into
            the esophagus and cause symptoms or complications. Occasional acid
            reflux is normal. It becomes GERD when it happens often, usually
            heartburn at least twice a week, or when it damages the esophageal
            lining.
          </p>
          <p>
            The main problem is a weak or inappropriately relaxing lower
            esophageal sphincter (LES), the muscular valve between the esophagus
            and stomach.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Causes and triggers
          </h2>
          <p>
            Several factors make the LES less effective or increase pressure on
            the stomach:
          </p>
          <ul className="list-disc pl-5">
            <li>Hiatal hernia</li>
            <li>Obesity, especially abdominal fat</li>
            <li>Pregnancy</li>
            <li>Smoking and alcohol</li>
            <li>
              Large, fatty or spicy meals, coffee, chocolate and carbonated
              drinks
            </li>
            <li>Lying down soon after eating</li>
            <li>
              Medications such as NSAIDs, nitrates and calcium channel blockers
            </li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Symptoms and alarm features
          </h2>
          <p>
            The classic symptoms are heartburn and regurgitation of sour fluid.
            GERD can also appear as chest pain, chronic cough, hoarseness, a
            sensation of a lump in the throat, or dental erosion. Chest pain
            should never be assumed to be reflux until a cardiac cause has been
            considered.
          </p>
          <p>These are the red flags that change my approach:</p>
          <ul className="list-disc pl-5">
            <li>Difficulty or pain when swallowing</li>
            <li>Unintentional weight loss</li>
            <li>Vomiting blood, black stools or iron-deficiency anemia</li>
            <li>Persistent vomiting</li>
            <li>
              New symptoms in an older adult, or a family history of upper GI
              cancer
            </li>
          </ul>

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
            How is GERD diagnosed?
          </h2>
          <p>
            In a patient with typical symptoms and no alarm features, GERD is
            diagnosed clinically. A trial of a proton pump inhibitor (
            <strong className="text-[#172420]">PPI</strong>) for 4–8 weeks is
            both treatment and a diagnostic test.
          </p>
          <p>
            An upper GI <strong className="text-[#172420]">endoscopy</strong> is
            recommended for alarm features, symptoms that do not respond to
            PPIs, or long-standing reflux in higher-risk patients. It can show
            erosive esophagitis, strictures, and{" "}
            <strong className="text-[#172420]">Barrett&apos;s esophagus</strong>
            , where the normal lining is replaced by intestinal-type cells and
            the risk of esophageal adenocarcinoma rises. In unclear cases,
            ambulatory pH monitoring and esophageal manometry help confirm the
            diagnosis.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Lifestyle changes
          </h2>
          <p>
            These are the foundation of treatment, and I ask every patient to
            start here:
          </p>
          <ul className="list-disc pl-5">
            <li>Lose weight if overweight; this often helps the most</li>
            <li>Stop smoking and cut back on alcohol</li>
            <li>Avoid eating within 2–3 hours of bedtime</li>
            <li>Raise the head of the bed by about 6–8 inches</li>
            <li>Eat smaller meals and avoid your personal trigger foods</li>
          </ul>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Medical treatment
          </h2>
          <p>
            Antacids give quick relief for occasional symptoms. H2 blockers such
            as famotidine are useful for milder or night-time symptoms. PPIs
            such as omeprazole or pantoprazole are the most effective option and
            are best taken 30–60 minutes before the first meal of the day. I aim
            for the lowest dose that controls symptoms.
          </p>
          <p>
            Long-term PPI use has been linked to low magnesium, vitamin B12
            deficiency and a slightly higher infection risk, so it should be
            reviewed regularly. For patients with a clear indication, though,
            the benefits generally outweigh these risks. Newer acid blockers
            such as vonoprazan are also becoming available.
          </p>

          <h2 className="font-display pt-6 text-2xl font-semibold text-[#172420]">
            Surgical treatment
          </h2>
          <p>
            Surgery is considered for patients with confirmed GERD who have
            persistent symptoms despite optimal medical therapy, who cannot
            tolerate lifelong medication, or who have a large hiatal hernia.
            Laparoscopic Nissen fundoplication is the standard procedure. A
            magnetic sphincter augmentation device is an alternative, and in
            patients with obesity, gastric bypass can be a good option.
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
                <a href="https://emedicine.medscape.com/article/176595-overview">
                  Gastroesophageal Reflux Disease (GERD)
                </a>
              </li>
              <li>
                Healthline{" "}
                <a href="https://www.healthline.com/health/gerd">
                  Gastroesophageal Reflux Disease (GERD)
                </a>
              </li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl border border-[#C7D3C7] bg-white p-5 text-sm text-[#6B756F]">
            <strong className="text-[#172420]">Medical disclaimer:</strong> This
            article is for general educational purposes and does not replace an
            individual medical assessment. Acid-suppressing medications should
            be started, adjusted or stopped under the guidance of a qualified
            healthcare professional, and alarm symptoms should always be
            evaluated promptly.
          </div>
        </div>
      </div>
    </article>
  );
}
