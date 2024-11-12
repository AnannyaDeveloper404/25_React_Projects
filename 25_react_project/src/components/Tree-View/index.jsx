import Menu_list from "./menu-list";

const Tree_View = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <Menu_list list={menus} />
    </div>
  );
};

export default Tree_View;
