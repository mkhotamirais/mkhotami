import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Content1 = () => <>one line</>;
const Content2 = () => (
  <>
    first line <br /> second line
  </>
);
const Content3 = () => (
  <>
    first line <br /> second line <br /> third line
  </>
);

const data = [
  { title: "btn1", content: <Content1 /> },
  { title: "btn2", content: <Content2 /> },
  { title: "btn3", content: <Content3 /> },
];

export const Accordion = () => {
  return (
    <section id="accordion">
      <div>accordion</div>
      <div>Accordion Autoclose Scale Animate</div>
      {/* <AccAutocloseScale /> */}
      <p>gagal</p>
      <div>Accordion Autoclose</div>
      <AccAutoclose />
      <div>Accordion Manualclose</div>
      <AccManualclose />
      <div>Accordion Autoclose Animate</div>
      <AccAutocloseAnimate />
      <div>Accordion Manualclose Animate</div>
      <AccManualcloseAnimate />
    </section>
  );
};

// Acc Autoclose Scale // gagal

// const AccAutocloseScale = () => {
//   const [selected, setSelected] = useState(null);
//   return data.map((item, i) => (
//     <div key={i}>
//       <button onClick={() => setSelected(item.title)}>{item.title}</button>
//       <p className={`${item.title === selected ? "scale-y-100" : "scale-y-0"} origin-top transition-all duration-150`}>
//         {item.content}
//       </p>
//     </div>
//   ));
// };

// Acc Autoclose
const AccAutoclose = () => {
  const [selected, setSelected] = useState(null);
  const openSelected = (item) => (selected === item ? setSelected(null) : setSelected(item));

  return data.map((item) => (
    <div key={item.title}>
      <button
        onClick={() => openSelected(item)}
        className={`flex w-full p-2 items-center justify-between rounded border-b overflow-hidden ${
          selected === item ? "bg-cyan-500 text-white" : ""
        }`}
      >
        <span>{item.title}</span>
        <span>{selected === item ? <FaMinusCircle /> : <FaPlusCircle />}</span>
      </button>
      <p className={`p-2 border-b border-b-runded text-sm ${selected === item ? "block" : "hidden"}`}>{item.content}</p>
    </div>
  ));
};

// Acc Manualclose
const AccManualclose = () => data.map((item) => <AccManualcloseItem key={item.title} item={item} />);
const AccManualcloseItem = ({ item }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <button
        onClick={() => setSelected(!selected)}
        className={`flex w-full p-2 items-center justify-between rounded border-b overflow-hidden ${
          selected === item ? "bg-cyan-500 text-white" : ""
        }`}
      >
        <span>{item.title}</span>
        <span>{selected ? <FaMinusCircle /> : <FaPlusCircle />}</span>
      </button>
      <p className={`p-2 border-b border-b-runded text-sm ${selected ? "block" : "hidden"}`}>{item.content}</p>
    </div>
  );
};
AccManualcloseItem.propTypes;

// Acc Autoclose Animate
const AccAutocloseAnimate = () => {
  const [selected, setSelected] = useState(null);
  const handleSelected = (e, item) => {
    let target = e.target.nextElementSibling;
    const content = document.getElementsByClassName("accAutocloseAnimate");
    for (let i = 0; i < content.length; i++) content[i].style.height = 0;

    if (item === selected) {
      setSelected(null);
      target.style.height = 0;
    } else if (item !== selected) {
      setSelected(item);
      target.style.height = target.scrollHeight + "px";
    }
  };

  return data.map((item, i) => (
    <div key={i}>
      <button
        onClick={(e) => handleSelected(e, item)}
        className={`flex w-full p-2 items-center justify-between rounded border-b overflow-hidden ${
          selected === item ? "bg-cyan-500 text-white" : ""
        }`}
      >
        {item.title}
      </button>
      <p className={`accAutocloseAnimate h-0 overflow-hidden transition-all duration-500"`}>{item.content}</p>
    </div>
  ));
};

// Acc Manualclose Animate
const AccManualcloseAnimate = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (e, item) => {
    let target = e.target.nextElementSibling;
    target.classList.toggle("buka");
    if (target.classList.contains("buka")) {
      setSelected(item);
      target.style.height = target.scrollHeight + "px";
    } else {
      setSelected(null);
      target.style.height = 0;
    }
  };

  return data.map((item, i) => (
    <div key={i}>
      <button
        onClick={(e) => handleSelected(e, item)}
        className={`flex w-full p-2 items-center justify-between rounded border-b overflow-hidden ${
          selected === item ? "bg-cyan-500 text-white" : ""
        }`}
      >
        {item.title}
      </button>
      <p className={`accAutocloseAnimate h-0 overflow-hidden transition-all duration-500"`}>{item.content}</p>
    </div>
  ));
};
