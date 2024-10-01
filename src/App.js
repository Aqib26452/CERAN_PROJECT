import "./App.css";
import Benifits from "./Components/Benifits";
import Feature from "./Components/Feature";
import FirstSection from "./Components/FirstSection";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Steps from "./Components/Steps";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <Feature />
      <Steps />
      <Benifits />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
