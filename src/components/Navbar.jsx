import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./PillNav.css";
import defaultLogo from "../assets/logo.jpg";

const PillNav = ({ onMobileMenuClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const ease = "power3.inOut";

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    // Lock scroll when menu is open
    document.body.style.overflow = newState ? "hidden" : "auto";

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line");
      if (newState) {
        // Animate hamburger into "X"
        gsap.to(lines[0], { rotation: 45, y: 6, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -6, duration: 0.3, ease });
      } else {
        // Reset hamburger
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        // Slide menu down
        gsap.fromTo(
          menu,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease,
            visibility: "visible",
          }
        );
      } else {
        // Slide menu up
        gsap.to(menu, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease,
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  // Close menu when clicking outside
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="pill-nav">
      {/* Logo */}
      <div className="logo">
        <img src={defaultLogo} alt="Logo" className="logo-img" />
        <span className="logo-text">MyPortfolio</span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="nav-links desktop-only">
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger Button (Mobile Only) */}
      <div
        ref={hamburgerRef}
        className="mobile-menu-button mobile-only"
        onClick={toggleMobileMenu}
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="mobile-menu-popover">
        <ul className="mobile-menu-list">
          <li>
            <a href="#home" className="mobile-menu-link" onClick={toggleMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="mobile-menu-link" onClick={toggleMobileMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="mobile-menu-link" onClick={toggleMobileMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-menu-link" onClick={toggleMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PillNav;
