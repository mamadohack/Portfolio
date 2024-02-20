import HomeApp from "@/lib/HomeApp";
import Nav from "@/lib/Nav";
import About from "@/lib/About";
import Projects from "@/lib/Projects";
import Footer from "@/lib/Footer"
export default function Home({params}) {

  return (
    <div>
      <Nav></Nav>
      <HomeApp params={params.locale}></HomeApp>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
