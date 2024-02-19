import HomeApp from "@/lib/HomeApp";
import NavBar from "@/lib/NavBar";
import About from "@/lib/About";
import Projects from "@/lib/Projects";
import Footer from "@/lib/Footer"
export default function Home({params}) {

  return (
    <div>
      <NavBar></NavBar>
      <HomeApp params={params.locale}></HomeApp>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
