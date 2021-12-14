import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/organisms/layout/Header";

import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Front } from "../components/pages/Front";

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Front />
        <About />
        <Contact />
      </Route>
    </Switch>
  );
});
