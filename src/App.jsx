import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Home from "./pages/Home";
import TypingTest from "./pages/TypingTest";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";

import Footer from "./components/footer";

const App = () => {
  const [page, setpage] = useState("home");
  const [theme, setTheme] = useLocalStorage("typing-theme", "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const navigate = (nextPage) => {
    setpage(nextPage);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header
        page={page}
        navigate={navigate}
        theme={theme}
        setTheme={setTheme}
      />

      {page === "home" && <Home navigate={navigate} />}
      {page === "test" && <TypingTest navigate={navigate} />}
      {page === "practice" && <Practice />}
      {page === "progress" && <Progress />}
      

        <Footer/>
    

    </div>
  );
};

export default App;
