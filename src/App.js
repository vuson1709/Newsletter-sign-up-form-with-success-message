/*
- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

*/

import BannerDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import BannerMobile from "./assets/images/illustration-sign-up-mobile.svg";
import IconList from "./assets/images/icon-list.svg";
import IconSuccess from "./assets/images/icon-success.svg";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmitEmail(val) {
    setEmail(val);
  }

  function handleDismissMsg() {
    setEmail("");
  }

  return (
    <div className="container">
      {email ? (
        <Success email={email} onDismissMsg={handleDismissMsg} />
      ) : (
        <>
          <Form onSubmitEmail={handleSubmitEmail} />
          <Banner />
        </>
      )}
    </div>
  );
}

function Form({ onSubmitEmail }) {
  const [elEmail, setElEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitEmail(elEmail);
  }

  return (
    <div className="text-content">
      <h1>Stay updated!</h1>
      <p> Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>
          <img src={IconList} alt="Icon List" className="icon-list" />
          <span>Product discovery and building what matters</span>
        </li>
        <li>
          <img src={IconList} alt="Icon List" className="icon-list" />
          <span>Measuring to ensure updates are a success</span>
        </li>
        <li>
          <img src={IconList} alt="Icon List" className="icon-list" />
          <span>And much more!</span>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <label className="email-label">Email address</label>
        <input
          type="text"
          placeholder="email@company.com"
          className="email-input"
          value={elEmail}
          onChange={(e) => setElEmail(e.target.value)}
        />
        <button className="btn subscribe">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

function Banner() {
  return window.screen.width > 800 ? (
    <img src={BannerDesktop} alt="Banner Desktop" className="banner-desktop" />
  ) : (
    <img src={BannerMobile} alt="Banner Mobile" className="banner-mobile" />
  );
}

function Success({ email, onDismissMsg }) {
  return (
    <div className="success">
      <img src={IconSuccess} alt="Icon Success" className="icon-success" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button className="btn dismiss" onClick={onDismissMsg}>
        Dismiss message
      </button>
    </div>
  );
}
