import { Tabs } from "../../components/Components";

const vanillaComponentsMenus = [
  { href: "../../vanilla-components/carousel/index.html", text: "carousel" },
  { href: "../../vanilla-components/carousel2/index.html", text: "carousel2" },
];

const VanillaComponents = () => {
  return (
    <div>
      <div>VanillaComponents</div>
      <Tabs menus={vanillaComponentsMenus} />
    </div>
  );
};

export default VanillaComponents;
