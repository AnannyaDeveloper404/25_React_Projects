import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/Color_Code";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/Image_Slider";
import LoadMoreData from "./components/Load_More_Data";
import Tree_View from "./components/Tree-View";
import { menus } from "./components/Tree-View/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark mode";
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
      {/* Load more data */}
      {/* <LoadMoreData /> */}
      {/* Tree View component */}
      {/* <Tree_View menus={menus} /> */}
      {/* QR Code generator */}
      {/* <QRCodeGenerator /> */}
      {/* Light Dark mode theme */}
      <LightDarkMode />
    </div>
  );
}

export default App;
