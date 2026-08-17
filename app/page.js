
import Image from "next/image";
import img from '../assets/dr-hasnain-sikander-online-consultation.png';
import mbbs from '../assets/mbbs-degree.jpg';
import pmdc from '../assets/pmdc-license.jpg';
import Faqs from "./components/faqs";
import Navbar from "./components/navbar";
import ConsultCTA from "./components/cta";
const illnesses = [
    'Sore throat ',
    'Tonsillitis ',
    'Upper airway disease ',
    'Fever with dry cough',
    'Fever with productive cough ',
    'Pneumonia ',
    'GERD ',
    'Diarrhea ',
    'Constipation ',
    'Abdominal pain ',
    'Other common OPD concerns '
];
const illnessesUrdu = [
    'گلے کی سوزش',
    'ٹانسلز کی سوزش',
    ' سانس کی بیماری',
    'خشک کھانسی کے ساتھ بخار',
    'بلغم والی کھانسی کے ساتھ بخار',
    'نمونیا',
    'معدے میں جلن',
    'اسہال',
    'قبض',
    'پیٹ کی درد',
    ' دیگر عام بیماریاں'
];

const reasons = [
    {
        title: 'Convenient',
        text: 'Connect to a online doctor via whatsapp from the comfort of your home, without the need to travel.'
    },

    {
        title: 'Comprehensive Care',
        text: 'Easy access for patients who need professional support from the comfort of home.'
    }
];

export default function Home() {

    return (
        <main className="min-h-screen bg-slate-50 text-slate-800">

            <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50 py-20">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:px-6">
                    <div className="flex flex-col justify-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Online Doctor Consultation</p>
                        <h1 className="mb-3 text-4xl font-bold leading-tight sm:text-5xl">Dr. Hasnain Sikander</h1>
                        <p className="mb-3 text-lg font-semibold text-blue-700">MBBS • PMDC Licensed</p>
                        <h2 className="urdu-text mb-3 text-4xl font-bold leading-tight sm:text-5xl rtl:text-right my-4">ڈاکٹر حسنین سکندر</h2>
                        <p className="urdu-text mb-3 text-base font-semibold text-blue-700 mt-3">ایم بی بی ایس • آر ایم پی</p>
                        <p className="max-w-2xl text-lg text-slate-600">
                            Get online clinical consultation via whatsapp
                        </p>
                        <a href="https://wa.me/923117907036" target="_blank" rel="noreferrer" className="mt-6  rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 w-fit">
                            Consult Now / <span className="urdu-text">ابھی رابطہ کریں</span>
                        </a>
                    </div>
                    <div className="overflow-hidden rounded-[2rem]  bg-transparent shadow-slate-200/80 lg:min-h-[520px]">
                        <Image
                            src={img}
                            alt="Dr. Hasnain Sikander"
                            className="h-full w-full object-cover"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4 lg:px-6">
                    <h2 className="mb-6 text-3xl font-semibold">Expertise</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {illnesses.map((item, index) => (
                            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-medium text-slate-700 shadow-sm">
                                <div>{item}</div>
                                <div className="urdu-text mt-2 text-slate-600">{illnessesUrdu[index]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-16">
                <div className="mx-auto max-w-6xl px-4 lg:px-6">
                    <div className="mb-8">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Qualifications</p>
                        <h2 className="mb-4 text-3xl font-semibold">Qualified, and Licensed <span className='urdu-text'> لائسنس یافتہ</span></h2>
                        <p className="text-lg text-slate-600">
                            Dr. Hasnain Sikander holds an MBBS degree and a permanent PMDC license.
                        </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
                            <div className="  bg-gradient-to-br from-sky-100 to-blue-50 text-center text-slate-600">
                                <div>
                                    <Image src={mbbs} alt="MBBS Degree"
                                        width={500}
                                        className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
                            <div className=" bg-gradient-to-br from-cyan-100 to-sky-50 text-center text-slate-600">
                                <div>
                                    <Image src={pmdc} alt="PMDC License"
                                        width={500}
                                        className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4 lg:px-6">
                    <h2 className="mb-8 text-3xl font-semibold">Why Choose Dr. Hasnain Sikander</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        {reasons.map((reason, index) => (
                            <article key={reason.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/70">
                                <h3 className="mb-3 text-xl font-semibold">{index + 1}. {reason.title}</h3>
                                <p className="text-slate-600">{reason.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="consult" className="bg-slate-100 py-16">
                <div className="mx-auto max-w-6xl px-4 lg:px-6">
                    <div className='flex flex-row gap-4 justify-between
                    '>

                        <h2 className="mb-8 text-3xl font-semibold">Steps for Consultation</h2>
                        <h2 className="mb-8 text-3xl font-semibold urdu-text">مشاورت کا بنیادی طریقہ </h2>
                    </div>
                    <ol className="space-y-4">
                        <li className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">1</span>
                                <div>
                                    <p className="text-slate-700"><strong>Pay via Easypaisa (Account: 0347-907036):</strong> 200</p>
                                    <p className="urdu-text mt-1 text-sm text-slate-500">ادائیگی ایزی پیسے سے کریں: 200</p>
                                </div>
                            </div>
                        </li>
                        <li className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">2</span>
                                <div>
                                    <p className="text-slate-700"><strong>Send your screenshot to this number:</strong> 0311-907036</p>
                                    <p className="urdu-text mt-1 text-sm text-slate-500">اپنا اسکرین شاٹ اس نمبر پر بھیج دیں: </p>
                                </div>
                            </div>
                        </li>
                        <li className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="flex items-start gap-4">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">3</span>
                                <div>
                                    <p className="text-slate-700"><strong>Get connected with the doctor. That's it!</strong></p>
                                    <p className="urdu-text mt-1 text-sm text-slate-500">ڈاکٹر سے رابطہ حاصل کریں۔ </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>


            <ConsultCTA

                href="https://wa.me/923117907036"
            />
            <Faqs />




        </main>
    );
}
