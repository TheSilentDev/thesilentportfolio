import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./Navigation";
import { PRIMARY_FONT } from "./CommonStyles";

export default function() {
  const [open, setOpen] = useState(false);

  function toggle(state) {
    setOpen(state);
  }
  const times = (
    <FontAwesomeIcon size={"2x"} onClick={() => toggle(true)} icon="bars" />
  );

  if (open) {
    return <Navigation toggle={toggle} />;
  } else {
    return (
      <div className={css(styles.navbar)}>
        <div className={css(styles.logo)}>
          <Link to="/">
            {" "}
            the<span style={{ fontWeight: "bold" }}>silent</span>dev
          </Link>
        </div>
        <div>
          <div>{times}</div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    padding: "25px 35px",
    // boxShadow: "0 8px 6px -6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontFamily: PRIMARY_FONT,
    fontSize: "32px"
  }
});
