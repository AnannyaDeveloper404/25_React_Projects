import useWindowSize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowSize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use Window resize Hook</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
}
