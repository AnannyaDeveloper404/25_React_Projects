import { useContext } from "react";
import Accordian from "../accordian";
import RandomColor from "../Color_Code";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../Tic-tac-toe";
import Tree_View from "../Tree-View";
import { FeatureFlagsContext } from "./context";

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);
  // console.log({ loading, enableFlags }); //
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },

    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },

    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },

    {
      key: "showAccordian",
      component: <Accordian />,
    },

    {
      key: "showTreeView",
      component: <Tree_View />,
    },
  ];
  function checkEnabledFlags(currKey) {
    return enableFlags[currKey];
  }
  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>Feature Flags</h1>

      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
