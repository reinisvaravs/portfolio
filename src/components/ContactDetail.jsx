export function ContactDetail({ href, detailContent, detailType }) {
  return (
    <p className="detail detailAnim">
      {detailType}:{" "}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {detailContent}
      </a>
    </p>
  );
}

export function IconDetail({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="icons">
      {icon}
    </a>
  );
}
