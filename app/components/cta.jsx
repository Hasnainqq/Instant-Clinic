// components/ConsultCTA.tsx

export default function ConsultCTA({
  title = "Need Expert Medical Advice?",
  titleUrdu = "ماہر طبی مشورے کی ضرورت ہے؟",
  subtitle = "Book a consultation with our specialists now!",
  buttonText = "Consult Now",
  buttonTextUrdu = "ابھی مشورہ کریں",
  onConsult,
  href,
}) {
  const ButtonContent = (
    <>
      <span>{buttonText}</span>
      <span>{buttonTextUrdu}</span>
    </>
  );

  const buttonClasses =
    "inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95";

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-12 sm:px-12 sm:py-16">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <h2 className="text-2xl font-bold text-white sm:text-3xl urdu-text">
          {titleUrdu}
        </h2>

        <div className="mt-8">
          {href ? (
            <a href={href} className={buttonClasses}>
              {ButtonContent}
            </a>
          ) : (
            <button onClick={onConsult} className={buttonClasses}>
              {ButtonContent}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
