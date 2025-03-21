function ContactDetail({ href, detailContent, detailType }) {
  return (
    <p className="detail">
      {detailType}:{" "}
      <a href={href} target="_blank">
        {detailContent}
      </a>
    </p>
  );
}

export default ContactDetail;
