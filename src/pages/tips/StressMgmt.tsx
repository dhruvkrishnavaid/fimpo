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
import links from "../../json/StressMgmt.json";

const StressMgmt: React.FC = () => (
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
        <IonTitle>Tips on Stress Management</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="p-5 font-sans">
        <p>
          We could all use a little less stress in our lives, am I right?
          Between everyday work stress to maintaining relationships, navigating
          social engagements and wrangling the kids stress, there's more than
          enough stress to go around. Luckily, there are ways to ease your
          stress levels if you set your mind to it.
        </p>
        <p>
          Clinical psychologist Adam Borland, PHD, explains how stress works and
          healthy ways we can help manage stress before it gets out of control.
        </p>
        <br />
        <div className="underline underline-offset-2 text-center font-medium">
          What is stress?
        </div>
        <p>
          Stress is your body's response to a challenge or demand. Everyone
          experiences stress, which can be triggered by a range of events, from
          small daily hassles to major changes like a divorce or job loss. The
          stress response includes physical components like an elevated heart
          rate and blood pressure, thoughts and personal beliefs about the
          stressful event, and emotions, including fear and anger.
        </p>
        <p>
          “Although we often think of it as being negative, stress can also come
          from positive changes in your life, like getting a promotion at work
          or having a new baby,” says Dr. Borland.
        </p>
        <br />
        <div className="underline underline-offset-2 text-center font-medium">
          How can we handle stress in healthy ways?
        </div>
        <p>
          Stress serves an important purpose — it enables us to respond quickly
          to threats and avoid danger. But lengthy exposure to stress may lead
          to mental health difficulties like anxiety and depression, or
          increased physical health problems.
        </p>
        <p>
          “A large body of research suggests that increased stress levels
          interfere with your ability to deal with physical illness,” says Dr.
          Borland. “While no one can avoid all stress, you can work to handle it
          in healthy ways that increase your potential to recover.”
        </p>
        <br />
        <ol className="list-decimal pl-5">
          <li>
            Eat and drink to optimize your health
            <div>
              Some people try to reduce stress by drinking alcohol or eating too
              much. These actions may seem to help in the moment, but actually
              may add to stress in the long run. Caffeine also can compound the
              effects of stress. While consuming a healthy, balanced diet can
              help combat stress.
            </div>
          </li>
          <li>
            Exercise regularly
            <div>
              In addition to having physical health benefits, exercise has been
              shown to be a powerful stress reliever. Consider noncompetitive
              aerobic exercise, strengthening with weights or movement
              activities like yoga or Tai Chi, and set reasonable goals for
              yourself. Aerobic exercise has been shown to release endorphins —
              natural substances that help you feel better and maintain a
              positive attitude.
            </div>
          </li>
          <li>
            Stop using tobacco and nicotine products
            <div>
              People who use nicotine often refer to it as a stress reliever.
              However, nicotine actually places more stress on your body by
              increasing physical arousal and reducing blood flow and breathing.
              Plus, it can worsen chronic pain, so if you're experiencing
              prolonged tension and body aches, smoking won't help.
            </div>
          </li>
          <li>
            Study and practice relaxation techniques
            <div>
              Taking the time to relax every day helps manage stress and protect
              your body from the effects of stress. You can choose from a
              variety of techniques, such as deep breathing, guided imagery,
              progressive muscle relaxation, and mindfulness meditation. Many
              online and smartphone apps provide guidance on these techniques.
              Although some require purchase costs, many are available free of
              charge.
            </div>
          </li>
          <li>
            Reduce triggers of stress
            <div>
              If you're like most people, your life may be filled with too many
              demands and too little time. For the most part, these demands are
              ones we've chosen. But you can free up time by practicing
              time-management skills like asking for help when it's appropriate,
              setting priorities, pacing yourself and reserving time to take
              care of yourself.
            </div>
          </li>
          <li>
            Examine your values and live by them
            <div>
              The more your actions reflect your beliefs, the better you'll
              feel, no matter how busy your life is. Use your values when
              choosing your activities.
            </div>
            <div>
              “Considering the stressful demands and responsibilities we face on
              a daily basis, it's important to engage in activities that are in
              line with our values and speak to us on a personal level,”
              encourages Dr. Borland.
            </div>
          </li>
          <li>
            Assert yourself
            <div>
              It's OK to say “no” to demands on your time and energy that'll
              place too much stress on you. You don't always have to meet the
              expectations of others.
            </div>
          </li>
          <li>
            Set realistic goals and expectations
            <div>
              It's also OK — and healthy — to realize you can't be 100%
              successful at everything all at once. Be mindful of the things you
              can control and work on accepting the things that you can't
              control.
            </div>
          </li>
          <li>
            Sell yourself to yourself
            <div>
              When you're feeling overwhelmed, remind yourself of what you do
              well. There are ways you can build a healthy sense of self-esteem.
            </div>
          </li>
          <li>
            Try biofeedback
            <div>
              This behavioral technique helps you learn stress reduction skills
              by providing information about muscle tension, heart rate and
              other vital signs as you attempt to relax. It's used to gain
              control over certain bodily functions that cause tension and
              physical pain. Biofeedback can be used to help you learn how your
              body responds in stressful situations, and how to cope better. If
              a headache, such as a migraine, begins slowly, many people can use
              biofeedback to stop the attack before it becomes full-blown.
            </div>
          </li>
        </ol>
        <br />
        <p>
          If you're interested in any of these techniques, ask your healthcare
          provider for more information or other suggestions they may have.
          Often, counseling can help you recognize stress factors that may not
          even be readily obvious.
        </p>
        <br />
        <div className="underline underline-offset-2 text-center font-medium">
          What to do if you have trouble sleeping?
        </div>
        <p>
          Sleep is often sacrificed when you're overwhelmed with stress. You may
          experience insomnia because of discomfort, stress from personal
          concerns, or side effects from your medications. If you can't sleep,
          try these tips:
        </p>
        <ol className="list-decimal pl-5">
          <li>
            Establish a regular sleep schedule: go to bed and get up at the same
            time every day.
          </li>
          <li>
            Make sure your bed and surroundings are comfortable. Arrange the
            pillows so you can maintain a comfortable position.
          </li>
          <li>Keep your bedroom dark and quiet.</li>
          <li>
            Use your bedroom for sleeping only. Don't work or watch TV in your
            bedroom.
          </li>
          <li>
            Avoid napping too much during the day. At the same time, remember to
            balance activity with periods of rest.
          </li>
          <li>
            If you feel nervous or anxious, talk to your spouse, partner or a
            trusted friend. Get your troubles off your mind.
          </li>
          <li>Listen to relaxing music.</li>
          <li>
            Don't rely on sleeping pills. They can be harmful when taken with
            other medications. Use them only if recommended for a brief period
            by your healthcare provider if other nonmedication methods don't
            work.
          </li>
          <li>
            Take diuretics, or “water pills,” earlier if possible, so you don't
            have to get up in the middle of the night to use the bathroom.
          </li>
          <li>
            If you can't sleep, get up and do something relaxing until you feel
            tired. Don't stay in bed worrying about when you're going to fall
            asleep.
          </li>
          <li>Avoid caffeine.</li>
          <li>
            Maintain a regular exercise routine, but don't exercise within two
            to three hours before the time you go to bed.
          </li>
        </ol>
        <br />
        <p>
          These tips will surely help you if you follow them consistently. FOR
          MORE TIPS YOU CAN REFER TO THESE AMAZING VIDEOS:-
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

export default StressMgmt;
