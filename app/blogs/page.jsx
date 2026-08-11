import Link from "next/link";
import Image from "next/image";

// Replace this with real posts — from a CMS, MDX files, or a database query.
const posts = [
  {
    slug: "gastroenteritis-viral-vs-bacterial",
    title: "Gastroenteritis: Viral vs Bacterial",
    urduTitle: "گیسٹرو انٹریٹس: وائرل سے باکٹریل",
    excerpt:
      "Learn the key differences between viral and bacterial gastroenteritis, including symptoms, stool findings, and when antibiotics are actually appropriate.",
    urduExcerpt:
      "بخار کی گھریلو دیکھ بھال کے لیے آسان رہنمائی، اور وہ علامات جن میں ڈاکٹر سے رجوع کرنا ضروری ہے۔",
    date: "2026-06-10",
  },
  {
    slug: "online-consultation-guide",
    title: "How Online Consultations Work — A Simple Guide",
    urduTitle: "آن لائن مشاورت کیسے کام کرتی ہے — ایک آسان رہنما",
    excerpt:
      "From payment to Google Meet link — a step-by-step walkthrough of what to expect.",
    urduExcerpt:
      "ادائیگی سے لے کر گوگل میٹ لنک تک — مرحلہ وار رہنمائی کہ کیا توقع رکھیں۔",
    date: "2026-05-22",
    image: "/blogs/consultation.jpg",
  },
  {
    slug: "stomach-issues-home-care",
    title: "Common Stomach Issues: Home Care Tips",
    urduTitle: "پیٹ کے عام مسائل: گھریلو دیکھ بھال کے مشورے",
    excerpt:
      "Practical, safe steps for managing mild stomach discomfort before it needs a clinic visit.",
    urduExcerpt:
      "کلینک جانے سے پہلے ہلکے پیٹ کے مسائل کو سنبھالنے کے محفوظ اور عملی طریقے۔",
    date: "2026-04-30",
    image: "/blogs/stomach",
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
