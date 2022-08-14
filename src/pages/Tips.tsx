import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";

const Tips: React.FC = () => {
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
          <IonTitle>Tips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard mode="ios" className="border dark:border-gray-500 font-sans">
          <IonCardHeader>
            <IonCardTitle className="text-xl text-center font-semibold">
              Time Management
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Time is perhaps the most important asset in our life. How much rich
            you may be but you can never buy time. Time never comes back, and we
            waste so much time daily. We waste so much of our time thinking
            about why we are wasting our time...
            <a href="/T/TimeMgmt" className="w-full">
              <button className="w-full bg-blue-500 px-5 py-2 text-white rounded-md mt-2 hover:bg-blue-600">
                Read More
              </button>
            </a>
          </IonCardContent>
        </IonCard>
        <hr className="mx-auto w-[90%] lg:w-[95%] bg-gray-200 dark:bg-gray-500 rounded-full" />
        <IonCard mode="ios" className="border dark:border-gray-500 font-sans">
          <IonCardHeader>
            <IonCardTitle className="text-xl text-center font-semibold">
              Stress Management
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Stress management is an important skill for any professional. It is
            a skill that allows you to manage your stress effectively and
            efficiently.
            <a href="/T/StressMgmt" className="w-full">
              <button className="w-full bg-blue-500 px-5 py-2 text-white rounded-md mt-2 hover:bg-blue-600">
                Read More
              </button>
            </a>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tips;
