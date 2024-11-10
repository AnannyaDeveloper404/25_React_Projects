import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
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
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length
        ? images.map((imagesItem) => (
            <img
              key={imagesItem.id}
              alt={imagesItem.download_url}
              src={imagesItem.download_url}
              className="current-image"
            />
          ))
        : null}
      <BsArrowRightCircleFill className="" />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((imagesItem) => (
              <img
                key={imagesItem.id}
                alt={imagesItem.download_url}
                src={imagesItem.download_url}
                className="current-image"
              />
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
