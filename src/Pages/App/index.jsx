import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ContextProvider } from '../../Context';
import Home from '../Home';
import Courses from '../Courses';
import NavBar from '../../Components/NavBar';
import './index.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/courses', element: <Courses />},
  ]);
  return routes;
}

function App() {

  return (
    <ContextProvider>
      <BrowserRouter basename="/Portfolio">
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>

  )
}

export default App;
