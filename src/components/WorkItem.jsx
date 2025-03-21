function WorkItem({ name, bg, link }) {
  const handleOpen = () => {
    window.open(`${link}`, "_blank");
  };

  return (
    <div className="workItem" onClick={() => handleOpen()}>
      <div className="workImgDiv">
        <div
          className="workWebsite workImg"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="ontopDiv">
          <h1 onClick={() => handleOpen()}>{name}</h1>
        </div>
      </div>
      <div className="workTextDiv">
        <h1 onClick={() => handleOpen()}>{name}</h1>
      </div>
    </div>
  );
}

export default WorkItem;
