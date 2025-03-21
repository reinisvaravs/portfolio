import { forwardRef } from "react";
import ContactDetail from "../components/ContactDetail";

const Contact = forwardRef((props, ref) => {
  return (
    <section className="contactsSection" ref={ref}>
      <div className="contactsContainer">
        <h4 className="contactsHeading">contact.</h4>
        <p className="subHeading">
          Get in touch with me via social media or text me.
        </p>
        <div className="emailDiv">
          <ContactDetail
            href="tel:+371 28816633"
            detailContent="+371 28816633"
            detailType="phone"
          />
          <ContactDetail
            href="https://www.instagram.com/reinisrvaravs/"
            detailContent="@reinisrvaravs"
            detailType="instagram"
          />
        </div>
      </div>
    </section>
  );
});

export default Contact;
