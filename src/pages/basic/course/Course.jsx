import { Outlet } from "react-router-dom";
import { Bubble } from "../../../components/Components";

const courseMenus = [
  { href: "tasks", text: "tasks" },
  { href: "theory", text: "theory" },
  { href: "work", text: "work" },
  { href: "technical", text: "technical" },
];

const Course = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Bubble menus={courseMenus} />
        <div>Course</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Course;
