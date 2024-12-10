import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import VedioPage from './components/VedioPage';
import HomePage from './components/HomePage';
function App() {
  const router =createBrowserRouter([
  {
    path :"/",
    element: <HomePage/>
  },
  {
    path :"/room/:id",
    element:<VedioPage/>
  }
])
  return (
    <div className="App">
      <RouterProvider router ={router}/>
      
    </div>
  );
}

export default App;
