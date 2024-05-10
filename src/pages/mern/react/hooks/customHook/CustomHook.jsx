import { H2, Par } from "../../../components/Tags";
import { CustomHook1 } from "./CustomHook1";

export const CustomHook = () => {
  return (
    <div>
      <H2>custom hook</H2>
      <Par>
        <b>custom hook</b> aturan namanya diawali use lalu Hook misal useUser. di dalam custom hook bisa panggil hook bawaan
      </Par>
      <CustomHook1 />
    </div>
  );
};
