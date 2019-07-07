import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextLoop from "react-text-loop";
import "./home.css";
import {
  PRIMARY_FONT,
  SECONDARY_FONT,
  PROJECT_NAME_COLOR,
  PROJECT_LINK_COLOR
} from "./CommonStyles";

const backEndSkills = ["NODE", "AWS", "FIREBASE"];

class Home extends Component {
  constructor() {
    super();
    this.state = { skillsIndex: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIndex = this.state.skillsIndex;
      this.setState({ skillsIndex: currentIndex + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let skillSet = backEndSkills[this.state.skillsIndex % backEndSkills.length];
    return (
      <>
        <div className={css(styles.page_name)}>INTRODUCTION</div>
        <div className={css(styles.container)}>
          <div className={css(styles.home)}>
            <div className={css(styles.skillSet)}>
              I <span style={{}}>REACT </span> TO{" "}
              <TextLoop>
                <span style={{ color: PROJECT_NAME_COLOR }}>NODE</span>
                <span style={{ color: "#ff9900" }}>AWS</span>
                <span style={{ color: "#FFA611" }}>FIREBASE</span>
              </TextLoop>
            </div>

            <div className={css(styles.introduction)}>
              Full Stack Js Developer
            </div>

            <div className={css(styles.social_links)}>
              <a href={"https://github.com/TheSilentDev"}>
                <FontAwesomeIcon
                  size={"2x"}
                  className={css(styles.social_items)}
                  icon={["fab", "github"]}
                />
              </a>
              <a href={"https://twitter.com/thesilentdev_me"}>
                <FontAwesomeIcon
                  size={"2x"}
                  className={css(styles.social_items)}
                  icon={["fab", "twitter"]}
                />
              </a>
              <a href={"https://www.instagram.com/thesilentdev/"}>
                <FontAwesomeIcon
                  size={"2x"}
                  className={css(styles.social_items)}
                  icon={["fab", "instagram"]}
                />
              </a>
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
    marginRight: "auto"
  },
  page_name: {
    position: "fixed",
    right: 0,
    top: "50%",
    transformOrigin: "50% 50%",
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
  home: {
    display: "flex",
    position: "relative",
    marginTop: "50px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
    border: "7px solid rgba(0,0,0,1)",
    "@media all and (max-width: 575px)": {
      border: "none",
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-around"
    }
  },

  skillSet: {
    position: "absolute",
    fontSize: "26px",
    top: 0,
    left: 0,
    marginTop: "-24px",
    marginLeft: "-10px",
    fontWeight: "bold",
    padding: "10px",
    background: "#f5f5f5",
    fontFamily: PRIMARY_FONT,
    "@media all and (max-width: 575px)": {
      position: "relative"
    }
  },
  introduction: {
    display: "flex",
    flexDirection: "row",
    fontSize: "44px",
    fontFamily: PRIMARY_FONT,
    letterSpacing: 7,
    "@media all and (max-width: 575px)": {
      textAlign: "center",
      lineHeight: 1.4
    }
  },
  social_links: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginBottom: "-25px",
    marginRight: "-20px",
    background: "#f5f5f5",
    padding: "15px",
    "@media all and (max-width: 575px)": {
      position: "relative"
    }
  },
  social_items: {
    margin: "0 10px"
  }
});
export default Home;
