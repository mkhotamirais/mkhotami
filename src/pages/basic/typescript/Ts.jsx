const Ts = () => {
  return (
    <div>
      <div>ts</div>
      <div>
        <h2 className="font-medium">pendahuluan</h2>
        <p>
          typescript is a programming language to address shortcomings of javascript. js like a kid without any dicipline who
          does whatever he or she wants. ts is like a kid with some dicipline. ts i programming language build on top of js.
          every js file is a valid ts file. ts add some cool features to js.
          <b>benefits:</b> static typing, code completion, refactoring, shorthand notations; there are two types of
          programming languages, statically typed and dinamically typed. in statically type languages like c++, c#, java.
          when declare a variable of type integer and this variable can only integer values nothing else, we cannot set it
          into string or another type of object. in dinamically type languages like js python and ruby the type of variables
          is dinamic. so it is determined at runtime and it can also change so we can declare a variable set it to a number
          and then leter on change it to a string. this variable does not have a fixed or a static type. the type is
          determined and may change at runtime. it gives us a lot of flexibility but it can also lead to problems. what if we
          pass this variable to a function that expect a number. then our app might misbehave or crash. the broble is that we
          will not know about these issues until we run our app or our unit test. assuming that we have then in place so we
          have to test every function with various edge cases to cache these bugs. this is the problem that ts tries to
          solve. ts is essentially js with type checking. with ts w explisitly set the type of our variables upon declaration
          just like how we code in staticly typed languages. then we pass our code to the ts compiler and the compiler will
          thell us if we are doing something wrong. ts is more than just type checking. most code editors these days have
          great support of ts. so they can detect the type of our variables and offer productivity boosting features like
          code completion and refactoring. in a nutshell ts is built on top of js and we can use it wherever we use js on the
          fe or be. anything we can do with js we can also do with ts.
          <b>drawbacks</b>: there is always a compilation step involved because at this time browsers do not unerstand ts
          code. so we have to give our code to the ts compiler to compile and translate into js this process called
          transpilation. second with ts we have to be a bit more deciplined when writing code. for simple app, we can totally
          get back to old vanilla js if that is what you prefer.
        </p>
        <h2 className="font-medium">pre-requisite</h2>
        <ul className="list-inslide list-disc">
          <li>downlaoad adn install nodejs then check `node -v`</li>
          <li>
            install typescript `npm i -g typescript | sudo npm i -g typescript` then check `tsc -v`. sudo is super user do
          </li>
          <li>use code editor</li>
        </ul>
        <h2 className="font-medium">begin</h2>
        <ul>
          <li>
            buat folder apa saja, lalu buat file index.ts lalu isi misalnya `let name: string = ahmad; console.log(name)`
          </li>
          <li>buka terminal lalu ketik `tsc index.ts`. maka akan muncul file index.js berisi hasil compilenya.</li>
        </ul>
        <h2 className="font-medium">mulai konfigurasi</h2>
        <ul>
          <li>
            buat folder apa saja, lalu masuk ke folder tersebut, di terminal ketik `tsc --init`. akan dibuatkan file
            tsconfig.json
          </li>
          <li>
            buka file tsconfig.json, di dalamnya terdapat compiler options: projects, language and environment, module,
            javascript support, emit, interop constraints, typechecking, completeness
          </li>
          <li>pada bagian language and environment: target dapat diubah valuenya sesuai kebutuhan.</li>
          <li>
            pada bagian modules: rootDir, hilangkan comment lalu isi dengan value rootDir: ./src (atau nama lain sesuai
            keinginan). lalu buat folder src
          </li>
          <li>
            pada bagian emit: outDir, isi dengan outdir: ./dist (atau nama lain sesuai keinginan); lalu ada removeComment
            hilangkan comment-nya agar saat dicompile commentnya tidak ada; lalu ada noEmitOnError hilangkan commentnya.
          </li>
          <li>pada folder tsc, buat file index.ts, lalu isi dengan `let nama: string = ahmad; console.log(nama)`</li>
          <li>lalu pada terminal tulis `tsc` saja. maka file dist yang di dalamnya index.js akan dibuat otomatis.</li>
        </ul>
      </div>
    </div>
  );
};

export default Ts;
