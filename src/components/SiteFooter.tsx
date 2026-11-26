export const profileLinks = [
  { href: "https://www.linkedin.com/in/dandersonallen", label: "LinkedIn" },
  { href: "https://github.com/daa729", label: "GitHub" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="page flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Anderson Allen</p>
        <ul className="flex gap-5">
          {profileLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
