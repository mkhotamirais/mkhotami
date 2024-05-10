import { Tabs } from "../../components/Components";

const cssTipsMenus = [
  { href: "../../css-tips/accordion.html", text: "accordion" },
  { href: "../../css-tips/stickyChild.html", text: "stickyChild" },
  { href: "../../css-tips/stickyChildGrid.html", text: "stickyChildGrid" },
  { href: "../../css-tips/stickyChildFlex.html", text: "stickyChildFlex" },
  { href: "../../css-tips/neumorphism.html", text: "neumorphism" },
];

const CssTips = () => {
  return (
    <section>
      <div>css tips</div>
      <Tabs menus={cssTipsMenus} />
    </section>
  );
};

export default CssTips;
