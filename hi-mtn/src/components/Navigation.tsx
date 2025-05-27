"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const handleNavLinkClick = async () => {
    const { default: Collapse } = await import(
      "bootstrap/js/dist/collapse"
    );
    const navEl = document.getElementById("navbarResponsive");
    if (navEl) {
      const bsCollapse =
        Collapse.getInstance(navEl) || new Collapse(navEl, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-lg-4 fixed-top"
      id="mainNav"
      style={{ zIndex: 2 }}
    >
      <div className="container">
        <Link
          href="/"
          className="navbar-brand d-lg-none text-uppercase font-weight-bold"
          onClick={handleNavLinkClick}
        >
          Hi-Mountain
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            {[
              { href: "/", label: "Home" },
              { href: "/hours", label: "Hours" },
            ].map((item) => (
              <li key={item.href} className="nav-item px-lg-4">
                <Link
                  href={item.href}
                  className={
                    "nav-link text-uppercase text-expanded" +
                    (pathname === item.href ? " active" : "")
                  }
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-item px-lg-4">
              <a
                className="nav-link text-uppercase text-expanded"
                href="img/Menu/HiMtnMenuJune2024.pdf"
                download
                onClick={handleNavLinkClick}
              >
                Menu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
