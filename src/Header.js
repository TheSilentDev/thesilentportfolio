import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  const [open, setOpen] = useState(true);

  function toggle(state) {
    setOpen(state);
  }

  const MenuButton = open ? (
    <> 
      <FontAwesomeIcon onClick={() => toggle(false)} icon="bars" />
    </>
  ) : (
    <>
      <FontAwesomeIcon onClick={() => toggle(true)} icon="times" />
    </>
  );

  return (
    <div className={css(styles.navbar)}>
      <div className={css(styles.navbar_unordered_list)}>
        <div className={css(styles.logo)}>
          the<span style={{ fontWeight: "bold" }}>silent</span>dev
        </div>
        <div className={css(styles.ml_auto, styles.navbar_menu)}>
          <div className={css(styles.navbar_link)}>HOME</div>
          <div className={css(styles.navbar_link)}>PORTFOLIO</div>
          <div className={css(styles.navbar_link)}>BLOG</div>
          <div className={css(styles.navbar_link)}>CONTACT</div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  navbar: {
    padding: "10px 45px",
    boxShadow: "0 8px 6px -6px rgba(0,0,0,0.1)"
  },
  navbar_unordered_list: {
    textDecoration: "none",
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    fontFamily: "'B612 Mono', monospace",
    color: "#000"
  },
  navbar_link: {
    padding: "20px 15px",
    "@media (max-width: 600px)": {
      display: "none"
    }
  },
  mr_auto: {
    marginRight: "auto"
  },
  ml_auto: {
    marginLeft: "auto"
  },
  navbar_menu: {
    margin: "20px 0 0 auto",
    fontSize: "1em",
    display: "flex",
    fontWeight: "600",
    flexDirection: "row",
    "@media (max-width: 600px)": {
      display: "",
      color: "000"
    }
  },
  logo: {
    padding: "20px 0",
    margin: "15px 0 0 0 ",
    textAlign: "center",
    fontSize: "1.5em",
    lineHeight: "1.3",
    flexDirection: "column",
    "@media (max-width: 600px)": {
      flexDirection: "row",
      fontSize: "1em"
    },
    show: {
      display: "flex"
    },
    hide: {
      display: "hidden"
    }
  }
});
