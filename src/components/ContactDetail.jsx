import { MdContentCopy } from "react-icons/md";

export function ContactDetail({ href, detailContent, detailType }) {
  return (
    <p className="detail detailAnim">
      {detailType}:{" "}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {detailContent}
      </a>
      {detailType === "email" && (
        <button
          onClick={() =>
            navigator.clipboard.writeText("reinisroberts.varavs2@gmail.com")
          }
        >
          <MdContentCopy className="clipboard" />
        </button>
      )}
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
