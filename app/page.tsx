import Header from "./components/Header"
import Presentation from "./components/Presentation"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Toolbox from "./components/Toolbox"
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Presentation />
      <About />
      <Projects />
      <Toolbox />
      <Contact />
      <Footer />
    </main>
  )
}

