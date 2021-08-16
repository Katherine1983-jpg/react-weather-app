import "./styles.css";
import Loader from "react-loader-spinner";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Loader
        type="ThreeDots"
        color="black"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
