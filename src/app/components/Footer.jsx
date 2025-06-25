import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="author">{currentYear} Reinis Varavs</p>
    </footer>
  );
}

export default Footer;
