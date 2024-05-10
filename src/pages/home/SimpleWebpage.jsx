import { Tabs } from "../../components/Components";

const simpleWebpageMenus = [
  { href: "../../staticweb/mrwd1/index.html", text: "mrwd1" },
  { href: "../../staticweb/mrwd2/index.html", text: "mrwd2" },
  { href: "../../staticweb/nuruliman/index.html", text: "nuruliman" },
  { href: "../../staticweb/wpu-bs1/index.html", text: "wpu-bs1" },
  { href: "../../staticweb/wpu-bs2/index.html", text: "wpu-bs2" },
  { href: "../../staticweb/wpu-mtrz1/index.html", text: "wpu-mtrz1" },
  { href: "../../staticweb/omdbapi/index.html", text: "omdbapi" },
];

const SimpleWebpage = () => {
  return (
    <div>
      <div>Simple Webpage</div>
      <Tabs menus={simpleWebpageMenus} />
    </div>
  );
};

export default SimpleWebpage;
