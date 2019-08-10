import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import {
  PRIMARY_BG_COLOR,
  PRIMARY_FONT,
  PROJECT_NAME_COLOR
} from "./CommonStyles";
import * as EmailValidator from "email-validator";

class Contact extends Component {
  state = {
    email: "",
    subject: "",
    message: "",
    sent: false,
    errors: {
      email: "",
      subject: "",
      message: ""
    }
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    EmailValidator.validate(this.state.email)
      ? this.setState({ errors: { email: "" } })
      : this.setState({
          errors: { email: "Please enter a valid e-mail address" }
        });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, subject, message } = this.state;

    if (!email) {
      return;
    }

    const data = {
      email,
      subject,
      body: message
    };

    return fetch(
      "https://jgph70bhr7.execute-api.us-east-1.amazonaws.com/prod/contact",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }
    )
      .then(response => response.json())
      .then(() => this.setState({ sent: true }))
      .then(() => this.props.history.push("/")); // parses JSON response into native JavaScript objects
  };
  render() {
    const { email, subject, message, errors, sent } = this.state;
    return (
      <>
        <div className={css(styles.page_name)}>CONNECT</div>
        <div className={css(styles.container)}>
          <div className={css(styles.form_layout)}>
            <form onSubmit={this.handleSubmit} className={css(styles.form)}>
              <div className={css(styles.form_group)}>
                <input
                  className={css(styles.form_input)}
                  name="email"
                  onChange={this.handleChange}
                  value={email}
                  type="email"
                  placeholder="Email"
                />
                <div className={css(styles.form_errors)}>{errors.email}</div>
              </div>
              <div className={css(styles.form_group)}>
                <input
                  className={css(styles.form_input)}
                  name="subject"
                  onChange={this.handleChange}
                  value={subject}
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className={css(styles.form_group)}>
                <textarea
                  className={css(styles.form_input)}
                  name="message"
                  onChange={this.handleChange}
                  value={message}
                  rows={7}
                  placeholder="Message"
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <button
                  className={css(
                    styles.form_button,
                    errors.email || !email ? styles.disabled : ""
                  )}
                >
                  SEND
                </button>
              </div>
            </form>
            {sent && (
              <div
                style={{
                  color: "#4CAF50",
                  fontWeight: "bold",
                  fontSize: "20px"
                }}
              >
                Your message has been sent successfully.
              </div>
            )}
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
  form_layout: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    width: "400px",
    "@media all and (max-width: 375px)": {
      width: "90%",
      padding: "10px"
    }
  },
  form_group: {
    position: "relative",
    margin: "15px 0"
    // borderBottom: "2px solid #000"
  },
  form_input: {
    boxSizing: "border-box",
    width: "100%",
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #000",
    fontFamily: PRIMARY_FONT,
    background: PRIMARY_BG_COLOR,
    "::placeholder": {
      fontFamily: PRIMARY_FONT
    }
  },
  form_label: {
    position: "absolute",
    padding: "7px",
    marginTop: "-15px",
    marginLeft: "10px",
    background: PRIMARY_BG_COLOR,
    fontFamily: PRIMARY_FONT,
    fontWeight: "bold"
  },
  form_errors: {
    fontSize: "14px",
    margin: "8px",
    fontFamily: PRIMARY_FONT,
    color: PROJECT_NAME_COLOR
  },
  form_button: {
    padding: "15px",
    border: "1px solid #000",
    background: "#000",
    color: "#fff",
    fontFamily: PRIMARY_FONT
  },
  disabled: {
    background: "rgba(0,0,0,0.4)",
    cursor: "not-allowed",
    border: "rgba(0,0,0,0.4)"
  }
});
export default Contact;
