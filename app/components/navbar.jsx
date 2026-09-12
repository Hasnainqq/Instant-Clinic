"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Blogs", href: "/blogs" },
    { label: "About Me", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href) => pathname === href;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-slate-900">
                    Dr. Hasnain Online Clinic
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive(link.href) ? "text-blue-600" : "text-slate-700"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="https://wa.me/923117907036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
                    >
                        Consult Now
                    </Link>
                </div>

                {/* Mobile toggle button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle navigation menu"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        {isOpen ? (
                            <path d="M18 6 6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? "max-h-64 border-t border-slate-200" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col gap-1 px-4 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 ${isActive(link.href) ? "text-blue-600" : "text-slate-700"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="https://wa.me/923117907036"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 rounded-full bg-blue-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                    >
                        Consult Now
                    </Link>
                </div>
            </div>
        </header>
    );
}