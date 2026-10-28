"use client";

import { useState } from "react";
import Link from "next/link";
import { IconPhone } from "@tabler/icons-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="hd" className={open ? "open" : ""}>
      <div className="wrap nav">
        <Link className="logo" href="#top">
          Raj<span>.</span>Enterprises
        </Link>
        <nav id="nv">
          <Link href="#properties" onClick={() => setOpen(false)}>
            Properties
          </Link>
          <Link href="#services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="#process" onClick={() => setOpen(false)}>
            How it works
          </Link>
          <Link href="#reviews" onClick={() => setOpen(false)}>
            Reviews
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
        <div className="nr">
          <a className="btn pri" href="tel:+919136840554" aria-label="Call now">
            <IconPhone className="i" />
            <span>Call now</span>
          </a>
          <button
            className="menu"
            id="mb"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="nv"
            onClick={() => setOpen(!open)}
          >
            <i></i>
          </button>
        </div>
      </div>
    </header>
  );
}
