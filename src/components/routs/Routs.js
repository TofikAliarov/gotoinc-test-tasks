import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import styles from "./Routs.module.css";
const ColorPicker = React.lazy(
  async () => await import("../colorPicker/ColorPicker")
);
const Main = React.lazy(async () => await import("../main/Main"));

export default function Routs() {
  return (
    <Router>
      <div>
        <header className={styles.header}>
          <nav>
            <ul className={styles.routList}>
              <li className={styles.routItem}>
                <NavLink activeClassName={styles.activeLink} exact to="/">
                  main
                </NavLink>
              </li>
              <li className={styles.routItem}>
                <NavLink activeClassName={styles.activeLink} to="/colorpicker">
                  colorpicker
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/colorpicker">
              <ColorPicker />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
