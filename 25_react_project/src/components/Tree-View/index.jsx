import Menu_list from "./menu-list";
import "./styles.css";
const Tree_View = ({ menus = [] }) => {
  return (
    <div
      className="
  tree-view-container"
    >
      <Menu_list list={menus} />
    </div>
  );
};

export default Tree_View;
