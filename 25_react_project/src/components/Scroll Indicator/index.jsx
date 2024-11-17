import { useEffect, useState } from "react";
import "./styles.css";
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const resp = await fetch(getUrl);
      const data = await resp.json();
      //   console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      //   console.log(error);
      setErr(error);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  function handleScrollPercentage() {
    const scrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scrollHeight / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  //   console.log(data, loading);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (err) {
    return <div>There is some err</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
