import React from "react";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-1/2 relative flex flex-col items-center justify-center pl-5 md:pl-10 pt-10 pr-5 md:pr-10 md:border-r-2 md:border-dotted"
    >
      <div className="w-150">
        <p className="text-xl font-bold">
          Danke, dass du dir die Zeit genommen hast, meine Seite zu erkunden.{" "}
          <br />
          Interessiert an einem Austausch? Hier erreichst du mich:
        </p>
        <ContactLinks />
      </div>
    </div>
  );
};

export default Contact;
