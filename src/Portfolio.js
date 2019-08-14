import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import "html5-device-mockups";
import "./portfolio.css";
import samplepic from "./macmockup.png";
import {
  PRIMARY_FONT,
  PRIMARY_BG_COLOR,
  PRIMARY_TEXT_COLOR,
  PROJECT_NAME_COLOR,
  PROJECT_LINK_COLOR
} from "./CommonStyles";

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className={css(styles.page_name)}>WORK</div>
        <div className={css(styles.container)}>
          <div className={css(styles.project)}>
            <div className={css(styles.project_description)}>
              <div className={css(styles.project_name)}>
                This will be updated soon.
              </div>
            </div>
            <div className={css(styles.project_link)}>
              <span
                style={{ color: "#000", fontSize: "14px", fontWeight: "bold" }}
              >
                CHECK OUT MY GITHUB, IN THE MEANWHILE:{" "}
              </span>{" "}
              <a href={"https://github.com/thesilentdev"}>TheSilentDev</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    "@media all and (max-width: 575px)": {
      width: "100%",
      margin: 0
    }
  },
  page_name: {
    position: "fixed",
    right: 0,
    top: "50%",
    transformOrigin: "0 0",
    transform: "rotate(90deg)",
    fontWeight: "bold",
    fontFamily: "'Comfortaa', cursive",

    "@media all and (max-width: 575px)": {
      display: "none"
    },
    "@media all and (max-width: 768px)": {
      display: "none"
    },
    "@media all and (max-width: 1199px)": {
      display: "none"
    }
  },
  project: {
    height: "500px",
    display: "flex",
    position: "relative",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottom: "5px solid #000",
    "@media all and (max-width: 768px)": {
      height: "auto",
      flexDirection: "column",
      border: 0,
      padding: "0 25px"
    }
  },
  project_name: {
    fontSize: "25px",
    padding: "20px",
    fontFamily: PRIMARY_FONT,
    color: "#fff",
    background: "#000",
    "@media all and (max-width: 768px)": {
      position: "relative",
      transform: "none",
      margin: 0,
      top: 0,
      padding: "15px",
      fontSize: "22px",
      fontWeight: "bold"
    }
  },
  project_link: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: "-20px",
    marginRight: "100px",
    fontSize: "18px",
    padding: "10px",
    fontFamily: PRIMARY_FONT,
    background: PRIMARY_BG_COLOR,
    color: PROJECT_LINK_COLOR,
    "@media all and (max-width: 768px)": {
      position: "relative",
      transform: "none",
      margin: 0,
      fontSize: "16px"
    }
  },
  project_description: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 50px",
    "@media all and (max-width: 768px)": {
      width: "100%",
      padding: 0
    }
  },
  project_description_content: {
    fontFamily: PRIMARY_FONT,
    fontSize: "25px",
    lineHeight: 1.83,
    letterSpacing: "-.7px",
    color: PRIMARY_TEXT_COLOR
  },
  project_image_layout: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media all and (max-width: 768px)": {
      width: "100%"
    }
  },
  project_image: {
    width: "100%",
    height: "400px"
  },
  project_alt: {
    height: "500px",
    display: "flex",
    position: "relative",
    justifyContent: "space-around",
    flexDirection: "row-reverse",
    borderBottom: "5px solid #000",
    "@media all and (max-width: 768px)": {
      height: "auto",
      flexDirection: "column",
      border: 0,
      padding: "0 25px"
    }
  },
  project_name_alt: {
    top: 100,
    left: 0,
    fontSize: "25px",
    marginLeft: "-87px",
    padding: "20px",
    fontFamily: PRIMARY_FONT,
    transform: "rotate(-90deg)",
    background: PRIMARY_BG_COLOR,
    color: PROJECT_NAME_COLOR,
    "@media all and (max-width: 768px)": {
      position: "relative",
      transform: "none",
      margin: 0,
      top: 0,
      padding: "15px 0",
      fontSize: "24px",
      fontWeight: "bold"
    }
  },
  project_link_alt: {
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: "-20px",
    marginLeft: "100px",
    fontSize: "18px",
    padding: "10px",
    fontFamily: PRIMARY_FONT,
    background: PRIMARY_BG_COLOR,
    color: PROJECT_LINK_COLOR,
    "@media all and (max-width: 768px)": {
      position: "relative",
      transform: "none",
      margin: 0,
      fontSize: "16px"
    }
  }
});
export default Portfolio;
