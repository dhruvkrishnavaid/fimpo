import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToast,
  setupIonicReact,
  useIonAlert,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { add, alarm, grid, home, person } from "ionicons/icons";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import DetailedMatrix from "./pages/DetailedMatrix";
import DetailedUser from "./pages/DetailedUser";
import Follow from "./pages/Follow";
import HelpCenter from "./pages/HelpCenter";
import Matrix from "./pages/Matrix";
import MoreInfo from "./pages/MoreInfo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Stopwatch from "./pages/Stopwatch";
import Tasks from "./pages/Tasks";
import TermsOfUse from "./pages/TermsOfUse";
import Tips from "./pages/Tips";
import StressMgmt from "./pages/tips/StressMgmt";
import TimeMgmt from "./pages/tips/TimeMgmt";
import User from "./pages/User";
import { TasksContext } from "./utils/contexts/TasksContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import "./theme/variables.css";

/* Custom CSS */
import "./App.css";
import FAQs from "./pages/helpcenter/FAQs";
import Suggestions from "./pages/helpcenter/Suggestions";
import GetStarted from "./pages/helpcenter/GetStarted";

setupIonicReact();

const App: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const { state, dispatch } = useContext(TasksContext);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/Tasks">
              <Tasks />
            </Route>
            <Route path="/Matrix">
              <Matrix />
            </Route>
            <Route path="/Stopwatch">
              <Stopwatch />
            </Route>
            <Route path="/User">
              <User />
            </Route>
            <Route exact path="/">
              <Redirect to="/Tasks" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar
            slot="bottom"
            color="primary"
            mode="ios"
            translucent
            className="relative bottom-5 rounded-2xl w-[90%] py-3 mx-auto my-0 shadow-lg font-sans">
            <IonTabButton tab="Home" href="/Tasks" className="home">
              <IonIcon icon={home} />
              <IonLabel className="font-semibold">Home</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="New Task"
              className="new-task"
              onClick={() =>
                presentAlert({
                  header: "Add Task",
                  inputs: [
                    {
                      name: "title",
                      type: "text",
                      placeholder: "Title",
                    },
                    {
                      name: "description",
                      type: "textarea",
                      placeholder: "Description (optional)",
                    },
                  ],
                  buttons: [
                    {
                      text: "Cancel",
                      role: "cancel",
                      cssClass: "red",
                    },
                    {
                      text: "Add",
                      role: "add",
                      handler: (data: any) => {
                        if (data.title) {
                          data.date = new Date().toDateString();
                          data.completed = false;
                          dispatch({
                            type: "setTasks",
                            tasks: [...state.tasks, data],
                          });
                        } else {
                          dispatch({
                            type: "setShowToast",
                            showToast: true,
                          });
                        }
                      },
                      cssClass: "blue",
                    },
                  ],
                  mode: "ios",
                  animated: true,
                  translucent: true,
                  cssClass: "font-sans",
                })
              }>
              <IonIcon icon={add} />
              <IonLabel className="font-semibold">New Task</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Matrix" href="/Matrix" className="matrix">
              <IonIcon icon={grid} />
              <IonLabel className="font-semibold">Matrix</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="Stopwatch"
              href="/Stopwatch"
              className="stopwatch">
              <IonIcon icon={alarm} />
              <IonLabel className="font-semibold">Stopwatch</IonLabel>
            </IonTabButton>
            <IonTabButton tab="User" href="/User" className="user">
              <IonIcon icon={person} />
              <IonLabel className="font-semibold">User</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <Route path="/M/UrgentAndImportant">
          <DetailedMatrix title="Urgent And Important Tasks" />
        </Route>
        <Route path="/M/UrgentButNotImportant">
          <DetailedMatrix title="Urgent But Not Important Tasks" />
        </Route>
        <Route path="/M/NotUrgentButImportant">
          <DetailedMatrix title="Not Urgent But Important Tasks" />
        </Route>
        <Route path="/M/NotUrgentAndNotImportant">
          <DetailedMatrix title="Not Urgent And Not Important Tasks" />
        </Route>
        <Route path="/Tips">
          <Tips />
        </Route>
        <Route path="/T/TimeMgmt">
          <TimeMgmt />
        </Route>
        <Route path="/T/StressMgmt">
          <StressMgmt />
        </Route>
        <Route path="/HelpCenter">
          <HelpCenter />
        </Route>
        <Route path="/H/GetStarted">
          <GetStarted />
        </Route>
        <Route path="/H/Suggestions">
          <Suggestions />
        </Route>
        <Route path="/H/FAQs">
          <FAQs />
        </Route>
        <Route path="/Follow">
          <Follow />
        </Route>
        <Route path="/MoreInfo">
          <MoreInfo />
        </Route>
        <Route path="/PrivacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="/TermsOfUse">
          <TermsOfUse />
        </Route>
        <Route path="/UserInfo">
          <DetailedUser />
        </Route>
      </IonReactRouter>
      <IonToast
        mode="ios"
        translucent
        isOpen={state.showToast}
        onDidDismiss={() =>
          dispatch({
            type: "setShowToast",
            showToast: false,
          })
        }
        message={state.toastMessage}
        duration={1500}
        cssClass="text-red-500 font-sans font-medium toast"
      />
    </IonApp>
  );
};

export default App;
