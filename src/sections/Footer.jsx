function Footer({ onWorksClick, onAboutClick, onContactClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="authorDiv">
        <p className="author">
          <span>{currentYear}</span> Reinis R. Vāravs
        </p>
      </div>
      <div className="footerButtons">
        <ul>
          <li>
            <button className="throughWhite" onClick={onWorksClick}>
              works,
            </button>
          </li>
          <li>
            <button className="throughWhite" onClick={onAboutClick}>
              about,
            </button>
          </li>
          <li>
            <button className="throughWhite" onClick={onContactClick}>
              contact
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
