import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 h-20 transition-all duration-300",
          isScrolled
            ? "bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-md"
            : ""
        )}
      >
        <div className="flex items-center justify-between h-full px-4 md:px-8">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground transition-all duration-300">
                Sush
              </span>{" "}
              &lt;Dev&gt;
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* mobile full screen menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/90 backdrop-blur-sm text-white z-50 flex flex-col items-center justify-center space-y-10 md:hidden transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close button inside mobile menu */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 text-white"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium hover:text-primary transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}

        <ThemeToggle />
      </div>

      {/* push content below navbar */}
      <div className="pt-24 px-4 md:px-8">
        {/* Your actual sections go here */}
      </div>
    </>
  );
};