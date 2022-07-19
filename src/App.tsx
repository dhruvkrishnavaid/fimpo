import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { checkmarkCircle, sparkles, home } from "ionicons/icons";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Tips from "./pages/Tips";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import TimeMgmt from "./pages/TimeMgmt";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Tasks">
            <Tasks />
          </Route>
          <Route path="/Tips">
            <Tips />
          </Route>
          <Route path="/Tips/TimeMgmt">
            <TimeMgmt />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar
          slot="bottom"
          color="primary"
          mode="ios"
          translucent={true}
          className="relative bottom-5 rounded-2xl w-[90%] py-3 mx-auto my-0 shadow-lg">
          <IonTabButton tab="Home" href="/Home" className="home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Tasks" href="/Tasks" className="tasks">
            <IonIcon icon={checkmarkCircle} />
            <IonLabel>Tasks</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Tips" href="/Tips" className="tips">
            <IonIcon icon={sparkles} />
            <IonLabel>Tips</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
