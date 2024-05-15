import { Tabs } from "../../../components/Components";

const taskMenus = [
  { href: "../../eduwork/tugas1-html/index.html", text: "task-html" },
  { href: "../../eduwork/tugas2-bootstrap/index.html", text: "task-bootstrap" },
  { href: "../../eduwork/tugas3-jsbasic/index.html", text: "task-js" },
  { href: "../../eduwork/tugas4-miniLibrary/index.html", text: "task-oop" },
  { href: "https://mkhotami.vercel.app/public-apis/jsonplaceholder", text: "task-jp" },
  { href: "https://mkhotami.vercel.app/public-apis/newsapi", text: "task-jwsapi" },
  { href: "https://mkhotami.vercel.app/public-apis/sisko", text: "task-sisko" },
  { href: "https://mkhotami.vercel.app/projects/shop", text: "task-ecommerce" },
];

const CourseTasks = () => {
  return (
    <div>
      <div>
        <b>Tasks</b>
      </div>
      <Tabs menus={taskMenus} />
      <div>Link lainnya: datatables.net dan gridjs.io</div>
    </div>
  );
};

export default CourseTasks;
