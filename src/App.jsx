import FooterComponent from "./components/UI/Footer.component";
import NavbarComponent from "./components/UI/Navbar.component";

function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent />

      {/* Wrapper */}
      <div className="wrapper">
          <h2>Wrapper</h2>
      </div>

      {/* Footer */}
      <FooterComponent />

    </div>
  );
}
export default App;