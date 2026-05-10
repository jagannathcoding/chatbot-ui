import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";
import ResultPage from "./pages/ResultPage";
import ChatbotPage from "./pages/ChatbotPage";
import ResourcesPage from "./pages/ResourcesPage";

const App = () => {
  return (
    <div className="min-h-screen bg-aura text-ink-800">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
        <Navbar />
        <main className="flex-1 px-4 pb-8 pt-6 sm:px-6 lg:px-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
