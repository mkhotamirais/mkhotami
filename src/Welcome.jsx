import { Link } from "react-router-dom";
import { Section } from "./components/Tags";

const Welcome = () => {
  return (
    <Section>
      <div>Welcome to my Website</div>
      <div>My name is Mkhotami, I am a web developern</div>
      <Link to="home" className="underline">
        explore home
      </Link>
    </Section>
  );
};

export default Welcome;
