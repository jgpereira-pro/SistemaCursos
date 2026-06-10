import { useState } from "react";
import { LoginPage } from "../pages/LoginPage.jsx";
import { Sidebar } from "../componentes/sidebar/index.jsx";
import { Header } from "../componentes/header/index.jsx";
import { Footer } from "../componentes/footer/index.jsx";
import { MyLearning } from "../pages/MyLearning.jsx";
import { ExploreCourses } from "../pages/ExploreCourses.jsx";
import { Settings } from "../pages/Settings.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("my-learning");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const pageMap = {
    "my-learning": <MyLearning />,
    "courses": <ExploreCourses />,
    "settings": <Settings />,
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar
        currentPage={currentPage}
        sidebarOpen={sidebarOpen}
        mobileMenuOpen={mobileMenuOpen}
        onNavigate={(page) => { setCurrentPage(page); setMobileMenuOpen(false); }}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        onLogout={() => setIsLoggedIn(false)}
      />

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            {pageMap[currentPage]}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
