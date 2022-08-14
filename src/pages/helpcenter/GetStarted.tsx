import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";

const GetStarted: React.FC = () => (
  <IonPage>
    <IonHeader mode="ios" translucent>
      <IonToolbar className="font-sans">
        <IonButtons slot="start">
          <IonBackButton
            text="Back"
            icon={chevronBack}
            defaultHref="/HelpCenter"
            className="text-blue-500 font-sans"
          />
        </IonButtons>
        <IonTitle>Get Started</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonTitle className="mt-6 mb-3 text-3xl text-center font-black font-sans">
        Get Started
      </IonTitle>
      <div className="px-5 py-10 font-sans">
        <div>
          Welcome to Fimpo! This quick start guide will help you learn some
          basics of establishing a task management system in Fimpo. Ready to
          live a more organized and productive life? Let's get started!
        </div>
        <br />
        <div className="font-bold">Move tasks from your mind to Fimpo</div>
        <div>
          Meet clients, finish new design work, pick up kids at school, do
          laundry… there are just so many different tasks in work and life that
          we have to deal with on a daily basis and those tasks can usually
          change with time. It is quite handlable for our mind if it's just 2 or
          3 tasks, but what if there are 10 or 20? Our brain lose focus on
          what's important and forget things from time to time. That is why you
          need a second-brainer app like Fimpo to help you free out your mind
          while still keeping track of everything.
        </div>
        <br />
        <div className="underline underline-offset-2">Start from Home</div>
        <div>
          Home in Fimpo is basically a place to collect all your unplanned tasks
          and random thoughts. Throwing everything into Home is the first step
          to get everything out of your mind.
        </div>

        <br />
        <div className="underline underline-offset-2">Add a new task</div>
        <div>
          Once you've decided where to start, it's time to add tasks: Tap the
          "+" button (new task button) in the bottom navigation drawer and start
          typing in the task name. Enter a short but appropriate title and a
          brief description for your task and tap add.
        </div>

        <br />
        <div className="underline underline-offset-2">
          Set priority to your tasks (Eisenhower Matrix)
        </div>
        <div>
          Based on importance and urgency, all tasks can be categorized into
          four types: High priority - important and urgent tasks, Medium
          priority - important but not urgent, Low priority - urgent but not
          important, and none - neither important nor urgent.
        </div>
        <div>
          Fimpo offers you these 4 priority options when adding a task so that
          you can focus on what truly matters. Click on the matrix button
          present in the navigation drawer. You will find four boxes titled
          urgent and important, urgent but not important, not urgent but
          important, and not urgent and not important. Add your task into one of
          these boxes according to the nature of the task.
        </div>
        <br />
        <div className="font-bold">Final words</div>
        <div>
          Managing everything in one place is a bit difficult but Fimpo helps
          you make it happen! Now, it's time to truly get started. Take this
          guide and set off for a more organized and productive life!
        </div>
        <div className="font-light text-center my-4">© 2022 FIMPO Team</div>
      </div>
    </IonContent>
  </IonPage>
);

export default GetStarted;
