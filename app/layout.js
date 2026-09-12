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

            <body className={`${inter.className} ${urduFont.variable}`}>
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
