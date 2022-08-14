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
import {
  chevronBack,
  chevronForward,
  logoInstagram,
  logoTwitter,
  logoYoutube,
} from "ionicons/icons";
import logoTelegram from "../images/logoTelegram.svg";

const Follow: React.FC = () => (
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
        <IonTitle>Follow Us</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonCard mode="ios" className="border dark:border-gray-500 font-sans">
        <IonCardContent className="h-full">
          <button
            className="w-full h-full mb-3 flex justify-between items-center text-blue-500"
            onClick={() =>
              window.open(
                "https://www.instagram.com/officialfimpo/",
                "_system",
                "location=yes",
              )
            }>
            <div className="flex items-center">
              <IonIcon icon={logoInstagram} className="mr-2 w-6 h-6" />
              <div className="text-left">Instagram (@officialfimpo)</div>
            </div>
            <IonIcon icon={chevronForward} />
          </button>
          <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
          <button
            className="w-full h-full my-3 flex justify-between items-center text-blue-500"
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCN8J9ObjRmH4LLln6xq1XZg",
                "_system",
                "location=yes",
              )
            }>
            <div className="flex items-center">
              <IonIcon icon={logoYoutube} className="mr-2 w-6 h-6" />
              <div className="text-left">Youtube (@fimpo)</div>
            </div>
            <IonIcon icon={chevronForward} />
          </button>
          <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
          <button
            className="w-full h-full my-3 flex justify-between items-center text-blue-500"
            onClick={() =>
              window.open(
                "https://twitter.com/official_fimpo",
                "_system",
                "location=yes",
              )
            }>
            <div className="flex items-center">
              <IonIcon icon={logoTwitter} className="mr-2 w-6 h-6" />
              <div className="text-left">Twitter (@OFFICIAL_FIMPO)</div>
            </div>
            <IonIcon icon={chevronForward} />
          </button>
          <hr className="bg-gray-200 dark:bg-gray-500 rounded-full" />
          <button
            className="w-full h-full mt-3 flex justify-between items-center text-blue-500"
            onClick={() =>
              window.open(
                "https://t.me/officialfimpo",
                "_system",
                "location=yes",
              )
            }>
            <div className="flex items-center">
              <IonIcon icon={logoTelegram} className="mr-2 w-6 h-6" />
              <div className="text-left">Telegram (@officialfimpo)</div>
            </div>
            <IonIcon icon={chevronForward} />
          </button>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Follow;
