import Header from "./components/Header"
import Presentation from "./components/Presentation"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <Presentation />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

