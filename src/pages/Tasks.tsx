import { App } from "@capacitor/app";
import { IonContent, IonIcon, IonList, IonPage } from "@ionic/react";
import { checkmark, checkmarkDone, close } from "ionicons/icons";
import Lottie from "lottie-react";
import React, { useContext, useEffect } from "react";
import noTasks from "../lotties/noTasks.json";
import { TasksContext } from "../utils/contexts/TasksContext";

const Tasks: React.FC = () => {
  const { state, dispatch } = useContext(TasksContext);

  useEffect(() => {
    App.addListener("backButton", () => {
      App.minimizeApp();
    });
  }, []);

  const TaskList: React.FC = () =>
    state.tasks.map((task: any, key: number) => (
      <div
        className="font-sans my-3 p-3 rounded-lg border dark:border-gray-500 bg-white dark:bg-[#1e1e1e] shadow-md dark:shadow-gray-500"
        key={key}>
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
                    : "text-gray-500 dark:text-gray-300"
                }
                size="large"
                onClick={() => {
                  state.tasks[key].completed = !state.tasks[key].completed;
                  dispatch({ type: "setTasks", tasks: [...state.tasks] });
                }}
              />
              <IonIcon
                icon={close}
                color="danger"
                size="large"
                onClick={() => {
                  state.tasks.splice(key, 1);
                  dispatch({
                    type: "setTasks",
                    tasks: [...state.tasks],
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ));

  const NoTasks: React.FC = () => (
    <div className="font-sans text-center md:my-10">
      <Lottie animationData={noTasks} className="h-96" />
      <h1 className="mt-4 font-black text-3xl">No Tasks</h1>
    </div>
  );

  return (
    <IonPage>
      <IonContent fullscreen>
        {state.tasks.length ? (
          <div className="h-full w-full">
            <div className="py-5 font-black text-center text-3xl font-sans">
              Tasks
            </div>
            <IonList className="px-3 pb-24 dark:bg-transparent">
              <TaskList />
            </IonList>
          </div>
        ) : (
          <NoTasks />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
