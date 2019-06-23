import React from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <div className={css(styles.hero_layout)}>
      <div className={css(styles.hero_content)}>
        Hi! <br /> I'm Zach. <br /> I React to Node <br />
      </div>
      <div className={css(styles.hero_social_layout)}>
        <FontAwesomeIcon
          className={css(styles.hero_social_items)}
          icon={["fab", "facebook-f"]}
        />
        <FontAwesomeIcon
          className={css(styles.hero_social_items)}
          icon={["fab", "twitter"]}
        />
        <FontAwesomeIcon
          className={css(styles.hero_social_items)}
          icon={["fab", "instagram"]}
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  hero_layout: {
    height: "40vh",
    position: "relative",
    marginTop: "100px",
    borderBottom: "1px solid rgba(0,0,0, 0.05)"
  },
  hero_content: {
    margin: "auto auto auto 15%",
    fontFamily: "'B612 Mono', monospace",
    fontSize: "3em",
    color: "#000",
    fontWeight: 700,
    lineHeight: "1.3"
  },
  hero_social_layout: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: 25,
    bottom: 0,
    margin: "auto 0"
  },
  hero_social_items: {
    padding: "12px",
    fontSize: "1.2em",
    color: "#000"
  }
});

export default Hero;
