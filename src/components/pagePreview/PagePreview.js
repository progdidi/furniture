import "./pagePreview.scss";

const PagePreview = ({ title, descr }) => {
  return (
    <section className="page-preview">
      <h3 className="page-preview__title">{title}</h3>
      <p className="page-preview__descr">{descr}</p>
    </section>
  );
};

export default PagePreview;
