import {
  IonCard,
  IonCardContent,
  IonContent,
  IonPage,
} from "@ionic/react";
import { useContext } from "react";
import { MatrixContext } from "../utils/contexts/MatrixContext";

const List: React.FC<{ list: any; href: string }> = (props: any) => (
  <div className="w-full">
    <div className="text-sm">
      {props.list.slice(0, 3).map((item: any, key: number | string) => (
        <li key={key}>{item.title}</li>
      ))}
    </div>

    <div className="">
      <a href={props.href} className="w-full">
        <button className="w-full bg-blue-500 px-auto py-2 text-white rounded-xl mt-2 hover:bg-blue-600">
          View All
        </button>
      </a>
    </div>
  </div>
);

const Matrix: React.FC = () => {
  const { state } = useContext(MatrixContext);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="py-5 font-black text-center text-3xl font-sans">
          EisenHower Matrix
        </div>
        <div className="grid grid-cols-2">
          <div className="flex">
            <IonCard
              mode="ios"
              className="-mb-0.5 font-sans grow border dark:border-gray-500">
              <IonCardContent className="h-full">
                <div className="h-full">
                  <div>
                    <div className="font-bold text-center">
                      Urgent & Important
                    </div>
                    <hr className="mt-1 mb-2" />
                  </div>
                  <List
                    list={state.UrgentAndImportant}
                    href="/M/UrgentAndImportant"
                  />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
          <div className="flex">
            <IonCard
              mode="ios"
              className="-mb-0.5 font-sans grow border dark:border-gray-500">
              <IonCardContent className="h-full">
                <div>
                  <div>
                    <div className="font-bold text-center">
                      Urgent but Not Important
                    </div>
                    <hr className="mt-1 mb-2" />
                  </div>
                  <div className="h-full"></div>
                  <List
                    list={state.UrgentButNotImportant}
                    href="/M/UrgentButNotImportant"
                  />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
          <div className="flex">
            <IonCard
              mode="ios"
              className="font-sans grow border dark:border-gray-500">
              <IonCardContent className="h-full">
                <div>
                  <div>
                    <div className="font-bold text-center">
                      Not Urgent but Important
                    </div>
                    <hr className="mt-1 mb-2" />
                  </div>
                  <List
                    list={state.NotUrgentButImportant}
                    href="/M/NotUrgentButImportant"
                  />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
          <div className="flex">
            <IonCard
              mode="ios"
              className="font-sans grow border dark:border-gray-500">
              <IonCardContent className="h-full">
                <div>
                  <div>
                    <div className="font-bold text-center">
                      Not Urgent & Not Important
                    </div>
                    <hr className="mt-1 mb-2" />
                  </div>
                  <List
                    list={state.NotUrgentAndNotImportant}
                    href="/M/NotUrgentAndNotImportant"
                  />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Matrix;
