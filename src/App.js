import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dialog from '@material-ui/core/Dialog';

import Skeleton from './Sections/Skeleton';
import ProductInfo from './Components/ProductInfo';

import mockOverview from './Assets/pictures/expcon_main_mock.png';
import mockAll from './Assets/pictures/expcon_all_mock.png';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './Redux/reducer';

const store = createStore(reducer);

function App() {

  const content = {
    mockOverview: mockOverview, dutiesText: ["designer", "developer"], techText: ["React", "Redux", "JavaScript", "Material UI"],
    dateText: "Jan, 2021", overviewText: "Built a website that focused on building an interactive online music experience.",
    mockAll: mockAll, detailsText: "This website was built using React and focuses heavily on engaging the viewers through the use of parallaxes and meaningful animations. I created functional components for sections that had similar layouts to reduce unnecessary code and used React Redux so that components would share global states to reduce client-side lags."
  }

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/test" render={() =>
            <Dialog fullScreen open={true}>
              <ProductInfo
                render={true}
                content={content}
              />
            </Dialog>
          }
          />
          <Route path="/" render={() =>
            <Skeleton />}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
