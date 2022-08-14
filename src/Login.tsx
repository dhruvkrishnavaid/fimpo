import { App } from "@capacitor/app";
import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import Lottie from "lottie-react";
import { useContext, useEffect } from "react";
import work from "./lotties/work.json";
import { UserContext } from "./utils/contexts/UserContext";
import { GooglePlus } from "@awesome-cordova-plugins/google-plus";
import env from "./env";

const Login: React.FC = () => {
  const { dispatch } = useContext(UserContext);

  const handleSignIn = async () => {
    try {
      const res: any = await GooglePlus.login({
        webClientId: env.WEB_CLIENT_ID,
        offline: true,
      });
      dispatch({ type: "setUser", user: res });
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    App.addListener("backButton", () => {
      App.exitApp();
    });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="w-full h-full flex flex-col justify-between">
          <Lottie animationData={work} />
          <div className="w-full h-1/3 px-5 my-7 text-center flex flex-col items-center justify-evenly font-sans">
            <div className="text-2xl">
              Organise your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500">
                Tasks
              </span>{" "}
              and Manage your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-500">
                Work
              </span>
            </div>
            <button
              onClick={() => handleSignIn()}
              className="w-full mt-5 px-5 py-3 flex flex-row items-center justify-between bg-gradient-to-br from-indigo-600 via-blue-500 to-sky-400 hover:from-indigo-700 hover:via-blue-600 hover:to-sky-500 dark:from-indigo-700 dark:via-blue-600 dark:to-sky-500 dark:hover:from-indigo-800 dark:hover:via-blue-700 dark:hover:to-sky-600 text-white rounded-2xl shadow-lg shadow-blue-500 hover:shadow-blue-600">
              <IonIcon icon={logoGoogle} className="w-8 h-8" />
              <div className="w-full text-center">Continue with Google</div>
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
