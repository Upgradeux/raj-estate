"use client";

import Link from "next/link";
import { IconPhone, IconStarFilled, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <h1 id="h1">
            Find the right home in Panvel. Without the runaround.
          </h1>
          <p className="lead rise d1">
            Raj Enterprises helps families buy, sell and rent property across
            Kalamboli, Panvel and Navi Mumbai. Straight answers, verified
            listings, paperwork done on time.
          </p>
          <div className="cta rise d2">
            <Link className="btn pri" href="#contact">
              Get a free consultation
            </Link>
            <a className="btn ghost" href="tel:+919136840554">
              <IconPhone className="i" />
              91368 40554
            </a>
          </div>
          <div className="proof rise d3">
            <div className="stars">
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
              <IconStarFilled className="i" />
            </div>
            <span>Rated 4.8 by 64 clients on Google</span>
          </div>
        </div>

        <div className="vis rise d1">
          <img
            className="v1"
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80"
            alt="Modern family home with a garden"
          />
          <motion.img
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="v2"
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=75"
            alt="Bright living room interior"
          />
         
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 1,
            }}
            className="vc"
          >
            <span className="new">New listing</span>
            <h3>2 BHK, Sector 8</h3>
            <p>Kalamboli · Ready to move</p>
            <div className="row">
              <b>₹78 Lakh</b>
              <Link href="#properties">
                View{" "}
                <IconArrowRight
                  className="i"
                  style={{ width: 15, height: 15 }}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
