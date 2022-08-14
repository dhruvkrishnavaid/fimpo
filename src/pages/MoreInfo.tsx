import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

const MoreInfo: React.FC = () => (
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
        <IonTitle>More Information</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="mx-auto h-fit w-fit">
        <IonCard mode="ios" className="rounded-full h-fit w-fit">
          <IonCardContent className="h-fit w-fit rounded-full border-2 dark:border-gray-500">
            <img
              src="/icon.png"
              alt="Fimpo logo"
              className="h-16 w-16 font-sans"
            />
          </IonCardContent>
        </IonCard>
        <div className="text-center font-sans">
          <div className="font-bold">Fimpo</div>
          <div className="text-gray-400">v1.0.1</div>
        </div>
      </div>
      <IonCard mode="ios" className="border dark:border-gray-500 font-sans">
        <IonCardContent className="h-full">
          <a href="/TermsOfUse">
            <button className="w-full h-full mb-3 flex justify-between items-center">
              <div className="flex items-center">
                <div className="text-left">Terms Of Use</div>
              </div>
              <IonIcon icon={chevronForward} />
            </button>
          </a>
          <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
          <a href="/PrivacyPolicy">
            <button className="w-full h-full mt-3 flex justify-between items-center">
              <div className="flex items-center">
                <div className="text-left">Privacy Policy</div>
              </div>
              <IonIcon icon={chevronForward} />
            </button>
          </a>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default MoreInfo;
