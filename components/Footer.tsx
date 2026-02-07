"use client";

import StegocareLogo from "./StegocareLogo";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#" },
      { label: "Features", href: "#features" },
      { label: "Security", href: "#security" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Planning", href: "#features" },
      { label: "Digital Intake", href: "#features" },
      { label: "Billing", href: "#features" },
      { label: "HR & Payroll", href: "#features" },
      { label: "Mobile App", href: "#features" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "Vlaamse Overheid", href: "#integrations" },
      { label: "Liantis", href: "#integrations" },
      { label: "eHealth", href: "#integrations" },
      { label: "BelRAI", href: "#integrations" },
      { label: "itsme®", href: "#integrations" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <StegocareLogo size={28} className="text-black" colorful />
              <span className="text-lg font-semibold tracking-tight text-black">
                Stegocare
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Next-generation integrated healthcare management for Belgian care
              organizations.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Stegocare by LVDM Consultancy.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
