import JsArray from "./JsArray";
import JsDasar from "./JsDasar";
import JsNumber from "./JsNumber";
import JsString from "./JsString";

const JsBasic = () => {
  return (
    <article>
      <h2>JsBasic</h2>
      <ul className="list-inside list-disc">
        <li>data types: (string, number, boolean, undefined, null, symbol, object (array, function, date))</li>
        <li>variable (let, const, var); falsy (0,emptyString,null,,undefined,NaN), truthy</li>
        <li>language (computer language, programming language, human language)</li>
        <li>unicode, excape character, regex; compiler vs interpreter</li>
        <li>cari tahu istilah istilah di atas dan perbedaannya</li>
        <li>
          <b>dasar</b>
          <JsDasar />
        </li>
        <li>
          <b>string</b>
          <JsString />
        </li>
        <li>
          <b>array</b>
          <JsArray />
        </li>
        <li>
          <b>number</b>
          <JsNumber />
        </li>
      </ul>
    </article>
  );
};

export default JsBasic;
