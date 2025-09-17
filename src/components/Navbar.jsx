import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./PillNav.css";
import defaultLogo from "../assets/logo.jpg";

const PillNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    // Lock scroll when menu is open
    document.body.style.overflow = newState ? "hidden" : "auto";

    // Hamburger animation
    const lines = hamburgerRef.current.querySelectorAll(".hamburger-line");
    if (newState) {
      gsap.to(lines[0], { rotation: 45, y: 6, duration: 0.3, ease: "power3.inOut" });
      gsap.to(lines[1], { rotation: -45, y: -6, duration: 0.3, ease: "power3.inOut" });
    } else {
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease: "power3.inOut" });
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease: "power3.inOut" });
    }

    // Mobile menu animation
    if (mobileMenuRef.current) {
      if (newState) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.inOut", visibility: "visible" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => gsap.set(mobileMenuRef.current, { visibility: "hidden" }),
        });
      }
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "auto";
        gsap.set(mobileMenuRef.current, { visibility: "hidden", opacity: 0 });
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav className="pill-nav">
      {/* Logo */}
      <div className="logo">
        <img src={defaultLogo} alt="Logo" className="logo-img" />
        <span className="logo-text">MyPortfolio</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav-links desktop-only">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div
        ref={hamburgerRef}
        className="mobile-menu-button mobile-only"
        onClick={toggleMobileMenu}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="mobile-menu-popover mobile-only">
        <ul className="mobile-menu-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="mobile-menu-link" onClick={toggleMobileMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default PillNav;
