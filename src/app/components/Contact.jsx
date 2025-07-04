import "../styles/contacts.css";
import { ContactDetail, IconDetail } from "../components/ContactDetail";

const Contact = () => {
  return (
    <section className="contactsSection">
      <div className="contactsContainer">
        <h4 className="contactsHeading">contact.</h4>
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
              icon="/icons/social/instagram.svg"
              name="Instagram"
              styles="instagramIcon"
            />
            <IconDetail
              href="https://github.com/reinisvaravs/"
              icon="/icons/social/github.svg"
              name="Github"
              styles="githubIcon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
