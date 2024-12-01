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
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/Scroll Indicator";
import TabTest from "./components/custom-tabs/Tab-test";
import Model_Test from "./components/custom-modal-pop/modal-test";
import GithubProfileFinder from "./components/GitHub_Profile_Finder";
import SearchAutoComplete from "./components/search-autocomplete";
import TicTacToe from "./components/Tic-tac-toe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/useFetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAnfBottom from "./components/ScrollToTopAndBottom";
import ScrollToSection from "./components/ScrollToTopAndBottom/ScrollToSection";
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
      {/* <LightDarkMode /> */}
      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* Custom tabs component */}
      {/* <TabTest /> */}
      {/* Custom modal component */}
      {/* <Model_Test /> */}
      {/* Github profile fetch */}
      {/* <GithubProfileFinder /> */}
      {/* Search auto complete */}
      {/* <SearchAutoComplete /> */}
      {/* Tic tac toe */}
      {/* <TicTacToe /> */}
      {/* Feature flag implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* useFetch -custom Hook */}
      {/* <UseFetchHookTest /> */}
      {/* Use onclick outside */}
      {/* <UseOnClickOutsideTest /> */}
      {/* Use window resize  */}
      {/* <UseWindowResizeTest /> */}
      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAnfBottom /> */}
      {/* Scroll to a particular section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
