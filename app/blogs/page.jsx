import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "anemia",
    title: "Anemia: Types, Symptoms, Diagnosis & Treatment",
    urduTitle: "انیمیا: اقسام، علامات، تشخیص اور علاج",
    excerpt:
      "Learn what anemia is, why it happens, how doctors diagnose it, and which treatment options help most.",
    urduExcerpt:
      "انیمیا کیا ہے، اس کی وجہ کیا ہے، ڈاکٹر اس کی تشخیص کیسے کرتے ہیں، اور کون سا علاج زیادہ مدد دیتا ہے۔",
    date: "2026-10-04",
  },
  {
    slug: "asthma",
    title: "Asthma: Symptoms, Triggers, Diagnosis and Treatment",
    urduTitle: "دھانپہ: علامات، محرکات، تشخیص اور علاج",
    excerpt:
      "Understand asthma signs, common triggers, diagnosis, and practical steps to keep breathing comfortable and controlled.",
    urduExcerpt:
      "دھانپہ کے علامات، عام محرکات، تشخیص اور سانس کو بہتر اور مستحکم رکھنے کے عملی طریقے دیکھیں۔",
    date: "2026-10-04",
  },
  {
    slug: "ckd",
    title: "Chronic Kidney Disease (CKD): Causes, Stages, Diagnosis & Dialysis",
    urduTitle: "کریونک کِڈنی ڈیزیز: وجوہات، مراحل، تشخیص اور ڈایلسز",
    excerpt:
      "A practical overview of kidney disease stages, warning signs, tests, and when dialysis or specialist care becomes necessary.",
    urduExcerpt:
      "گردوں کے مرض کے مراحل، خطرے کے نشان، ٹیسٹ اور جب ڈایلسز یا اسپیشلسٹ کی ضرورت پڑتی ہے۔",
    date: "2026-10-04",
  },
  {
    slug: "dangue",
    title: "Dengue Fever: Symptoms, Diagnosis (NS1, IgM) and Treatment",
    urduTitle: "ڈینگی بخار: علامات، تشخیص (NS1، IgM) اور علاج",
    excerpt:
      "Learn how dengue presents, which tests matter, and what treatment and monitoring are important during recovery.",
    urduExcerpt:
      "ڈینگی کی علامات، اہم ٹیسٹ، علاج اور صحت یاب ہونے کے دوران نگرانی کے بارے میں جانیں۔",
    date: "2026-10-04",
  },
  {
    slug: "diabetes",
    title: "Type 2 Diabetes: Symptoms, Diagnosis & Management",
    urduTitle: "ٹائپ 2 ذیابیطس: علامات، تشخیص اور انتظام",
    excerpt:
      "Get a clear view of type 2 diabetes, early warning signs, diagnosis, and day-to-day care for better control.",
    urduExcerpt:
      "ٹائپ 2 ذیابیطس، ابتدائی علامات، تشخیص اور روزمرہ کے انتظام کے بارے میں واضح معلومات۔",
    date: "2026-10-04",
  },
  {
    slug: "fever-is-it-really-a-bad-thing",
    title: "Fever: Is it really a bad thing",
    urduTitle: "بخار: کیا واقعی یہ برا چیز ہے؟",
    excerpt:
      "Should you fight fever every time you catch it? Learn when to let it be and when to seek medical attention.",
    urduExcerpt:
      "کیا ہر بار بخار کے خلاف لڑنا ضروری ہے؟ جانئے کہ کب اس کو چھوڑ دینا ہے اور کب ڈاکٹر سے مشاورت کرنی چاہیے۔",
    date: "2026-10-04",
  },
  {
    slug: "gastroenteritis-viral-vs-bacterial",
    title: "Gastroenteritis: Viral vs Bacterial",
    urduTitle: "گیسٹرو انٹریٹس: وائرل بمقابلہ باکٹیریل",
    excerpt:
      "Learn the key differences between viral and bacterial gastroenteritis, including symptoms, stool findings, and when antibiotics are appropriate.",
    urduExcerpt:
      "وائرل اور باکٹیریل گیسٹرو انٹریٹس میں فرق، علامات، پاخانے کی خصوصیات اور جب اینٹی بائیوٹکس مناسب ہوتے ہیں۔",
    date: "2026-10-04",
  },
  {
    slug: "gastroentritis",
    title: "Hepatitis B and C: Causes, Symptoms, Diagnosis and Treatment",
    urduTitle: "ہیپٹائٹس بی اور سی: وجوہات، علامات، تشخیص اور علاج",
    excerpt:
      "A practical guide to hepatitis B and C, focusing on how they spread, the tests used, and the treatment options available.",
    urduExcerpt:
      "ہیپٹائٹس بی اور سی کے پھیلاؤ، علامات، ٹیسٹ اور موجودہ علاج سے متعلق عملی معلومات۔",
    date: "2026-10-04",
  },
  {
    slug: "gerd",
    title: "GERD: Causes, Symptoms, Diagnosis and Treatment",
    urduTitle: "جی ای آر ڈی: وجوہات، علامات، تشخیص اور علاج",
    excerpt:
      "A clear guide to acid reflux, possible causes, useful testing, and steps that help reduce heartburn and long-term complications.",
    urduExcerpt:
      "ایسڈ ریفلیکس، اس کی وجوہات، ضروری جانچ اور دل کی جلن اور لمبی مدتی مشکلات کو کم کرنے کے طریقے۔",
    date: "2026-10-04",
  },
  {
    slug: "gida",
    title: "Iron Deficiency in Pregnancy: Causes, Risks & Treatment",
    urduTitle: "حمل کے دوران آئرن کی کمی: وجوہات، خطرات اور علاج",
    excerpt:
      "Understand why iron deficiency is common during pregnancy, how it affects mother and baby, and what supports healthy recovery.",
    urduExcerpt:
      "حمل کے دوران آئرن کی کمی کیوں عام ہے، اس کے اثرات، اور صحت مند بحالی کے لیے کیا کرنا چاہیے۔",
    date: "2026-10-04",
  },
  {
    slug: "hepatitis",
    title: "Hepatitis B and C: Symptoms, Diagnosis, Treatment & Prevention",
    urduTitle: "ہیپٹائٹس بی اور سی: علامات، تشخیص، علاج اور روک تھام",
    excerpt:
      "Learn about hepatitis B and C, the most useful tests, the importance of early diagnosis, and how prevention reduces spread.",
    urduExcerpt:
      "ہیپٹائٹس بی اور سی کے بارے میں، اہم ٹیسٹ، جلد تشخیص کی اہمیت اور روک تھام کے طریقے۔",
    date: "2026-10-04",
  },
  {
    slug: "hepbandc",
    title: "Hepatitis B and C: Causes, Symptoms, Diagnosis and Treatment",
    urduTitle: "ہیپٹائٹس بی اور سی: وجوہات، علامات، تشخیص اور علاج",
    excerpt:
      "A practical guide to hepatitis B and C, including risks, symptoms, blood tests, and modern antiviral treatment options.",
    urduExcerpt:
      "ہیپٹائٹس بی اور سی کے خطرات، علامات، خون کے ٹیسٹ اور جدید اینٹی ویرل علاج کے بارے میں سہل معلومات۔",
    date: "2026-10-04",
  },
  {
    slug: "hypertension",
    title: "Hypertension: Causes, Symptoms, Diagnosis & Treatment",
    urduTitle: "ہائی بلڈ پریشر: وجوہات، علامات، تشخیص اور علاج",
    excerpt:
      "Learn how high blood pressure develops, how it is diagnosed, and what changes help control it long term.",
    urduExcerpt:
      "ہائی بلڈ پریشر کیسے پیدا ہوتا ہے، کیسے تشخیص کیا جاتا ہے، اور طویل مدتی کن تبدیلیوں سے اسے کنٹرول کیا جا سکتا ہے۔",
    date: "2026-10-04",
  },
  {
    slug: "hypothyroidism",
    title: "Hypothyroidism: Causes, Symptoms, TSH Testing & Levothyroxine",
    urduTitle: "ہائپو تھائیرائڈزم: وجوہات، علامات، TSH جانچ اور لیو تھائروکسین",
    excerpt:
      "A clear guide to low thyroid activity, how TSH testing works, and why levothyroxine is often the first-line treatment.",
    urduExcerpt:
      "کم تھائیرائڈ سرگرمی، TSH جانچ، اور لیو تھائروکسین کیوں سب سے زیادہ استعمال ہونے والا علاج ہے۔",
    date: "2026-10-04",
  },
  {
    slug: "online-consultation-guide",
    title: "Online Doctor Consultation in Pakistan | Instant & Hassle-Free",
    urduTitle: "آن لائن ڈاکٹر مشاورت: فوری اور آسان",
    excerpt:
      "Skip the waiting line and learn how the online consultation process works in Pakistan, step by step.",
    urduExcerpt:
      "انتظار ختم کریں اور سیکھیں کہ پاکستان میں آن لائن مشاورت کیسے کام کرتی ہے، قدم بہ قدم۔",
    date: "2026-10-04",
  },
  {
    slug: "pneumonia",
    title: "Pneumonia: Causes, Diagnosis, CURB-65 and Treatment",
    urduTitle: "نمونیا: وجوہات، تشخیص، CURB-65 اور علاج",
    excerpt:
      "Understand pneumonia symptoms, key risk factors, how doctors assess severity, and what treatment is usually needed.",
    urduExcerpt:
      "نمونیا کے علامات، اہم خطرات، شدت کی تشخیص اور عام طور پر کس علاج کی ضرورت پڑتی ہے۔",
    date: "2026-10-04",
  },
  {
    slug: "pud",
    title: "Peptic Ulcer Disease: Causes, Symptoms and Treatment",
    urduTitle: "پیپٹک السر ڈیزیز: وجوہات، علامات اور علاج",
    excerpt:
      "Get a practical explanation of stomach and duodenal ulcers, risk factors, symptom patterns, and common treatment approaches.",
    urduExcerpt:
      "سٹومک اور ڈوڈینل السر، خطرے کے عوامل، علامات اور عام علاج کے بارے میں عملی معلومات۔",
    date: "2026-10-04",
  },
  {
    slug: "tuberculosis",
    title: "Tuberculosis (TB): Symptoms, Diagnosis and Treatment",
    urduTitle: "ٹوبریکولوز: علامات، تشخیص اور علاج",
    excerpt:
      "Explore the symptoms, how TB is diagnosed, and the treatment timeline and prevention measures that matter most.",
    urduExcerpt:
      "ٹی بی کے علامات، تشخیص، علاج کا دورانیہ اور ایسی روک تھام کی تدابیر جن سے حقیقت میں مدد ملتی ہے۔",
    date: "2026-10-04",
  },
  {
    slug: "typhoid",
    title: "Typhoid Fever: Symptoms, Diagnosis, Treatment & Vaccine",
    urduTitle: "ٹائیفائیڈ بخار: علامات، تشخیص، علاج اور ویکسین",
    excerpt:
      "Learn how typhoid fever develops, which tests confirm it, and what treatment and vaccination strategies are useful.",
    urduExcerpt:
      "ٹیفائیڈ بخار کیسے پیدا ہوتا ہے، تشخیص کے طریقے، علاج اور ویکسین کے بارے میں جانیں۔",
    date: "2026-10-04",
  },
  {
    slug: "uti",
    title: "Urinary Tract Infection (UTI): Symptoms, Diagnosis & Treatment",
    urduTitle: "مستقیمی مجرا کے انفیکشن (UTI): علامات، تشخیص اور علاج",
    excerpt:
      "Understand common urinary tract infection symptoms, when to test, and the most effective treatment and follow-up care.",
    urduExcerpt:
      "مستقیمی مجرا کے انفیکشن کے عام علامات، جب جانچ کرائی جائے، اور سب سے مؤثر علاج کے بارے میں۔",
    date: "2026-10-04",
  },
];

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blogs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Blog
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
              Health Tips &amp; Articles
            </h1>
          </div>
          <h1
            dir="rtl"
            lang="ur"
            className="urdu-text text-2xl font-bold text-slate-700"
          >
            صحت کے مشورے اور مضامین
          </h1>
        </div>

        {/* Post grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {formatDate(post.date)}
                </span>

                <h2 className="font-semibold text-slate-800 group-hover:text-blue-600">
                  {post.title}
                </h2>
                <h2
                  dir="rtl"
                  lang="ur"
                  className="urdu-text text-right font-semibold text-slate-700"
                >
                  {post.urduTitle}
                </h2>

                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <p
                  dir="rtl"
                  lang="ur"
                  className="urdu-text text-right text-sm leading-loose text-slate-600"
                >
                  {post.urduExcerpt}
                </p>

                <span className="mt-3 text-sm font-semibold text-blue-600">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
