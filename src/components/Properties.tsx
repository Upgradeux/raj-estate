"use client";

import { useState } from "react";
import {
  IconPin,
  IconBed,
  IconRulerMeasure,
  IconArrowRight,
  IconPhone,
} from "@tabler/icons-react";

interface Property {
  t: "Buy" | "Rent";
  n: string;
  l: string;
  b: number;
  a: string;
  p: string;
  s?: string;
  i: string;
  tx: string;
}

const PROPERTIES: Property[] = [
  {
    t: "Buy",
    n: "2 BHK, Sector 8",
    l: "Kalamboli",
    b: 2,
    a: "680 sq ft",
    p: "₹78 Lakh",
    i: "photo-1545324418-cc1a3fa10c00",
    tx: "Ready to move",
  },
  {
    t: "Buy",
    n: "1 BHK near Kalamboli Circle",
    l: "Kalamboli",
    b: 1,
    a: "450 sq ft",
    p: "₹52 Lakh",
    i: "photo-1522708323590-d24dbb6b0267",
    tx: "Ideal first home",
  },
  {
    t: "Rent",
    n: "2 BHK, Sector 9",
    l: "Kalamboli",
    b: 2,
    a: "700 sq ft",
    p: "₹18,000",
    s: "/month",
    i: "photo-1502672260266-1c1ef2d93688",
    tx: "Semi-furnished",
  },
  {
    t: "Buy",
    n: "Row house with garden",
    l: "Karanjade, Panvel",
    b: 3,
    a: "1,100 sq ft",
    p: "₹1.2 Cr",
    i: "photo-1568605114967-8130f3a36994",
    tx: "Independent",
  },
  {
    t: "Rent",
    n: "Shop on main road",
    l: "Sector 8, Kalamboli",
    b: 0,
    a: "320 sq ft",
    p: "₹35,000",
    s: "/month",
    i: "photo-1486406146926-c627a92ad1ab",
    tx: "Commercial",
  },
  {
    t: "Buy",
    n: "Residential plot",
    l: "Near Panvel",
    b: 0,
    a: "1,200 sq ft",
    p: "₹38 Lakh",
    i: "photo-1500382017468-9049fed747ef",
    tx: "Clear title",
  },
];

export default function Properties() {
  const [filter, setFilter] = useState<"all" | "Buy" | "Rent">("all");

  const filtered = PROPERTIES.filter((x) => {
    if (filter !== "all" && x.t !== filter) return false;
    return true;
  });

  return (
    <section id="properties">
      <div className="wrap">
        <div className="head">
          <h2>Latest properties near you.</h2>
          <p>
            A few of the homes, rentals and plots we’re handling right now in
            Kalamboli and Panvel.
          </p>
        </div>

        <div className="chips" role="group" aria-label="Filter properties">
          <button
            type="button"
            className="chip"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className="chip"
            aria-pressed={filter === "Buy"}
            onClick={() => setFilter("Buy")}
          >
            Buy
          </button>
          <button
            type="button"
            className="chip"
            aria-pressed={filter === "Rent"}
            onClick={() => setFilter("Rent")}
          >
            Rent
          </button>
        </div>

        <div className="props" id="props">
          {filtered.map((x) => {
            const u = `https://images.unsplash.com/${x.i}?auto=format&fit=crop&w=800&q=75`;
            const m = encodeURIComponent(
              `Hi Raj Enterprises, I am interested in: ${x.n}, ${x.l} (${x.p}${x.s || ""}). Please share details.`
            );

            return (
              <article key={x.n} className="prop">
                <div className="im">
                  <img loading="lazy" src={u} alt={x.n} />
                  <span className={`tag${x.t === "Rent" ? " rent" : ""}`}>
                    For {x.t.toLowerCase()}
                  </span>
                </div>
                <h3>{x.n}</h3>
                <div className="loc">
                  <IconPin className="i" />
                  {x.l}
                </div>
                <div className="specs">
                  {x.b > 0 && (
                    <span>
                      <IconBed className="i" />
                      {x.b} bed
                    </span>
                  )}
                  <span>
                    <IconRulerMeasure className="i" />
                    {x.a}
                  </span>
                  <span>{x.tx}</span>
                </div>
                <div className="pr">
                  <div>
                    <b>{x.p}</b> <small>{x.s || ""}</small>
                  </div>
                  <a
                    href={`https://wa.me/919136840554?text=${m}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire <IconArrowRight className="i" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="note">
          <span>
            Sample listings shown. Availability and prices change fast, so call
            for the latest.
          </span>
          <a className="btn ghost" href="tel:+919136840554">
            <IconPhone className="i" />
            Ask for today’s list
          </a>
        </div>
      </div>
    </section>
  );
}
