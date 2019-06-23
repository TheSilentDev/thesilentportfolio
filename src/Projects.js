import React from "react";
import { StyleSheet, css } from "aphrodite";

class Projects extends React.Component {
  render() {
    return (
      <> 
        <div style={{ marginTop: "75px" }} className={css(styles.container)}>
          <div className={css(styles.project_menu)}>
            <div className={css(styles.project_menu_item)}>
              All
              <span className={css(styles.project_menu_item_amount)}>20</span>
            </div>
            <div className={css(styles.project_menu_item)}>
              REACT
              <span className={css(styles.project_menu_item_amount)}>10</span>
            </div>
            <div className={css(styles.project_menu_item)}>
              NodeJs
              <span className={css(styles.project_menu_item_amount)}>6</span>
            </div>
            <div
              className={css(
                styles.project_menu_item,
                styles.project_menu_item_active
              )}
            >
              GraphQL
              <span className={css(styles.project_menu_item_amount)}>3</span>
            </div>
            <div className={css(styles.project_menu_item)}>
              REACT-NATIVE
              <span className={css(styles.project_menu_item_amount)}>1</span>
            </div>
          </div>
        </div>
        <div className={css(styles.container)}>
          <div className={css(styles.item)} style={{ background: "#ff5252" }}>
            <div className={css(styles.item_content)}>
              stack<span style={{ fontWeight: "bold" }}>worth</span>
            </div>
          </div>
          <div className={css(styles.item)} style={{ background: "#40c4ff" }}>
            <div className={css(styles.item_content)}>
              match<span style={{ fontWeight: "bold" }}>viewer</span>
            </div>
          </div>
          <div className={css(styles.item)} style={{ background: "#00e676" }}>
            <div className={css(styles.item_content)}>
              insta<span style={{ fontWeight: "bold" }}>graphs</span>
            </div>
          </div>
          {/*<div className={css(styles.item)} style={{ background: "yellow" }}>*/}
          {/*  Yellow*/}
          {/*</div>*/}
          {/*<div className={css(styles.item)} style={{ background: "green" }}>*/}
          {/*  Green*/}
          {/*</div>*/}
          {/*<div className={css(styles.item)} style={{ background: "blue" }}>*/}
          {/*  Blue*/}
          {/*</div>*/}
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "960px",
    paddingRight: "10px",
    paddingLeft: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  project_menu: {
    fontFamily: "'B612 Mono', monospace",
    fontSize: "1.2em",
    color: "#000",
    marginBottom: "50px",
    display: "flex",
    flexDirection: "row"
  },
  project_menu_item: {
    marginRight: "25px",
    position: "relative",
    boxSizing: "border-box",
    padding: "15px"
  },
  project_menu_item_active: {
    // borderBottom: "4px solid #aa00ff",
    paddingBottom: "5px",
    fontWeight: 900
  },
  project_menu_item_amount: {
    position: "absolute",
    top: "0",
    color: "#aa00ff",
    padding: "5px"
  },
  item: {
    flex: "0 0 32%",
    height: "300px",
    marginBottom: "10px",
    position: "relative"
  },
  item_content: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "1.3em",
    fontFamily: "'B612 Mono', monospace"
  }
});

export default Projects;
