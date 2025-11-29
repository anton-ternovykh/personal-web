import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import KeyProjects from "./components/KeyProjects";
import ProfessionalExpirience from "./components/ProfessionalExpirience";
import ProfilePhoto from "./components/ProfilePhoto";
import ProfileSummary from "./components/ProfileSummary";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="container mx-auto p-4 sm:p-8 lg:p-12 relative">
        <Header />
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
          <aside className="lg:col-span-1 space-y-8 mb-8 lg:mb-0 order-3 lg:order-1">
            <ProfilePhoto />
            <Contact />
            <Skills />
            <Education />
          </aside>
          <main className="lg:col-span-2 space-y-8 order-1 lg:order-2">
            <ProfileSummary />
            <ProfessionalExpirience />
          </main>
          <div className="lg:col-span-3 order-2 lg:order-3 mb-8">
            <KeyProjects />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
