import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Restaurant from './components/Restaurant/Restaurant';
import { Route, Routes } from 'react-router-dom';
import MealDetails from './components/MealDetails/MealDetails';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/mealDetails/:mealId" element={<MealDetails />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
