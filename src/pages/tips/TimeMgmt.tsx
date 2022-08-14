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
import links from "../../json/TimeMgmt.json";

const TimeMgmt: React.FC = () => (
  <IonPage>
    <IonHeader mode="ios" translucent>
      <IonToolbar className="font-sans">
        <IonButtons slot="start">
          <IonBackButton
            text="Back"
            icon={chevronBack}
            defaultHref="/Tips"
            className="text-blue-500 font-sans"
          />
        </IonButtons>
        <IonTitle>Tips on Time Management</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="p-5 font-sans">
        <p>
          Time is perhaps the most important asset in our life. It doesn't
          matter how rich you are, you can never buy time. Time never comes
          back, but still we waste so much time daily. We even waste our time
          thinking about why we are wasting our time{" "}
          <div className="italic inline">(kinda weird)</div>. So I would be
          sharing a method that would help you to take charge of your time and
          because of this you will be able to spend your life in such a
          methodical way that you will not only have control over time but you
          will be able to accomplish whatever you want.
        </p>
        <br />
        <p className="underline underline-offset-2 text-center font-medium">
          TIME ALLOCATION
        </p>
        <p>
          In a day we do a lot of unimportant things, they are only urgent, it
          seems like it needs to be done at that time. Boss called-its urgent,
          parents called it's urgent. So then we stop everything that we were
          doing and start doing that urgent thing. Because of this, the more
          important things are not finished. So, now in your day, wherever you
          spend your time, if you will start allocating it, categorizing it,
          then you will get to know how much time you spend on what all. I will
          share a very simple framework with you to understand this. Take a
          square shape and divide it into four equal parts. On the bottom line
          put the question that "Is the work am I doing important or not?
          Important means necessary for me, yes or no." Then put on the vertical
          side question that, "Is this work urgent or not, yes or no?" Now let
          us look at the first section where that work will be included which is
          neither important nor urgent. Things like watching Netflix, it's
          neither important nor urgent. Sleeping more than needed, it's neither
          important nor urgent.
        </p>
        <p>
          The second section is for the things that are urgent but not
          important. There are many things in it like, parents call, you will
          have to answer, it's urgent but maybe not important. Boss called for
          some unnecessary work, it was not important but urgent for him, not
          even for you but you still had to do it. Maybe something broke in the
          house, the tap is not working, the fan is not working, the bulb broke,
          it's urgent but not important so you will have to do it, then you will
          record your time there.
        </p>
        <p>
          Now, in the third section, you will write things that are important
          but not urgent. Many things which we need to do come in this section
          like exercising - it,s important but not urgent, sleeping properly, on
          time as per the requirement, reading and reading good stuff, not
          random articles, reading books, spending time with right people, they
          are all important but not urgent.
        </p>
        <p>
          And then the fourth section, it's important as well as urgent. This
          could be work you do, it could be your studies which is important but
          since exams are approaching so it's urgent as well, it could be an
          assignment-important as well as urgent, anything that is important and
          urgent comes in this section. Put your work in these 4 sections for a
          week carefully, then you will first time realize where are you
          spending your time, and then you have to move things. You will have to
          move things around so that you spend your time on the right things.
        </p>
        <br />
        <p>
          So analyze where are you spending your time, use your time wisely and
          ROCK IT! FOR MORE TIPS ON TIME MANAGEMENT YOU CAN REFER TO THESE
          AMAZING VIDEOS.
        </p>
        <div className="flex flex-col">
          {links.map(link => (
            <iframe
              src={link.src}
              title={link.id}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full md:w-48 h-48 md:56 my-4 rounded-lg"
            />
          ))}
        </div>
      </div>
    </IonContent>
  </IonPage>
);

export default TimeMgmt;
