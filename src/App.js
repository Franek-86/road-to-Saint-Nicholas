// import "leaflet/dist/leaflet.css";
import "../node_modules/leaflet/dist/leaflet.css";
import "./App.css";
import Map from "./Map";
import Loading from "./Loading";
import Questions from "./Questions";
import Modal from "./Modal";
import Start from "./Start";
import End from "./End";
import { useGlobalContext } from "./context";

function App() {
  const { isModalOpen, waiting, loading, start, end } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (start) {
    return <Start />;
  }
  if (end) {
    return (
      <section className='map-section'>
        <Map />
        <End />
      </section>
    );
  }
  if (waiting) {
    return (
      <section className='map-section'>
        <Map />
        <Modal />
      </section>
    );
  }
  return (
    <section className='map-section'>
      <Map />
      <Questions />
    </section>
  );
}

export default App;
