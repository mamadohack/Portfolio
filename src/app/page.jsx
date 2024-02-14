import HomeApp from "@/lib/HomeApp";
import NavBar from "@/lib/NavBar";
import About from "@/lib/About";
import Projects from "@/lib/Projects";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <HomeApp></HomeApp>
      <About></About>
      <Projects></Projects>
    </div>
  );
}
