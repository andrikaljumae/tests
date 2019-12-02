import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Test1 from "./tests/Test1";
import Test2 from "./tests/Test2";
import Test3 from "./tests/Test3";
import Test4 from "./tests/Test4";
import Test5 from "./tests/Test5";
import Test6 from "./tests/Test6";
import Test7 from "./tests/Test7";
import Test8 from "./tests/Test8";
import Test9 from "./tests/Test9";
import Test10 from "./tests/Test10";
import Test11 from "./tests/Test11";
import notFoundImage from "./images/404_Error.jpg";
import {Layout} from "./Layout";

const Home = () => (
  <div>
    Tere päevast!
    <p>
      Rakenduste Programmeerimise soojendusülesanded leiad menüüst
    </p>
    <img width={300} src={'/static/images/brain.jpg'}/>
  </div>
);

const PATHS = [
  {
    path: '/', component: Home, text: 'Home'
  },
  {
    path: '/test/1', component: Test1, text: 'Ülesanne 1 - easy'
  },
  {
    path: '/test/2', component: Test2, text: 'Ülesanne 2 - easy'
  },
  {
    path: '/test/3', component: Test3, text: 'Ülesanne 3 - medium'
  },
  {
    path: '/test/4', component: Test4, text: 'Ülesanne 4 - medium'
  },
  {
    path: '/test/5', component: Test5, text: 'Ülesanne 5 - Sapiens'
  },
  {
    path: '/test/6', component: Test6, text: 'Ülesanne 6 - Darwin'
  },
  {
    path: '/test/7', component: Test7, text: 'Ülesanne 7 - Human'
  },
  {
    path: '/test/8', component: Test8, text: 'Ülesanne 8 - IT student'
  },
  {
    path: '/test/9', component: Test9, text: 'Ülesanne 9 - Elon Musk'
  },
  {
    path: '/test/10', component: Test10, text: 'Ülesanne 10 - Cybertruck'
  },
  {
    path: '/test/11', component: Test11, text: 'Ülesanne 11 - Jeff Bezos'
  },
];

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {PATHS.map( ({path, component}, i) => (
          <Route key={i} path={path} exact component={component}/>
        ))}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;

export const Navigation = () => (
  <div className={"navigation"}>
    {PATHS.map(({path, text},i)=>(
      <Link key={i} to={path}>{text}</Link>
    ))}
  </div>
);

const NotFound = () => (
  <div>
    <img src={notFoundImage}/>
  </div>
);

