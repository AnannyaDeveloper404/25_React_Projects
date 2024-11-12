import MenuItem from "./menu-item";

export default function Menu_list({ list = [] }) {
  return (
    <ul
      className="
  menu-list-container"
    >
      {list && list.length
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
}
