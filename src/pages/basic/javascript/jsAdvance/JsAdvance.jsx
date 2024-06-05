import JsClass from "./JsClass";
import JsDestructuring from "./JsDestructuring";
import JsObject from "./JsObject";
import JsPromise from "./JsPromise";
import JsPrototype from "./JsPrototype";

const JsAdvance = () => {
  return (
    <section>
      <h2>JsAdvance</h2>
      <ul className="list-inside list-disc">
        <li>
          <b>Object</b> All javascript value except primitives are objects. primitives: string, number, boolean, null,
          undefined, symbol, bigint. Property is variable inside object; Method is function inside object. <b>Class</b>{" "}
          Syntaxnya Class, tapi di belakang layar, prototype yang terjadi. tipe data apapun pasti object artinya pasti punya
          prototype. untuk membuktikannya ketik perintah berikut di console: Array.prototype; Number.prototype;
          Object.prototype; Date.prototype; dll
          <JsObject />
        </li>
        <li>
          <b>Prototype</b> konsepnya mirip dengan Class
          <JsPrototype />
        </li>
        <li>
          <JsClass />
        </li>
        <li>
          <b>Destructuring dan Rest parameter</b>
          <JsDestructuring />
        </li>
        <li>
          <b>Promise</b> adalah Object yang merepresentasikan berhasil atau gagal suatu event yang asynchronous di masa yang
          akan datang.
          <br />
          promise (fulfilled / rejected / pending) = janji (terpenuhi, ingkar, tenggat).
          <br />
          callback (resolve / reject / finally) resolve if fulfilled; reject if rejected; finally if finish pending.
          <br />
          action (then, catch)
          <JsPromise />
        </li>
      </ul>
    </section>
  );
};

export default JsAdvance;
