import {
  SiOracle,
  SiPostgresql,
  SiHeroku,
  SiHostinger,
  SiRumahweb,
  SiStackblitz,
  SiCodesandbox,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiCodepen,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiVuedotjs,
  SiAngular,
  SiPhp,
  SiLaravel,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiBulma,
  SiExpress,
  SiCodeigniter,
  SiBabel,
  SiJquery,
  SiAlpinedotjs,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiLaragon,
  SiInsomnia,
  SiNextdotjs,
  SiVite,
  SiVercel,
  SiNetlify,
  SiXampp,
  SiMamp,
  SiSymfony,
} from "react-icons/si";

import { DiMaterializecss } from "react-icons/di";

const Reference = () => {
  return (
    <div>
      <div>Reference</div>
      <div>Basic Website</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiPhp />
      </div>
      <div>CSS framework and web design</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiTailwindcss />
        <SiBootstrap />
        <DiMaterializecss />
        <SiBulma />
        <SiSass />
        <SiFigma />
      </div>
      <div>Javascript framework and library</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiAlpinedotjs />
        <SiJquery />
        <SiTypescript />
        <SiReact />
        <SiAngular />
        <SiVuedotjs />
        <SiBabel />
      </div>
      <div>Php framework</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiCodeigniter />
        <SiLaravel />
        <SiSymfony />
      </div>
      <div>Nodejs library</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiNodedotjs />
        <SiExpress />
      </div>
      <div>Deployment</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiVercel />
        <SiNetlify />
        <SiHeroku />
        <SiHostinger />
        <SiRumahweb />
      </div>
      <div>build tool</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiVite />
        <SiNextdotjs />
        <SiStackblitz />
        <SiCodesandbox />
        <SiCodepen />
      </div>
      <div>database</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiMysql />
        <SiMongodb />
        <SiOracle />
        <SiPostgresql />
      </div>
      <div>vcs</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiGit />
        <SiGithub />
        <SiGitlab />
        <SiBitbucket />
      </div>
      <div>server development & api platform</div>
      <div className="flex justify-start flex-wrap gap-2">
        <SiLaragon />
        <SiXampp />
        <SiMamp />
        <SiPostman />
        <SiInsomnia />
      </div>
    </div>
  );
};

export default Reference;
