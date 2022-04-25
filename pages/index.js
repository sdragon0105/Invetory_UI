import Sidebar from "../src/component/Sidebar";
import Projects from "../src/component/Projects";

export default function Home() {
  return (
    <div className="content">
      <Sidebar />
      <Projects />
    </div>
  );
}
