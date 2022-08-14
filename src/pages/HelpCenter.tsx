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

const HelpCenter: React.FC = () => (
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
        <IonTitle>Help Center</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="px-auto py-5 text-center">
        <div className="text-3xl font-black font-sans">
          How can we help you?
        </div>
      </div>
      <IonCard mode="ios" className="border dark:border-gray-500">
        <a href="/H/GetStarted" className="w-full h-full">
          <IonCardContent>
            <div className="py-4 text-center text-xl font-black font-sans">
              Get Started
            </div>
          </IonCardContent>
        </a>
      </IonCard>
      <IonCard mode="ios" className="border dark:border-gray-500">
        <a href="/H/Suggestions" className="w-full h-full">
          <IonCardContent>
            <div className="py-4 text-center text-xl font-black font-sans">
              Suggestions
            </div>
          </IonCardContent>
        </a>
      </IonCard>
      <IonCard mode="ios" className="border dark:border-gray-500">
        <a href="/H/FAQs" className="w-full h-full">
          <IonCardContent>
            <div className="py-4 text-center text-xl font-black font-sans">
              FAQs
            </div>
          </IonCardContent>
        </a>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default HelpCenter;
