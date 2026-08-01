import Link from "next/link";

const navLinks = [
  { label: "Blogs", urduLabel: "بلاگز", href: "/blogs" },
  { label: "About Me", urduLabel: "میرے بارے میں", href: "/about" },
  { label: "Consult Now", urduLabel: "ابھی مشاورت کریں", href: "/consult" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "WhatsApp", href: "https://wa.me/" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Dr. Hasnain Sikandar
            </h2>
            <h2
              dir="rtl"
              lang="ur"
              className="urdu-text mt-1 text-lg font-bold text-slate-800"
            >
              ڈاکٹر حسنین سکندر
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              MBBS, RMP — Online medical consultations for common OPD concerns.
            </p>
            <p
              dir="rtl"
              lang="ur"
              className="urdu-text mt-2 text-sm leading-loose text-slate-600"
            >
              ایم بی بی ایس، آر ایم پی — عام او پی ڈی مسائل کے لیے آن لائن طبی
              مشاورت۔
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between text-sm text-slate-600 hover:text-blue-600"
                  >
                    <span>{link.label}</span>
                    <span
                      dir="rtl"
                      lang="ur"
                      className="urdu-text text-slate-500"
                    >
                      {link.urduLabel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Email: s20755753@gmail.com</li>
              <li>Phone / WhatsApp: +92 311 790 7036</li>
            </ul>

            <div className="mt-5 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-500 hover:text-blue-600"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Dr. Hasnain Sikandar. All rights reserved.</p>
          <p dir="rtl" lang="ur" className="urdu-text">
            © {year} ڈاکٹر حسنین سکندر۔ جملہ حقوق محفوظ ہیں۔
          </p>
        </div>
      </div>
    </footer>
  );
}
