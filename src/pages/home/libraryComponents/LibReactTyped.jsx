import { ReactTyped } from "react-typed";
const LibReactTyped = () => {
  return (
    <div style={{ fontSize: "24px", fontFamily: "monospace" }}>
      <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
      <ReactTyped
        strings={["Search for products", "Search for categories", "Search for brands"]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        // loop
      >
        <input type="text" />
      </ReactTyped>
    </div>
  );
};

export default LibReactTyped;
