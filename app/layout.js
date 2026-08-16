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
    title: 'Dr. Hasnain Sikander | Online Doctor Consultation Pakistan',
    description: '  "Consult with Dr. Hasnain Sikander, an experienced online doctor in Pakistan.',
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
