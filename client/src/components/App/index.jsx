import React, { useEffect, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Notifications, { notify } from "react-notify-toast";
import { useDispatch, useSelector } from "react-redux";

import { connectServer } from "../../redux/server/actions";
import notification from "../../services/notification";
import routes from "../../routes";
import "../../styles/sass/main.sass";

import ErrorWrap from "../Base/ErrorWrap";
import Header from "../Base/Header";
import Footer from "../Base/Footer";

import Container from "@material-ui/core/Container";

const App = () => {
  const toast = notify.createShowQueue();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.server);

  const errorConnect = () => {
    toast(
      notification.messages.serverErrorConnect,
      "custom",
      2000,
      notification.styles.error
    );
  };

  const successConnect = () => {
    toast(
      notification.messages.serverConnect,
      "custom",
      2000,
      notification.styles.success
    );
  };

  useEffect(() => {
    dispatch(connectServer(successConnect, errorConnect));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Notifications />
      {status ? (
        <Container component="main" maxWidth="md">
          <Header />

          <Suspense fallback={null}>
            <Switch>
              <Route
                path={routes.Root.path}
                component={routes.Root.component}
              />
              <Redirect to={routes.Root.path} />
            </Switch>
          </Suspense>

          <Footer />
        </Container>
      ) : (
        <ErrorWrap />
      )}
    </>
  );
};

export default App;
