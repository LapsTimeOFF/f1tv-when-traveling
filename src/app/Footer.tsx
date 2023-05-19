import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "inherit",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <p>
        F1TV when Traveling is an unofficial tool and is not associated in any
        way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA
        FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade
        marks of Formula One Licensing BV. F1TV when Traveling is a
        non-commercial, fan-made tool.
      </p>
      <p>
        All product and company names are trademarks™ or registered® trademarks
        of their respective holders. Use of them does not imply any affiliation
        with or endorsement by them.
      </p>
      <p>
        Any product names, logos, brands, and other trademarks or images
        featured or referred to within the app are the property of their
        respective trademark holders. These trademark holders are not affiliated
        with F1TV when Traveling or its contributors. They do not sponsor or
        endorse F1TV when Traveling or any of our products.
      </p>

      <p>
        Content accessed by this app, including but not limited to images,
        audio, video, text, timing and telemetry data may be protected by
        copyright and other intellectual property laws. Before using this app,
        or any part thereof, you must ensure that you have the necessary rights
        to use the content you access. You are solely responsible for any use of
        the content you access through this app.
      </p>
    </footer>
  );
};

export default Footer;
