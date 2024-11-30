import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  console.log(error, data, pending);

  return (
    <div>
      <h1>use fetch hook</h1>
      {pending ? <h1>Loading...</h1> : null}
      {error ? <h1>{error}</h1> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <h3 key={item.key}>{item.title}</h3>)
        : null}
    </div>
  );
}
