import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div>
      {data.map((item) => (
        <AccordionItem
          num={data.indexOf(item) + 1}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [open, setOpen] = useState(false);

  function clickHandle() {
    setOpen(!open);
    console.log(open);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={clickHandle}>
      <p className="num">{num}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={clickHandle}>
        {open ? "-" : "+"}
      </p>
      <div
        className="content-box"
        style={open === true ? { display: "none" } : {}}
      >
        {text}
      </div>
    </div>
  );
}
