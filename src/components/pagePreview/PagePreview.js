import "./pagePreview.scss";

const PagePreview = ({ title, descr, bgImage }) => {
  return (
    <section className="page-preview" >
      <div className="container">
        <div className="page-preview__inner" style={{ backgroundImage: `url(${bgImage})` }}>
          <h3 className="page-preview__title">{title}</h3>
          <p className="page-preview__descr">{descr}</p>
        </div>
      </div>
      
    </section>
  );
};

export default PagePreview;
