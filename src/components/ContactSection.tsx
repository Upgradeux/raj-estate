"use client";

import { useState } from "react";
import {
  IconPhone,
  IconBrandWhatsapp,
  IconPin,
  IconClock,
  IconArrowRight,
} from "@tabler/icons-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [intent, setIntent] = useState("Buy a property");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const m = `Hi Raj Enterprises, I am ${name}. I want to ${intent.toLowerCase()}. Please call me on ${phone}.`;
    window.open(
      `https://wa.me/919136840554?text=${encodeURIComponent(m)}`,
      "_blank"
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div>
          <h2>Let’s find your next property.</h2>
          <p className="lead">
            Leave your details or reach us directly. We call back the same day,
            and talking costs nothing.
          </p>
          <div className="acts">
            <a className="act" href="tel:+919136840554">
              <span className="ic">
                <IconPhone className="i" />
              </span>
              <span>
                <small>Call us</small>
                <b>091368 40554</b>
              </span>
              <IconArrowRight className="i go" />
            </a>
            <a
              className="act"
              href="https://wa.me/919136840554"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ic">
                <IconBrandWhatsapp className="i" />
              </span>
              <span>
                <small>Message on WhatsApp</small>
                <b>Chat with us now</b>
              </span>
              <IconArrowRight className="i go" />
            </a>
            <div className="act">
              <span className="ic">
                <IconPin className="i" />
              </span>
              <span>
                <small>Visit our office</small>
                <b>
                  Shop No. 17, Angel Ark Building, Sector 8, Kalamboli, Panvel
                  410218
                </b>
              </span>
              <span></span>
            </div>
            <div className="act">
              <span className="ic">
                <IconClock className="i" />
              </span>
              <span>
                <small>Office hours</small>
                <b>Open daily, until 9 pm</b>
              </span>
              <span></span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} id="f">
          <h3>Request a callback</h3>
          <label>
            Your name
            <input
              type="text"
              name="n"
              required
              autoComplete="name"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Phone number
            <input
              type="tel"
              name="p"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <div className="lab">
            I want to
            <div className="opts">
              <label>
                <input
                  type="radio"
                  name="t"
                  value="Buy a property"
                  checked={intent === "Buy a property"}
                  onChange={() => setIntent("Buy a property")}
                />
                <span>Buy</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="t"
                  value="Sell a property"
                  checked={intent === "Sell a property"}
                  onChange={() => setIntent("Sell a property")}
                />
                <span>Sell</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="t"
                  value="Rent a property"
                  checked={intent === "Rent a property"}
                  onChange={() => setIntent("Rent a property")}
                />
                <span>Rent</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="t"
                  value="Lease commercial space"
                  checked={intent === "Lease commercial space"}
                  onChange={() => setIntent("Lease commercial space")}
                />
                <span>Commercial</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="t"
                  value="Get documentation help"
                  checked={intent === "Get documentation help"}
                  onChange={() => setIntent("Get documentation help")}
                />
                <span>Documentation</span>
              </label>
            </div>
          </div>
          <button className="btn pri" type="submit">
            <IconBrandWhatsapp className="i" />
            Send on WhatsApp
          </button>
          <small>Opens WhatsApp with your details filled in.</small>
        </form>
      </div>
    </section>
  );
}
