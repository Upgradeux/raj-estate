"use client";

import { useState } from "react";
import {
  IconPin,
  IconPhone,
  IconHome,
  IconChartBar,
  IconKey,
  IconBuilding,
  IconFileText,
  IconCheck,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

interface ServiceItem {
  id: string;
  icon: typeof IconHome;
  title: string;
  desc: string;
  points: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "buy",
    icon: IconHome,
    title: "Buy a home",
    desc: "Flats, row houses and plots that fit your budget and commute.",
    points: [
      "Shortlist by budget and location",
      "Site visits arranged with you",
      "Price and papers checked before you commit",
    ],
  },
  {
    id: "sell",
    icon: IconChartBar,
    title: "Sell your property",
    desc: "Fair pricing, serious buyers and a smooth handover.",
    points: [
      "Honest guidance on the right price",
      "Genuine buyer enquiries only",
      "Agreement and transfer handled",
    ],
  },
  {
    id: "rent",
    icon: IconKey,
    title: "Rent or lease",
    desc: "Residential and commercial rentals, with owners and tenants looked after.",
    points: [
      "Homes, shops and offices for rent",
      "Rent agreement drafted for you",
      "Clear terms before anyone signs",
    ],
  },
  {
    id: "commercial",
    icon: IconBuilding,
    title: "Commercial and investment",
    desc: "Shops, offices and land in growing parts of Navi Mumbai.",
    points: [
      "Shops and offices on busy roads",
      "Plots with clear title",
      "Advice on location and growth",
    ],
  },
  {
    id: "docs",
    icon: IconFileText,
    title: "Documentation",
    desc: "Agreement to sale, registration and transfer, in plain language.",
    points: [
      "Agreement to sale",
      "Registration support",
      "Ownership and title checks",
    ],
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string>("buy");

  const toggle = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="wrap sv-wrap">
        <div className="sv-side">
          <h2>Whatever you need to do with property, we handle it.</h2>
          <p>
            Local agents who know the area street by street. Pick a service to
            see how we help.
          </p>
          <div className="areas">
            <span>
              <IconPin className="i" />
              Kalamboli
            </span>
            <span>
              <IconPin className="i" />
              Panvel
            </span>
            <span>
              <IconPin className="i" />
              Karanjade
            </span>
            <span>
              <IconPin className="i" />
              Navi Mumbai
            </span>
          </div>
          
        </div>

        <div className="sv-list">
          {SERVICES.map((s) => {
            const isOpen = openId === s.id;
            const Icon = s.icon;
            const waLink = `https://wa.me/919136840554?text=${encodeURIComponent(
              `Hi Raj Enterprises, I need help with: ${s.title}. Please call me.`
            )}`;

            return (
              <div key={s.id} className={`sv${isOpen ? " open" : ""}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(s.id)}
                >
                  <span className="ic">
                    <Icon className="i" />
                  </span>
                  <span>
                    <h3>{s.title}</h3>
                    <span className="d">{s.desc}</span>
                  </span>
                  <span className="pm"></span>
                </button>
                <div className="pn">
                  <div>
                    <div className="pi">
                      <ul>
                        {s.points.map((p) => (
                          <li key={p}>
                            <IconCheck className="i" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <a
                        className="btn pri"
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandWhatsapp className="i" />
                        Ask about this
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
