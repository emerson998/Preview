import "./App.css";
import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { profile } from "./data/profile";
import { useTheme } from "./useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();
  const githubUrl = profile.contacts.find((contact) => contact.icon === "github")?.href;

  return (
    <>
      <Header name={profile.name} theme={theme} githubUrl={githubUrl} onToggleTheme={toggleTheme} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience profile={profile} />
        <Skills profile={profile} />
        <Education profile={profile} />
        <Certificates profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}

export default App;
