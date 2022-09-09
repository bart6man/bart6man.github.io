import React from "react";
import Header from "../components/Header";
import Message from "../components/Contacts";

export default function Contacts() {
  return (
    <>
      <Header />

      <div className="contact-content">
        <div className="contact-container">
          <Message />
        </div>
      </div>
    </>
  );
}
