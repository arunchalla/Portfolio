"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const socials = [
  { icon: GitHubIcon, href: "https://github.com", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/arunch/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-crystal-600 dark:hover:text-crystal-300 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">Copyright © {new Date().getFullYear()} AKC</p>
      </div>
    </footer>
  );
}
