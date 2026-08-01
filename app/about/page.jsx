import Image from "next/image";
import Link from "next/link";
import img from "../../assets/dr-hasnain-sikander-online-consultation.png";

const education = [
  {
    year: "2025",
    en: "MBBS — Sheikh Zayed Medical College, Rahim Yar Khan",
    ur: "ایم بی بی ایس — شیخ زاید میڈیکل کالج، رحیم یار خان",
  },
  {
    year: "House Job",
    en: "General Medicine, Paediatrics, Urology & General Surgery — Sheikh Zayed Medical College Hospital, Rahim Yar Khan",
    ur: "جنرل میڈیسن، اطفال، یورولوجی اور جنرل سرجری — شیخ زاید میڈیکل کالج ہسپتال، رحیم یار خان",
  },
  {
    year: "FSc (Pre-Medical)",
    en: "Government Degree College, Muzaffargarh",
    ur: "گورنمنٹ ڈگری کالج، مظفر گڑھ",
  },
  {
    year: "Matric",
    en: "Sardar Kourey Khan Higher Secondary School, Muzaffargarh",
    ur: "سردار کوڑے خان ہائیر سیکنڈری سکول، مظفر گڑھ",
  },
];

const rotations = [
  "General Medicine",
  "Paediatrics",
  "Urology",
  "General Surgery",
];

export default function AboutMe() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-14 grid gap-10 md:grid-cols-[auto,1fr] md:items-center">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-blue-50 bg-slate-100 md:mx-0">
            {/* Replace src with your actual photo */}
            <Image
              src={img}
              alt="Dr. Hasnain Sikandar"
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              About Me
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Dr. Hasnain Sikandar
            </h1>
            <p className="mt-1 text-lg font-medium text-slate-600">MBBS, RMP</p>

            <h1
              dir="rtl"
              lang="ur"
              className="urdu-text mt-4 text-2xl font-bold text-slate-900"
            >
              ڈاکٹر حسنین سکندر
            </h1>
            <p
              dir="rtl"
              lang="ur"
              className="urdu-text text-lg font-medium text-slate-600"
            >
              ایم بی بی ایس، آر ایم پی
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-14 grid gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-800">
              Who I Am
            </h2>
            <p className="leading-relaxed text-slate-600">
              I&apos;m Dr. Hasnain Sikandar, a licensed medical doctor (MBBS,
              RMP) from Pakistan. I graduated from Sheikh Zayed Medical College,
              Rahim Yar Khan in 2025 and completed my house job at the same
              hospital, rotating through general medicine, paediatrics, urology,
              and general surgery. I&apos;m currently pursuing my postgraduate
              specialty training while offering accessible online consultations
              for common OPD concerns.
            </p>
          </div>

          <div>
            <h2
              dir="rtl"
              lang="ur"
              className="urdu-text mb-3 text-right text-xl font-semibold text-slate-800"
            >
              میرا تعارف
            </h2>
            <p
              dir="rtl"
              lang="ur"
              className="urdu-text text-right leading-loose text-slate-600"
            >
              میں ڈاکٹر حسنین سکندر ہوں، پاکستان سے ایک لائسنس یافتہ میڈیکل
              ڈاکٹر (ایم بی بی ایس، آر ایم پی)۔ میں نے 2025 میں شیخ زاید میڈیکل
              کالج، رحیم یار خان سے گریجویشن کی اور اسی ہسپتال سے ہاؤس جاب مکمل
              کی، جس میں جنرل میڈیسن، اطفال، یورولوجی اور جنرل سرجری شامل تھے۔
              میں اس وقت اپنی پوسٹ گریجویٹ سپیشلٹی ٹریننگ جاری رکھے ہوئے ہوں اور
              عام او پی ڈی مسائل کے لیے قابلِ رسائی آن لائن مشاورت بھی فراہم
              کرتا ہوں۔
            </p>
          </div>
        </div>

        {/* Rotations */}
        <div className="mb-14">
          <h2 className="mb-2 text-xl font-semibold text-slate-800">
            Clinical Rotations
          </h2>
          <h2
            dir="rtl"
            lang="ur"
            className="urdu-text mb-4 text-xl font-semibold text-slate-800"
          >
            کلینیکل روٹیشنز
          </h2>
          <div className="flex flex-wrap gap-3">
            {rotations.map((rotation) => (
              <span
                key={rotation}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {rotation}
              </span>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <div className="mb-14">
          <h2 className="mb-2 text-xl font-semibold text-slate-800">
            Education
          </h2>
          <h2
            dir="rtl"
            lang="ur"
            className="urdu-text mb-6 text-xl font-semibold text-slate-800"
          >
            تعلیم
          </h2>

          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.year}
                className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-start sm:justify-between"
              >
                <span className="inline-block w-fit rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 sm:mt-1">
                  {item.year}
                </span>
                <div className="flex-1 space-y-1 sm:pl-6">
                  <p className="font-medium text-slate-800">{item.en}</p>
                  <p
                    dir="rtl"
                    lang="ur"
                    className="urdu-text text-right text-slate-600"
                  >
                    {item.ur}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-blue-600 p-8 text-center text-white">
          <h2 className="text-2xl font-semibold">
            Have a health concern you&apos;d like to discuss?
          </h2>
          <h2
            dir="rtl"
            lang="ur"
            className="urdu-text mt-2 text-xl font-semibold"
          >
            کیا آپ کسی صحت کے مسئلے پر بات کرنا چاہتے ہیں؟
          </h2>
          <Link
            href="/consult"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50"
          >
            Consult Now
          </Link>
        </div>
      </div>
    </section>
  );
}
