import Navbar from './components/navbar';
import './globals.css';
import { Inter, Noto_Nastaliq_Urdu } from 'next/font/google';
import Footer from './components/footer';
import Floating from './components/floating';
import Script from 'next/script';
import { headers } from 'next/headers';
const inter = Inter({ subsets: ['latin'] });
const urduFont = Noto_Nastaliq_Urdu({
    subsets: ['arabic'],
    weight: ['400', '700'],
    variable: '--font-urdu'
});
import { WhatsappLink } from './page';

export const metadata = {
    title: 'Dr. Hasnain Sikander - General Physician | Online Doctor Consultation in Pakistan ',
    description: '  "Consult with Dr. Hasnain Sikander, an experienced online doctor in Pakistan.',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.png',
    },
    keywords: [
        " online doctor consultation",
        "doctor online pakistan",
        "telemedicine pakistan",
        "online doctor",
        "fever doctor",
        "diarrhea doctor",
        "MBBS doctor online"
    ]
};

export default async function RootLayout({ children }) {
    const headersList = await headers();
    const nonce = headersList.get("x-nonce") || "";


    return (
        <html lang="en">
            <Script
                id="google-tag-manager"
                strategy="beforeInteractive"
                nonce={nonce}
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-KJRXJSQM');
                    `,
                }}
            />
            <body className={`${inter.className} ${urduFont.variable}`}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KJRXJSQM"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-11062936395"
                    strategy="afterInteractive"
                    nonce={nonce}
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-W0WE8B4HS1"
                    strategy="afterInteractive"
                    nonce={nonce}
                />
                <Script
                    id="gtag-config"
                    strategy="afterInteractive"
                    nonce={nonce}
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11062936395', {
                'page_path': window.location.pathname
              });
                            gtag('config', 'G-W0WE8B4HS1');
            `,
                    }}
                />
                <Navbar />
                {children}
                <Floating href={WhatsappLink} />
                <Footer />
            </body>
        </html>
    );
}
