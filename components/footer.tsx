import Link from "next/link";

export function Footer() {
  const footerSections = [
    {
      title: "About Us",
      links: [
        { label: "About La-Wasit", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "For Buyers/Tenants",
      links: [
        { label: "Search Properties", href: "/search" },
        { label: "Property Alerts", href: "/alerts" },
        { label: "Buyer Guide", href: "/buyer-guide" },
      ],
    },
    {
      title: "For Owners",
      links: [
        { label: "Post Property", href: "/post-property" },
        { label: "Owner Guide", href: "/owner-guide" },
        { label: "Owner Dashboard", href: "/owner-dashboard" },
      ],
    },
    {
      title: "Connect With Us",
      links: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-white font-semibold text-lg mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
