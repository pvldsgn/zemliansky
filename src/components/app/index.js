import React from 'react'
import Header from 'components/header'
import s from './index.module.sass'

// components
import Cards from 'components/cards'
import ScrollToTop from 'components/scroll-to-top'

// routers
import { BrowserRouter as Router, Route } from "react-router-dom"
// pages
import Today from 'pages/today'
import Tassovec from 'pages/tassovec'

// css transition (?)
import {
    CSSTransition
  } from "react-transition-group";

  const routes = [
    { path: '/', name: 'Home', Component: Cards },
    { path: '/today', name: 'Today', Component: Today },
    { path: '/tassovec', name: 'Tassovec', Component: Tassovec }
  ]



const App = () => {

    return (
        <Router>
            <ScrollToTop/>
            <div className={s.app}>
                <Header />
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={500}
                            classNames={s}
                            unmountOnExit
                        >
                            <div className={s.page}>
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                    </Route>
                ))}
            </div>
        </Router>
    );
};

export default App;