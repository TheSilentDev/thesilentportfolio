import React from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PRIMARY_FONT } from "./CommonStyles";

export default function Navigation(props) {
  return (
    <div className={css(styles.navigation)}>
      <div className={css(styles.navigation_toggler)}>
        <FontAwesomeIcon
          onClick={() => props.toggle(false)}
          size={"2x"}
          icon={"times"}
        />
      </div>
      <Link to="/">
        <div
          onClick={() => props.toggle(false)}
          className={css(styles.navigation_item)}
        >
          HOME
        </div>
      </Link>
      <Link to="/portfolio">
        <div
          onClick={() => props.toggle(false)}
          className={css(styles.navigation_item)}
        >
          PORTFOLIO
        </div>
      </Link>
      <a href="https://tsdinteractive.com">
        <div
          onClick={() => props.toggle(false)}
          className={css(styles.navigation_item)}
        >
          BLOG
        </div>
      </a>

      <Link to="/contact">
        <div
          onClick={() => props.toggle(false)}
          className={css(styles.navigation_item)}
        >
          CONTACT
        </div>
      </Link>
    </div>
  );
}

const styles = StyleSheet.create({
  navigation: {
    width: "100vw",
    height: "100vh",
    background: "#fff",
    zIndex: "1000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  navigation_item: {
    fontFamily: PRIMARY_FONT,
    width: "400px",
    textAlign: "center",
    padding: "20px",
    margin: "8px",
    fontSize: "32px",
    ":hover": {
      fontSize: "26px",
      background: "#000",
      color: "#fff",
      "-webkit-animation": "fadein 1s" /* Safari, Chrome and Opera > 12.1 */,
      "-moz-animation": "fadein 1s" /* Firefox < 16 */,
      " -ms-animation": "fadein 1s" /* Internet Explorer */,
      "-o-animation": "fadein 1s" /* Opera < 12.1 */,
      animation: "fadein 1s"
    }
  },
  navigation_toggler: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "25px 35px 0 0"
  }
});
