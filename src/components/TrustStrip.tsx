"use client";

import { IconCheck, IconFileText, IconPhone } from "@tabler/icons-react";

export default function TrustStrip() {
  return (
    <div className="strip">
      <div className="wrap">
        <div>
          <IconCheck className="i" />
          <p>
            <b>Verified properties</b>We check ownership and papers before we
            show you anything.
          </p>
        </div>
        <div>
          <IconFileText className="i" />
          <p>
            <b>Paperwork handled</b>Agreements, registration and documentation,
            done on time.
          </p>
        </div>
        <div>
          <IconPhone className="i" />
          <p>
            <b>Reachable, always</b>Call or message us. You get a reply the same
            day.
          </p>
        </div>
      </div>
    </div>
  );
}
