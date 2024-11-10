import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [err, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      const resp = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await resp.json();
      //   if (!resp.ok) {
      //     setErrorMsg("Something went wrong");
      //   }
      if (data) {
        console.log(data);
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  useEffect(() => {
    if (url !== "") fetchImage(url);
  }, [url]);
  console.log(images);
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imagesItem, index) => (
            <img
              key={imagesItem.id}
              alt={imagesItem.download_url}
              src={imagesItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
