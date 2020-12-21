import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeScreen></HomeScreen>
      </main>
      <Footer />
    </div>
  );
};

export default App;
