"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Do I need to pay before the consultation?",
        answer:
            "Yes, the consultation fee is paid first via Easypaisa before the meeting is arranged.",
        urduQuestion: "کیا مشاورت سے پہلے ادائیگی ضروری ہے؟",
        urduAnswer:
            "ہاں، مشاورت کی فیس پہلے ایزی پیسہ کے ذریعے ادا کرنی ہوتی ہے، اس کے بعد میٹنگ کا وقت طے کیا جاتا ہے۔",
    },
    {
        question: "Can I consult for fever, cough, or stomach issues?",
        answer:
            "Yes, common OPD concerns such as fever, cough, and stomach issues can be discussed online.",
        urduQuestion: "کیا میں بخار، کھانسی یا پیٹ کے مسائل کے لیے مشاورت کر سکتا ہوں؟",
        urduAnswer:
            "جی ہاں، بخار، کھانسی اور پیٹ کے عام OPD مسائل کی مشاورت آن لائن کی جا سکتی ہے۔",
    },
    {
        question: "How will I receive the consultation link?",
        answer:
            "After payment and sending the screenshot, you will receive the Google Meet link for your consultation.",
        urduQuestion: "میں مشاورت کا لنک کیسے حاصل کروں گا؟",
        urduAnswer:
            "ادائیگی اور اسکرین شاٹ بھیجنے کے بعد آپ کو گوگل میٹ کا لنک موصول ہو جائے گا۔",
    },
];

function FaqItem({ faq, isOpen, onToggle, index }) {
    const panelId = `faq-panel-${index}`;
    const buttonId = `faq-button-${index}`;

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-colors hover:border-blue-200">
            <h3>
                <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={onToggle}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    <span className="flex-1">
                        <span className="block font-semibold text-slate-800">
                            {faq.question}
                        </span>
                        <span
                            dir="rtl"
                            lang="ur"
                            className="urdu-text mt-1 block text-right font-semibold text-slate-800"
                        >
                            {faq.urduQuestion}
                        </span>
                    </span>

                    <span
                        aria-hidden="true"
                        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-lg text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                            }`}
                    >
                        +
                    </span>
                </button>
            </h3>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="space-y-3 border-t border-slate-200 px-5 py-4">
                        <p className="text-slate-600">{faq.answer}</p>
                        <p dir="rtl" lang="ur" className="urdu-text text-right text-slate-600">
                            {faq.urduAnswer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Faqs() {
    const [openFaq, setOpenFaq] = useState(0);

    // JSON-LD structured data helps search engines surface these as rich FAQ results.
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="bg-white py-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="mx-auto max-w-6xl px-4 lg:px-6">
                <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                            FAQs
                        </p>
                        <h2 className="text-3xl font-semibold text-slate-900">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <h2
                        dir="rtl"
                        lang="ur"
                        className="urdu-text text-2xl font-semibold text-slate-700"
                    >
                        اکثر پوچھے جانے والے سوالات
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={faq.question}
                            faq={faq}
                            index={index}
                            isOpen={openFaq === index}
                            onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}