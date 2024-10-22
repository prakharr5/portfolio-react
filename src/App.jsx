import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import { ClimbingBoxLoader } from "react-spinners";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="loader-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
          }}
        >
          <ClimbingBoxLoader color={"#000000"} loading={loading} size={25} />
        </div>
      ) : (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
