import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ProviderInfo from './Components/ProviderInfo';
import UpiPayment from './Components/UpiPayment';
import TakerInfo from './Components/TakerInfo';
import CategorySelection from './Components/CategorySelection';
import Plumbers from './Components/Categories/Plumbers';
import ServiceProviderCategory from './Components/ServiceProviderCategory';
import Plumbers1 from './Components/ProviderDomain/Plumbers1';
import NextTakerInfo from './Components/NextTakerInfo';
import ProvideReview from './Components/ProvideReview';
import Location from './Components/Location';
import ShowReviews from './Components/ShowReviews';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Nav from './Components/Nav';
import VideoTaker from './Components/VideoComponents/VideoTaker';
import VideoTakerInfo from './Components/VideoComponents/VideoTakerInfo';
import Location1 from './Components/Location1';
import Electricians from './Components/Categories/Electricians';
import AcMechanics from './Components/Categories/AcMechanics';
import Electricians1 from './Components/ProviderDomain/Electricians1';
import AcMechanicalDetails1 from './Components/ProviderDomain/AcMechanicalDetails1';
import Chat from './Components/Chat';
import ReviewSuccesful from './Components/ReviewSuccesful';

function App() {
  return (
<div>
  <BrowserRouter>
  <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/ProviderInfo" element={<ProviderInfo/>}></Route>
      <Route path="/TakerInfo" element={<TakerInfo/>}></Route>
      <Route path="/CategorySelection" element={<CategorySelection/>}></Route>

      <Route path="/PlumberInterest" element={<Plumbers/>}></Route>
      <Route path="/ElectricainInterest" element={<Electricians/>}></Route>
      <Route path="/AcMechanicinterest" element={<AcMechanics/>}></Route>


      <Route path="/SeeProviders" element={<ServiceProviderCategory/>}></Route>
      <Route path="/PlumbersDetails" element={<Plumbers1/>}></Route>
      <Route path="/ElectricianDetails" element={<Electricians1/>}></Route>
      <Route path="/ACMechanicalDetails" element={<AcMechanicalDetails1/>}></Route>



      <Route path="/nextTakerInfo" element={<NextTakerInfo/>}></Route>


      {/* this is the route to add reviews */}
      <Route path="/add-Review" element={<ProvideReview/>}></Route>
      <Route path="/show-reviews" element={<ShowReviews/>}></Route>

      <Route path="/UPI" element={<UpiPayment/>}></Route>
      <Route path="/location" element={<Location/>}></Route> 
      {/* <Route path="/chat" element={<Chat/>}></Route>  */}


      <Route path="/ReviewSuccesful" element={<ReviewSuccesful/>}></Route>
      <Route path="/location1" element={<Location1/>}></Route>

      <Route path="/VideoTaker" element={<VideoTaker/>}></Route>
      <Route path="/VideoTakerInfo" element={<VideoTakerInfo/>}></Route>

      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>

    </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
