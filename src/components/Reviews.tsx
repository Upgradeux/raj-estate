"use client";

import { useState, useEffect } from "react";
import { IconStarFilled, IconEdit } from "@tabler/icons-react";

const REVIEWS = [
  [
    "Very genuine and honest in every transaction. Mr. Amar and his brother were always available to resolve any issue.",
    "Deals and transactions",
  ],
  [
    "Professional, top-notch and timely documentation. A very good experience.",
    "Documentation",
  ],
  [
    "Knowledgeable, highly responsive, and they guided us seamlessly through our purchase.",
    "Buying a home",
  ],
];

export default function Reviews() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCur((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="rev" id="reviews">
      <div className="wrap">
        <div className="sum">
          <div className="big">4.8</div>
          <div>
            <div className="stars">
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
            </div>
            <p>Average from 64 Google reviews</p>
            <a
              className="btn dark"
              href="https://www.google.com/maps/search/?api=1&query=Raj+Enterprises+Kalamboli+Panvel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconEdit className="i" />
              Write a review
            </a>
          </div>
        </div>

        <div
          id="rv"
          className={paused ? "paused" : ""}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <h2>What clients say after the deal is done.</h2>
          <div className="slides" id="slides">
            {REVIEWS.map((r, idx) => (
              <div
                key={idx}
                className={`slide${cur === idx ? " on" : ""}`}
              >
                <div className="stars">
                  <IconStarFilled className="i" />
                  <IconStarFilled className="i" />
                  <IconStarFilled className="i" />
                  <IconStarFilled className="i" />
                  <IconStarFilled className="i" />
                </div>
                <blockquote>“{r[0]}”</blockquote>
                <cite>Verified Google review</cite>
              </div>
            ))}
          </div>

          <div className="tabs" id="tabs">
            {REVIEWS.map((r, idx) => (
              <button
                key={idx}
                type="button"
                aria-selected={cur === idx}
                onClick={() => setCur(idx)}
              >
                {r[1]}
                <small>Google review</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
