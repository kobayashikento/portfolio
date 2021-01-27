import './App.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Skeleton from './Sections/Skeleton';

function App() {
  return (
    <Router>
      <Route path="/" render={() =>
        <Skeleton />}
      />
    </Router>
  );
}

export default App;
