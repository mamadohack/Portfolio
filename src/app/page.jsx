import HomeApp from "@/lib/HomeApp";
import NavBar from "@/lib/NavBar";
import About from "@/lib/About";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <HomeApp></HomeApp>
      <About></About>
    </div>
  );
}
