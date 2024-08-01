import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header2.jsx";
import Footer from "./Footer.jsx";
import MainContent from "./MainContent.jsx";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
