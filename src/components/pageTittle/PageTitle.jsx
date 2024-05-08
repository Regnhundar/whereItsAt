import "./pageTitle.css";

function PageTitle({ title = "Default title", subtitle }) {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      {subtitle && <h2 className="page-subtitle">{subtitle}</h2>}
    </>
  );
}

export default PageTitle;
