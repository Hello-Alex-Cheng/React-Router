import React from "react";
import { BrowserRouter, Route, Link, Switch, NavLink } from "react-router-dom";

import "../css/common.css";

const Home = () => {
  return <h1>This is HOME</h1>;
};

const About = () => {
  return <h1>This is About</h1>;
};

const Topic = ({ match }) => {
  // 通过 占位符 "/:id" 制定的路径, 可以在 match.params 对象中获取值

  return <h3>request param: {match.params.id}</h3>;
};

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/topics">Topics</NavLink>
      </li>

      <li>
        <NavLink to="/the/url/wil/noMatch">gogogo</NavLink>
      </li>
    </ul>
  );
};

const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props-v-state</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />

      <Route
        exact
        path={`${match.path}`}
        render={() => <h3>Please select a topic!</h3>}
      />
    </div>
  );
};

const FourOFour = () => {
  return <h1>404 Not Found!</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />

          <Route component={FourOFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
