import { GooglePlus } from "@awesome-cordova-plugins/google-plus";
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonPage,
  useIonAlert,
} from "@ionic/react";
import {
  bulb,
  chevronForward,
  compass,
  heart,
  informationCircle,
  logoGithub,
  logOut,
  sparkles,
} from "ionicons/icons";
import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

const User: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const { state, dispatch } = useContext(UserContext);

  const handleLogout = () => {
    GooglePlus.logout();
    dispatch({ type: "setUser", user: null });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="py-5 font-black text-center text-3xl font-sans">
          User
        </div>
        <a
          href="/UserInfo"
          className="h-fit w-full px-5 flex flex-row items-center justify-between font-sans">
          <IonCard mode="ios" className="rounded-full h-fit w-fit mx-auto my-0">
            <IonCardContent className="w-fit h-fit p-0 rounded-full border-2 dark:border-gray-500">
              <img
                src={state.user.imageUrl}
                alt="User"
                referrerPolicy="no-referrer"
                className="w-16 min-w-16 h-16 min-h-16 rounded-full"
              />
            </IonCardContent>
          </IonCard>
          <div className="flex flex-row items-center justify-between">
            <div className="text-center">
              <div>{state.user.displayName}</div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {state.user.email}
              </div>
            </div>
            <IonIcon icon={chevronForward} />
          </div>
        </a>
        <IonCard mode="ios" className="border dark:border-gray-500 font-sans">
          <IonCardContent className="h-full">
            <a href="/Tips" className="w-full">
              <button className="w-full h-full mb-3 flex justify-between items-center">
                <div className="flex items-center">
                  <IonIcon icon={bulb} className="mr-2 w-6 h-6" />
                  <div className="text-left">Tips</div>
                </div>
                <IonIcon icon={chevronForward} />
              </button>
            </a>
            <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
            <a href="/HelpCenter" className="w-full">
              <button className="w-full h-full my-3 flex justify-between items-center">
                <div className="flex items-center">
                  <IonIcon icon={compass} className="mr-2 w-6 h-6" />
                  <div className="text-left">Help Center</div>
                </div>
                <IonIcon icon={chevronForward} />
              </button>
            </a>
            <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
            <a href="/Follow" className="w-full">
              <button className="w-full h-full my-3 flex justify-between items-center">
                <div className="flex items-center">
                  <IonIcon icon={heart} className="mr-2 w-6 h-6" />
                  <div className="text-left">Follow Us</div>
                </div>
                <IonIcon icon={chevronForward} />
              </button>
            </a>
            <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
            <a href="/MoreInfo">
              <button className="w-full h-full my-3 flex justify-between items-center">
                <div className="flex items-center">
                  <IonIcon icon={informationCircle} className="mr-2 w-6 h-6" />
                  <div className="text-left">More Information</div>
                </div>
                <IonIcon icon={chevronForward} />
              </button>
            </a>
            <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
            <button
              className="w-full h-full my-3 text-blue-500 flex justify-between items-center"
              onClick={() =>
                presentAlert({
                  header: "Got a suggestion?",
                  message: "Mail it to us straight away.",
                  buttons: [
                    {
                      text: "Later",
                      role: "cancel",
                      cssClass: "red",
                    },
                    {
                      text: "Let's go!",
                      handler: () => {
                        window.open(
                          "mailto:officialfimpo@gmail.com",
                          "_system",
                          "location=yes",
                        );
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
              <div className="flex items-center">
                <IonIcon icon={sparkles} className="mr-2 w-6 h-6" />
                <div className="text-left">Feedback</div>
              </div>
              <IonIcon icon={chevronForward} />
            </button>
            <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
            <button
              className="w-full h-full mt-3 text-blue-500 flex justify-between items-center"
              onClick={() =>
                window.open(
                  "https://github.com/dhruvkrishnavaid/fimpo",
                  "_system",
                  "location=yes",
                )
              }>
              <div className="flex items-center">
                <IonIcon icon={logoGithub} className="mr-2 w-6 h-6" />
                <div className="text-left">View Source</div>
              </div>
              <IonIcon icon={chevronForward} />
            </button>
          </IonCardContent>
        </IonCard>
        <div className="mx-5 my-4 font-sans">
          <button
            onClick={() =>
              presentAlert({
                header: "Logout",
                message: "Are you sure you want to logout?",
                buttons: [
                  {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "blue",
                  },
                  {
                    text: "Logout",
                    handler: () => handleLogout(),
                    cssClass: "red",
                  },
                ],
                mode: "ios",
                animated: true,
                translucent: true,
                cssClass: "font-sans",
              })
            }
            className="w-full px-3 py-3 rounded-lg font-semibold text-red-500 dark:text-red-600 bg-gray-300 dark:bg-gray-400 shadow-xl">
            <div className="w-full flex items-center justify-center">
              <IonIcon icon={logOut} className="mr-2 w-6 h-6" />
              <div className="text-left">Log Out</div>
            </div>
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default User;
