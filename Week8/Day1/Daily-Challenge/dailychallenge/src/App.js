import './App.css';
import 'react-responsive-carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
// import CarouselC from './components/CarouselC';
import CarouselComponent from './components/Carousel.component';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <CarouselComponent/>
      <Carousel/>
        {/* <CarouselC /> */}
    </div>
  );
}

export default App;
