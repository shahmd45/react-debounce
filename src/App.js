import "./styles.css";

export default function App() {
  function debounce(fn, d) {
    let timer;
    return function (...args) {
      if (timer) clearInterval(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, d);
    };
  }

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const debounceHandleChange = debounce(handleChange, 1000);

  return (
    <div className="App">
      <input type="text" onChange={debounceHandleChange} />
    </div>
  );
}
