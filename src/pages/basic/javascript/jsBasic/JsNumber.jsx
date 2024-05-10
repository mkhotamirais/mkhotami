const JsNumber = () => {
  return (
    <pre>{`
// Number
// 1. basis 2-10 (binary, hexadecimal, octal, bigint)
// 2. Number.EPSILON .MAX_VALUE .MIN_VALUE .MAX_SAFE_INTEGER .MIN_SAFE_INTEGER .POSITIVE_INFINITY .NEGATIVE_INFIITY
// 3. Number.isFinite(val) .isInteger(val) .isNaN(val) .isSaveInteger(val)
// 4. Number.parseInt(string,radix)
// 5. Number.prototype.name=val
// 6. num.toExponential(int=0) .toFixed(x=0) .toPrecision(x=0) .valueOf() .toString(radix=0)

console.log(Number.isFinite(0));

// Math
// 1. Math.abs(-num) .cbrt(num**3) .sqrt(num**2) .ceil(float) .floor(float) .round(num) .sign(num),
// 2. Math.max(num1,num2,num-n) .min(num1,num-n) .pow(base,exponent)\n3.3 Math.round(float) .trunc(num|-num) .sign(num|-num|0),
// 3. Math.max.apply(null, [arr]),
// 4. Math.E .PI .SQRT2 .SQRT1_2,
// 5. Math.random()
    `}</pre>
  );
};

export default JsNumber;
