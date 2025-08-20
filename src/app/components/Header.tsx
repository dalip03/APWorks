"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "In-flight", href: "#in-flight" },
  { label: "Offerings", href: "#offerings" },
  { label: "Who we are", href: "#who-we-are" },
  { label: "Vision", href: "#vision" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  // Track hash for active menu styling
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);

      const onHashChange = () => setCurrentHash(window.location.hash);
      window.addEventListener("hashchange", onHashChange);

      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace("#", "");
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setCurrentHash(href); // update active state immediately
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-block">
            <Image
              src="/img/LOGO.svg"
              alt="IIP Works Logo"
              width={200}
              height={80}
              priority
              className="w-[60px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                currentHash === item.href
                  ? "bg-gray-200 text-black"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="text-sm font-semibold bg-[#3686FD] hover:bg-[#2e76e4] text-white px-4 py-3 rounded-full transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <Menu size={24} color="black" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-lg p-6"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                  <X size={24} color="black" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col gap-3">
                {/* Logo */}
                <div className="flex items-center">
                  <Link href="/" className="inline-block">
                    <Image
                      src="/img/LogoMain.png"
                      alt="IIP Works Logo"
                      width={120}
                      height={40}
                      priority
                      className="h-auto w-auto max-h-40"
                    />
                  </Link>
                </div>

                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition ${
                      currentHash === item.href
                        ? "bg-gray-200 text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="mt-4 block text-sm font-semibold bg-[#3686FD] hover:bg-[#2e76e4] text-white px-4 py-3 rounded-full transition"
                >
                  Contact Us
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
