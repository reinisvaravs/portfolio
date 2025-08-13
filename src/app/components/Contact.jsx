import "../styles/contacts.css";
import { IconDetail } from "../components/ContactDetail";

const Contact = () => {
  return (
    <section className="contactsSection">
      <IconDetail
        href="https://github.com/reinisvaravs/"
        icon="/icons/social/github.svg"
        name="Github"
        styles="githubIcon"
      />
      <IconDetail
        href="mailto:rr.varavs@gmail.com"
        detailContent="rr.varavs@gmail.com"
        detailType="email"
        icon="/icons/social/email.svg"
        name="Email"
        styles="githubIcon"
      />
    </section>
  );
};

export default Contact;
