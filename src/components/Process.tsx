"use client";

import {
  IconPhone,
  IconPin,
  IconFileText,
  IconCheck,
  IconKey,
} from "@tabler/icons-react";

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="head">
          <h2>From first call to keys in hand, in three steps.</h2>
          <p>No jargon, no pressure. You always know what happens next.</p>
        </div>

        <div className="bento">
          <div className="bt">
            <div className="top">
              <span className="ic">
                <IconPhone className="i" />
              </span>
              <span className="n">Step 1</span>
            </div>
            <h3>Tell us what you want</h3>
            <p>
              A short call is enough. Share your budget, preferred area and the
              size you need.
            </p>
            <div className="foot">
              <IconCheck className="i" />
              Takes about 10 minutes
            </div>
          </div>

          <div className="bt">
            <div className="top">
              <span className="ic">
                <IconPin className="i" />
              </span>
              <span className="n">Step 2</span>
            </div>
            <h3>Visit the best matches</h3>
            <p>
              We shortlist only what fits, and come with you to every site visit.
            </p>
            <div className="foot">
              <IconCheck className="i" />
              Only verified properties
            </div>
          </div>

          <div className="bt s3">
            <div className="top">
              <span className="ic">
                <IconFileText className="i" />
              </span>
              <span className="n">Step 3</span>
            </div>
            <h3>Close with confidence</h3>
            <p>
              We handle the agreement, registration and handover for you.
            </p>
            <div className="foot">
              <IconCheck className="i" />
              Paperwork done on time
            </div>
          </div>

          <div className="bt p">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
              alt="Agent handing over house keys"
              loading="lazy"
            />
            <div className="cap">
              <IconKey className="i" />
              <span>
                <b>Keys in hand</b>
                <small>We stay until the handover</small>
              </span>
            </div>
          </div>

          <div className="bt cta">
            <div>
              <h3>Ready to start?</h3>
              <p>Call us for a free chat about what you need.</p>
            </div>
            <a className="btn dark" href="tel:+919136840554">
              <IconPhone className="i" />
              Call 091368 40554
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
