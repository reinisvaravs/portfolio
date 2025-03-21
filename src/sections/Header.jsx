function Header({ onWorksClick, onContactClick }) {
  return (
    <header>
      <div className="name">
        <p>Reinis Vāravs</p>
        <p className="headerProf">Full stack web Developer</p>
      </div>
      <nav>
        <ul>
          <li>
            <button className="throughWhite" onClick={onWorksClick}>
              works,
            </button>
          </li>
          <li>
            <button className="throughWhite" onClick={onContactClick}>
              contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
