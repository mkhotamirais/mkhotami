import JsFnBasic from "./JsFnBasic";
import JsFnCallback from "./JsFnCallback";
import JsFnClosure from "./JsFnClosure";
import JsFnNoArrow from "./JsFnNoArrow";
import JsFnScope from "./JsFnScope";

const JsFunctions = () => {
  return (
    <article>
      <div>JsFunctions</div>
      <ul className="list-inside list-disc">
        <li>String literal (``) diganti dengan (&quot;&quot;) pada tempat tempat tertentu untuk menghindari error</li>
        <li>
          <b>basic</b>
          <JsFnBasic />
        </li>
        <li>
          <b>noArrow</b>
          <JsFnNoArrow />
        </li>
        <li>
          <b>scope</b>
          <JsFnScope />
        </li>
        <li>
          <b>closure</b>
          <JsFnClosure />
        </li>
        <li>
          <b>callback</b>
          <JsFnCallback />
        </li>
      </ul>
    </article>
  );
};

export default JsFunctions;
