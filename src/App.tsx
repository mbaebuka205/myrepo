import { RouterProvider } from 'react-router-dom';
import {MainRouter} from './components/Router/MainRouter'
const App = () => {
  return (
   <div>
      <RouterProvider router={MainRouter}/>
   </div>
  );
}

export default App;
