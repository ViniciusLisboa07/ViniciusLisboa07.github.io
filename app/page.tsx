import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Writing from "./components/Writing"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { getAllPosts } from "../lib/posts"

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />
      <Presentation />
      <Experience />
      <Projects />
      <Writing posts={latestPosts} />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
