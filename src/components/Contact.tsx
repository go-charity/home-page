import React from "react";
import css from "@/styles/Contact.module.scss";
import { ExternalLink, SocialLink } from "@/utils/utils";
import { Button, TextField } from "@mui/material";

const socialLinks: SocialLink[] = [
  new SocialLink("Linkedin", "fa-brands fa-linkedin-in", "http://linkedin.com"),
  new SocialLink("Facebook", "fa-brands fa-facebook-f", "http://facebook.com"),
  new SocialLink("Twitter", "fa-brands fa-twitter", "http://twitter.com"),
  new SocialLink("Instagram", "fa-brands fa-instagram", "http://instagram.com"),
];

const externalLinks: ExternalLink[] = [
  new ExternalLink(
    "Email",
    "onukwilip@gmail.com",
    "fa-regular fa-envelope",
    "mailto:onukwilip@gmail.com"
  ),
  new ExternalLink(
    "Phone",
    "+234 916 857 2271",
    "fa-solid fa-mobile-button",
    "tel:09168572271"
  ),
];

const Contact = () => {
  return (
    <div className={css.contact} id="contact">
      <iframe
        src={
          "https://maps.google.com/maps?q=" +
          "6.58711616881805" +
          "," +
          "3.25529775582557" +
          "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        }
        width="600"
        height="450"
        style={{ border: 0 }}
        className={css.map}
        loading="lazy"
        {...{ referrerpolicy: "no-referrer-when-downgrade" }}
        title="map"
      ></iframe>
      <div className={css["overlay"]}></div>
      <div className={css["inner-container"]}>
        <div className={css.left}>
          <span className={css.heading}>CONTACT US</span>
          <div className={css["social-container"]}>
            {socialLinks.map((eachLink) => (
              <a href={eachLink.url} target="_blank" rel="noopener noreferrer">
                <i className={eachLink.icon}></i>
              </a>
            ))}
          </div>
          <ul className={css["external-links"]}>
            {externalLinks.map((externalLink, i) => (
              <li>
                <i className={externalLink.icon}></i>
                <span className={css["content-container"]}>
                  <span className={css.title}>{externalLink.title}</span>
                  <a href={externalLink.url}>{externalLink.content}</a>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.right}>
          <form>
            <TextField
              id="filled-basic"
              label="Name"
              inputProps={{ style: { color: "#8a113c" } }}
              InputLabelProps={{ style: { color: "#8a113c" } }}
              sx={{
                backgroundColor: "#fff1f3",
              }}
              placeholder="Enter your name..."
              variant="filled"
              className={css.input}
            />
            <TextField
              id="filled-basic"
              label="Email"
              inputProps={{ style: { color: "#8a113c" } }}
              InputLabelProps={{ style: { color: "#8a113c" } }}
              sx={{
                backgroundColor: "#fff1f3",
              }}
              placeholder="Enter your email address..."
              variant="filled"
              className={css.input}
            />
            <TextField
              id="filled-basic"
              label="Subject"
              inputProps={{ style: { color: "#8a113c" } }}
              InputLabelProps={{ style: { color: "#8a113c" } }}
              sx={{
                backgroundColor: "#fff1f3",
              }}
              placeholder="Enter the message topic..."
              variant="filled"
              className={css.input}
            />
            <TextField
              id="filled-basic"
              label="Message"
              inputProps={{ style: { color: "#8a113c" } }}
              InputLabelProps={{ style: { color: "#8a113c" } }}
              sx={{
                backgroundColor: "#fff1f3",
              }}
              placeholder="Enter your message..."
              variant="filled"
              multiline
              rows={5}
              className={`${css.input} ${css.textarea}`}
            />

            <div className={css.action}>
              <Button variant="outlined" size="large" className={css.send}>
                Send!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
