import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
// Pages

import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import CanvasesPage from './pages/CanvasesPage';
import PostersPage from './pages/PostersPage';
import StickersPage from './pages/StickersPage';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/all-products' component={AllProductsPage} />
          <Route path='/canvases' component={CanvasesPage} />
          <Route path='/posters' component={PostersPage} />
          <Route path='/stickers' component={StickersPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
