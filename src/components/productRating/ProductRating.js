import star from "./star.svg";

const ProductRating = () => {
  return (
    <div className="product-rating">
      <div className="product-rating__img">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.30198L9.53708 4.99757C9.68109 5.34381 10.0067 5.58038 10.3805 5.61034L14.3702 5.9302L11.3305 8.53405C11.0457 8.77801 10.9213 9.16078 11.0083 9.52554L11.937 13.4188L8.52125 11.3325C8.20124 11.137 7.79876 11.137 7.47875 11.3325L4.063 13.4188L4.99169 9.52554C5.0787 9.16078 4.95433 8.778 4.66954 8.53405L1.6298 5.9302L5.61951 5.61034C5.9933 5.58038 6.31891 5.34381 6.46292 4.99757L8 1.30198Z"
            stroke="#6C7275"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductRating;
