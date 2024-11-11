import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/Color_Code";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/Image_Slider";
import LoadMoreData from "./components/Load_More_Data";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}
      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star-rating */}
      {/* <StarRating noOfStars={10} /> */}
      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
