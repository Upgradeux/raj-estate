"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function FloatingWhatsApp() {
  return (
    <a
      className="wa"
      href="https://wa.me/919136840554"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandWhatsapp className="i" />
    </a>
  );
}
