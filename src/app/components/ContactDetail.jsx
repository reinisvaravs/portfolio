import "../styles/contacts.css";

export function IconDetail({ href, icon, name, styles }) {
  return (
    <a
      className="contactIconDiv"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={styles} src={icon} />
      <p>{name}</p>
    </a>
  );
}
