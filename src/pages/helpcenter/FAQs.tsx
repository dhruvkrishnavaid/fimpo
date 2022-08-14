import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";

const FAQs: React.FC = () => (
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
        <IonTitle>FAQs</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="px-5 py-5 font-sans">
        <div className="mb-5 text-center">
          <div className="text-3xl font-black">Frequently Asked Questions</div>
        </div>
        <IonAccordionGroup value="first" mode="ios">
          <IonAccordion
            value="first"
            className="rounded-t-2xl border-x border-t">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                What is Fimpo? How does it help me?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              Meet clients, finish new design work, pick up kids at school, do
              laundry… There are just so many different tasks in work and life
              that we have to deal with on a daily basis and those tasks can
              usually change with time. It is quite handleable for our mind if
              it's just 2 or 3 tasks, but what if there are 10 or 20? Our brain
              lose focus on what's important and forget things from time to
              time. That is why you need a second-brainer app like Fimpo to help
              you free out your mind while still keeping track of everything.
              Fimpo is an application that assists you to manage your time
              better by categorizing tasks by urgency, which helps you to find
              out what is to be done next. After opening the application, click
              on the new task button in the bottom navigation drawer. Enter a
              short but appropriate title and a brief description for your task
              and tap add.
            </div>
          </IonAccordion>
          <IonAccordion value="second" className="border-x">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">How can I create a new task?</div>
            </IonItem>
            <div className="ion-padding" slot="content">
              Move tasks from your mind to Fimpo.
              <br />
              <br />
              Start from Home
              <br />
              Home in Fimpo is basically a place to collect all your unplanned
              tasks and random thoughts. Collecting everything into Home is the
              first step to get everything out of your mind.
              <br />
              <br />
              Add a new task
              <br />
              Once you've decided where to start, it's time to add tasks: Tap
              the "+" button (new task button) in the bottom navigation drawer
              and start typing in the task name. Enter a short but appropriate
              title and a brief description for your task and tap add.
            </div>
          </IonAccordion>
          <IonAccordion value="third" className="border-x">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                What is the Eisenhower matrix?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              It is a feature that helps you prioritize your work as per its
              importance. To access it, click on the matrix button present in
              the bottom navigation drawer. You will find four boxes titled
              urgent and important, urgent but not important, not urgent but
              important, and not urgent and not important. Add your task into
              one of these boxes according to the nature of the task.
            </div>
          </IonAccordion>
          <IonAccordion value="fourth" className="border-x">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                How is categorizing my tasks useful to me?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              When you categorize your task as per its importance and urgency it
              helps you do more important work first. This helps you not waste
              your time and make your day more productive.
            </div>
          </IonAccordion>
          <IonAccordion value="fifth" className="border-x">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                How to manage stress and time?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              To get these kinds of tips, click on the tips option present under
              the user section.
            </div>
          </IonAccordion>
          <IonAccordion value="sixth" className="border-x">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">
                What data do you collect? Do you sell my data?
              </div>
            </IonItem>
            <div className="ion-padding" slot="content">
              We collect usage metrics and crash reports for better functioning
              and improvement of our application. We ensure you that we do not
              collect any kind of sensitive information that can be used to
              identify you personally. We also do not sell your information to
              anybody, we work hard to keep it safe in our hands. You may read
              our <a href="/PrivacyPolicy">Privacy Policy</a> for reference.
            </div>
          </IonAccordion>
          <IonAccordion
            value="seventh"
            className="rounded-b-2xl border-x border-b">
            <IonItem slot="header" color="light" className="border-b">
              <div className="py-3 font-sans">What's next?</div>
            </IonItem>
            <div className="ion-padding" slot="content">
              Now that you've learned how categorizing your tasks helps you in
              better time and stress management, it's up to you how you use our
              app to make your life better and set off for a more organized and
              productive lifestyle!
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </div>
    </IonContent>
  </IonPage>
);

export default FAQs;
