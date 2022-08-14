import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark, chevronBack, close } from "ionicons/icons";

const Suggestions: React.FC = () => (
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
        <IonTitle>Suggestions</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="px-5 py-5 font-sans">
        <div className="mb-5 text-center">
          <div className="text-3xl font-black">Suggestions</div>
        </div>
        <div className="py-5">
          GTD is a time-management method that helps people get organized and
          stay focused on their tasks.
        </div>
        <IonAccordionGroup value="first" mode="ios">
          <IonAccordion
            value="first"
            className="rounded-t-2xl border-x border-t">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                Why you might need GTD in your life?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              Here's a great example: “Millions long for immortality who don't
              know what to do with themselves on a rainy Sunday afternoon.”
            </div>
          </IonAccordion>
          <IonAccordion value="second" className="border-x">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                How to practice GTD in real life?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              Capture: Write down what's in your mind
              <br />
              Clarify: Know your expectation and clarify an actionable "Next
              Action"
              <br />
              Organize: Add your "Next Action" to a to-do list
              <br />
              Reflect: Check frequently for updates
              <br />
              Engage: Decide what to do now
              <br />
              Tip: "Next Action" is the kind of action that can be executed
              without any further thinking.
              <br />
              Example: Your expectation: have a good holiday
              <br />
              Your "Next Action":
              <br />
              <IonIcon icon={close} className="text-red-500 mx-2" />
              Wrong: take a trip to Thailand
              <br />
              <IonIcon icon={checkmark} className="text-green-500 mx-2" />
              Correct: check for an air ticket to Thailand on booking.com
            </div>
          </IonAccordion>
          <IonAccordion
            value="third"
            className="rounded-b-2xl border-x border-b">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                What role does Fimpo play here?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              Capture: Add a task named "holiday plan"
              <br />
              Clarify: Planning a trip to Thailand would be great and
              actionable. Break it into several small tasks (book tickets,
              search for a hotel, contact local friends, etc)
              <br />
              Organize: Sort each task as per your priority (transports,
              accommodation, etc.)
              <br />
              Reflect: Check back every day and make necessary changes
              <br />
              Engage: Start booking an air ticket now
              <br />
              <br />
              Go ahead and start making your life better with Fimpo!
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </div>
    </IonContent>
  </IonPage>
);

export default Suggestions;
