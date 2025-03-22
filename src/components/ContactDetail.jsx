function ContactDetail({ href, detailContent, detailType }) {
  return (
    <p className="detail">
      {detailType}:{" "}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {detailContent}
      </a>
    </p>
  );
}

export default ContactDetail;
