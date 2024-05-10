import { CustomHook1 } from "./CustomHook1";

export const CustomHook = () => {
  return (
    <div>
      <div>custom hook</div>
      <p>
        <b>custom hook</b> aturan namanya diawali use lalu Hook misal useUser. di dalam custom hook bisa panggil hook bawaan
      </p>
      <CustomHook1 />
    </div>
  );
};
