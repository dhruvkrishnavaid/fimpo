import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

const DetailedUser: React.FC = () => {
  const { state } = useContext(UserContext);
  return (
    <IonPage>
      <IonHeader mode="ios" translucent>
        <IonToolbar className="font-sans">
          <IonButtons slot="start">
            <IonBackButton
              text="Back"
              icon={chevronBack}
              defaultHref="/User"
              className="text-blue-500 font-sans"
            />
          </IonButtons>
          <IonTitle>User Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="py-5 font-black text-center text-3xl font-sans">
          User Info
        </div>
        <IonCard mode="ios" className="border dark:border-gray-500 font-sans">
          <IonCardContent className="h-full">
            <div className="w-full h-full mb-3 flex justify-between items-center">
              <div className="mr-4 flex items-center">
                <div className="text-left">Name</div>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-300">
                {state.user.displayName}
              </div>
            </div>
            <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
            <div className="w-full h-full my-3 flex justify-between items-center">
              <div className="mr-4 flex items-center">
                <div className="text-left">Email</div>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-300">
                {state.user.email}
              </div>
            </div>
            <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
            <div className="w-full h-full mt-3 flex justify-between items-center">
              <div className="mr-4 flex items-center">
                <div className="text-left">User Id</div>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-300">
                {state.user.userId}
              </div>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DetailedUser;
