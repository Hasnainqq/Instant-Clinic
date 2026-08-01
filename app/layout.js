import Navbar from './components/navbar';
import './globals.css';
import { Inter, Noto_Nastaliq_Urdu } from 'next/font/google';
import Footer from './components/footer';
import Floating from './components/floating';
const inter = Inter({ subsets: ['latin'] });
const urduFont = Noto_Nastaliq_Urdu({
    subsets: ['arabic'],
    weight: ['400', '700'],
    variable: '--font-urdu'
});

export const metadata = {
    title: 'Dr. Hasnain Sikander | Instant Online Doctor Consultation Pakistan',
    description: '  "Consult an MBBS doctor online for fever, cough, sore throat, diarrhea, GERD and common illnesses via Google Meet.',
    keywords: [
        "instant online doctor consultation",
        "doctor online pakistan",
        "telemedicine pakistan",
        "online doctor",
        "fever doctor",
        "diarrhea doctor",
        "MBBS doctor online"
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <body className={`${inter.className} ${urduFont.variable}`}>
                <Navbar />
                {children}
                <Floating />
                <Footer />
            </body>
        </html>
    );
}
