import "../styles/contacts.css";
import { ContactDetail, IconDetail } from "../components/ContactDetail";

const Contact = () => {
  return (
    <section className="contactsSection">
      <div className="contactsContainer">
        <h4 className="contactsHeading">contact.</h4>
        <p className="subHeading">
          Feel free to reach out! Text, DM or send me an email.
        </p>
        <div className="emailDiv">
          <ContactDetail
            href="tel:+371 28816633"
            detailContent="+371 28816633"
            detailType="phone"
          />
          <ContactDetail
            href="mailto:rr.varavs@gmail.com"
            detailContent="rr.varavs@gmail.com"
            detailType="email"
          />
          <div className="IconDetailDiv">
            <IconDetail
              href="https://www.instagram.com/reinisvaravs/"
              icon="/assets/instagram.webp"
              name="Instagram"
            />
            <IconDetail
              href="https://github.com/reinisvaravs/"
              icon="/assets/github.svg"
              name="Github"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
