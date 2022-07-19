import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
} from "@ionic/react";
import { add } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";

const Tasks: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonList mode="ios" className="">
          <IonItem mode="ios">Hello</IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed" className="m-4">
          <IonFabButton mode="ios">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <ExploreContainer name="Tasks page" />
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
