import Link from "next/link";

export const metadata = {
  title: "Fever: Is it really a bad thing",
  description: "Should you fight fever every time you catch it. ",
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

export default function Fever() {
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
              Fever · Patient Guide
            </span>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-[#172420] sm:text-4xl">
            Fever: Is it really a bad thing?
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
              August 2026
            </span>
          </div>
        </header>

        {/* Body */}
        <div className="space-y-6 text-[17px] leading-relaxed text-[#2E3A34]">
          <p>
            Fever, every one fears when you have it. But is it really a bad
            thing? Fever is a natural response of the body to fight off
            infections. It is a sign that your immune system is working to
            combat the invading pathogens. In fact, fever can be beneficial in
            many cases as it helps to create an environment that is less
            favorable for the growth of bacteria and viruses.
          </p>
          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What is Fever?
          </h2>
          <p>
            According to Mayo Clinic, it is the feeling of higher temperature
            than normal (98.6°F) to about 100.4°F (38°C).
          </p>
          <p>
            {" "}
            Actually, fever acts as a defensive climate change, essentially
            pushing foreign invaders beyond their ideal temperature range and
            making their environment quite horrible to survive in
          </p>
          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            Why does fever occur?
          </h2>
          <p>
            Actually when an infectious source like bacteria/viruses/fungi
            attacks the body, to help combat the pathogens, the body raises its
            temperature as raised temperature makes bacteria difficult to
            survive. The things which raise the body temperatures are called
            pyrogens. They increase the body temperature by setting the normal
            default temperature of the body to a new raised level. They works by
            changing the setting in the hypothalamus, a part of mid-brain. The
            posterior nucleus in the thalamus then works to make the body to its
            new raised temperature.
          </p>
          <p>
            To get to this new high level temprature set point, you get
            shivering, which produces heats. Your body contracts skin blood
            vessels to reduce heat loss. all this is to raise body temprature.
          </p>

          <p>
            Fever or high temperature is one of the four signs of inflammation,
            the other one being redness, swelling, and pain
          </p>
          <p>
            So how does it effect pathogens and you? Heat can cause their organs
            to break and membranes to rupture, damage their DNA and diminish
            protein production. It also effects your body and immune system work
            now better at this high temprature. They release enzyme which now
            activate faster.
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

          <p>
            The viruses that infected millions of cells are doing even worse
            because they are also very sensitive to the heat. For example, the
            rhinovirus that causes the common cold can only infect your
            respiratory tract because it is significantly colder than the rest
            of your body, even without fever.
          </p>
          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            What happens when you take anti-fever like paracetamol or ibuprofen?
          </h2>
          <p>
            They block the synthesis of prostaglandins by interfering with their
            pathways known as cycloxygenase pathway (COX). By inhibiting these
            prostaglandins, specifically PGE2 and IL-1, they reduce body
            temperature.{" "}
          </p>
          <p>
            {" "}
            So basically by reducing the temperature of the body , we are
            creating trouble for the immune system.Although fever is really
            unpleasant feeling and you want to get relieved but so are the
            pathogens. In general it is fair to say that for temperatures below
            40°C or 104 °F, fever is not dangerous and doesn’t need to be
            treated. Several research studies have shown stopping fever actually
            benefit patients in their mortality. Overall we have strong
            indications that more people may survive serious infectious diseases
            with a fever.
          </p>
          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            So should you not stop fever at all?
          </h2>
          <p>
            {" "}
            No, because a very high fever can also be detrimental for body as it
            can leads to severe dehydration and neurological complications.
          </p>

          <h2 className="font-display pt-4 text-2xl font-semibold text-[#172420]">
            When to seek medical attention for fever?
          </h2>
          <p>
            Let the doctor decide when you should be given anti-pyretics for
            fever but as I said earlier, fever less than 104 is bearable and
            beneficial safely
          </p>

          <p>
            I am linking some resources. Check them. You will learn a lot from
            them. There will also be references below
          </p>

          {/* References */}
          <div className="pt-6">
            <div className="mb-4 flex items-center gap-3 text-[#8A8F87]">
              <PulseRule />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                References and Resources for Further Information
              </span>
            </div>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-[#4B564F] marker:text-[#C77D3B] marker:font-semibold">
              <li>
                <a href="https://www.youtube.com/watch?v=cRZOUcpiOxY">
                  YouTube: Fever? should you fight it?
                </a>
              </li>
              <li>
                <a href="https://sites.google.com/view/sources-fever/">
                  Google Sites: Fever Resources
                </a>
              </li>
              <li>
                <a href="https://www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759#:~:text=A%20fever%20is%20a%20temporary%20rise%20in%20body%20temperature.%20It%27s%20one%20part%20of%20an%20overall%20response%20from%20the%20body%27s%20immune%20system.%20A%20fever%20is%20usually%20caused%20by%20an%20infection.">
                  Mayo Clinic: Fever
                </a>
              </li>
              <li>
                <a href="https://academic.oup.com/emph/article/9/1/26/5998648#312624980">
                  Academic Review: Fever Management
                </a>
              </li>
              <li>
                {" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22366046/">pubmed</a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/25976513/">
                  Fever and the Thermal Regulation of Immunity: The Immune
                  System Feels the Heat
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27192778/">
                  Insurmountable Heat: The Evolution and Persistence of
                  Defensive Hyperthermia
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/19827944/">
                  Vertebrate Endothermy Restricts Most Fungi as Potential
                  Pathogens
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/22916007/">
                  Fungi and the Rise of Mammals
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/21060737/">
                  Mammalian Endothermy Optimally Restricts Fungi and Metabolic
                  Costs
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
            condition and suspected or confirmed cause.
          </div>
        </div>
      </div>
    </article>
  );
}
