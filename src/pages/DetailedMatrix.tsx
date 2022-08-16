import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import {
  add,
  checkmark,
  checkmarkDone,
  chevronBack,
  close,
} from "ionicons/icons";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import allDone from "../lotties/allDone.json";
import yay from "../lotties/yay.json";
import { MatrixContext } from "../utils/contexts/MatrixContext";

const TaskList: React.FC<{ list: any }> = (props: any) => {
  const { state, dispatch } = useContext(MatrixContext);
  const list = props.list;
  let type: string | undefined;
  switch (list) {
    case state.UrgentAndImportant:
      type = "setUrgentAndImportant";
      break;
    case state.UrgentButNotImportant:
      type = "setUrgentButNotImportant";
      break;
    case state.NotUrgentButImportant:
      type = "setNotUrgentButImportant";
      break;
    case state.NotUrgentAndNotImportant:
      type = "setNotUrgentAndNotImportant";
      break;
  }
  return list.map((task: any, key: number) => (
    <div className="px-3" key={key}>
      <div className="font-sans my-3 p-3 rounded-lg border bg-white dark:bg-[#1e1e1e] shadow-md dark:shadow-gray-500">
        <div className="w-full">
          <div className="w-full flex flex-row justify-between">
            <div className="w-full flex flex-col">
              <div
                className={
                  task.completed
                    ? "line-through font-semibold"
                    : "font-semibold"
                }>
                {task.title}
              </div>
              <div
                className={
                  task.completed
                    ? "pr-2 text-gray-500 dark:text-gray-300 line-through"
                    : "pr-2 text-gray-500 dark:text-gray-300"
                }>
                {task.description}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {task.date}
              </div>
            </div>
            <div className="flex items-center justify-between w-12">
              <IonIcon
                icon={task.completed ? checkmarkDone : checkmark}
                className={
                  task.completed
                    ? "text-lime-600"
                    : "text-gray-500  dark:text-gray-300"
                }
                size="large"
                onClick={() => {
                  list[key].completed = !list[key].completed;
                  dispatch({ type: type, list: [...list] });
                }}
              />
              <IonIcon
                icon={close}
                color="danger"
                size="large"
                onClick={() => {
                  list.splice(key, 1);
                  dispatch({
                    type: type,
                    list: [...list],
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

const NoTasks: React.FC = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [visible]);
  return (
    <div className="font-sans text-center">
      {visible ? (
        <Lottie
          animationData={allDone}
          initialSegment={[0, 114]}
          loop={false}
          className="h-96"
        />
      ) : (
        <div className="h-96" />
      )}
      <h1 className="mt-4 mx-auto font-black text-3xl">Yay! No tasks left.</h1>
      <Lottie
        animationData={yay}
        loop={false}
        className="h-screen -z-10 -mt-[618px]"
      />
    </div>
  );
};

const DetailedMatrix: React.FC<{ title: any }> = (props: any) => {
  const [presentAlert] = useIonAlert();
  const { state, dispatch } = useContext(MatrixContext);
  const title = props.title;
  let list: any;
  switch (title) {
    case "Urgent And Important Tasks":
      list = state.UrgentAndImportant;
      break;
    case "Urgent But Not Important Tasks":
      list = state.UrgentButNotImportant;
      break;
    case "Not Urgent But Important Tasks":
      list = state.NotUrgentButImportant;
      break;
    case "Not Urgent And Not Important Tasks":
      list = state.NotUrgentAndNotImportant;
      break;
  }
  let type: string | undefined;
  switch (list) {
    case state.UrgentAndImportant:
      type = "setUrgentAndImportant";
      break;
    case state.UrgentButNotImportant:
      type = "setUrgentButNotImportant";
      break;
    case state.NotUrgentButImportant:
      type = "setNotUrgentButImportant";
      break;
    case state.NotUrgentAndNotImportant:
      type = "setNotUrgentAndNotImportant";
      break;
  }
  return (
    <IonPage>
      <IonHeader mode="ios" translucent>
        <IonToolbar className="font-sans">
          <IonButtons slot="start">
            <IonBackButton
              text="Back"
              icon={chevronBack}
              defaultHref="/Matrix"
              className="text-blue-500 font-sans"
            />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {list.length ? <TaskList list={list} /> : <NoTasks />}
        <IonFab vertical="bottom" horizontal="end" slot="fixed" className="m-3">
          <IonFabButton
            mode="ios"
            translucent
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
                          type: type,
                          list: [...list, data],
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
            <IonIcon icon={add} size="large" />
          </IonFabButton>
        </IonFab>
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
      </IonContent>
    </IonPage>
  );
};

export default DetailedMatrix;
