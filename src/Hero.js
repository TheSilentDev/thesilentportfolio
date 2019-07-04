import React from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <div className={css(styles.hero_layout)}>
      <div className={css(styles.hero_content)}>
      <div>
        Hi! <br /> I'm Zach. <br />
        I <span style={{color: "#03A9F4"}}>React</span> to <span style={{color: "#FF5252"}}>Node</span> <br /> </div> 
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
    marginTop: "100px",
    position: "relative",
    borderBottom: "1px solid rgba(0,0,0, 0.05)"
  },
  hero_content: {
    margin: "auto auto auto 15%",
    fontFamily: "'B612 Mono', monospace",
    fontSize: "3rem",
    color: "rgba(0,0,0,0.8)",
    fontWeight: 700,
    lineHeight: "1.3",
    "@media (max-width: 600px)": {
      margin: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center"
    }
  },
  hero_social_layout: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: 25,
    bottom: 0,
    margin: "auto 0",
    "@media (max-width: 600px)": {
      display: "none"
    }
  },
  hero_social_items: {
    padding: "12px",
    fontSize: "1.2em",
    color: "#000"
  }
});

export default Hero;
