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

const PrivacyPolicy: React.FC = () => (
  <IonPage>
    <IonHeader mode="ios" translucent>
      <IonToolbar className="font-sans">
        <IonButtons slot="start">
          <IonBackButton
            text="Back"
            icon={chevronBack}
            defaultHref="/MoreInfo"
            className="text-blue-500 font-sans"
          />
        </IonButtons>
        <IonTitle>Privacy Policy</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonTitle className="mt-6 mb-3 text-3xl text-center font-black font-sans">
        Privacy Policy
      </IonTitle>
      <div className="px-5 py-10 font-sans">
        <div className="font-bold">
          When you use our services, you're trusting us with your information.
          We understand this is a big responsibility and we work hard to protect
          your information and put you in control.
        </div>
        <div>
          By accessing or using the Services, you agree to this Privacy Policy,
          and our Terms of Service. If you have any questions about this Privacy
          Policy, you can contact us.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Information FIMPO Collects
        </p>
        <div className="font-bold">Your activity & apps</div>
        <div>
          At the time you register for FIMPO, you voluntarily give us
          information such as your name and email address. You have access and
          can update this information under your personal Account Settings at
          any time. We also collect aggregated, anonymous user data about the
          use of the app.
        </div>
        <div className="bold">Your browsers & devices</div>
        <div>
          We collect information about the browsers and devices you use to
          access FIMPO. The user data we collect is used to enhance FIMPO and
          the quality of our service. We only collect personal data required to
          deliver our services, and we only store it to the extent that it is
          essential to perform these services.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Why Does FIMPO Collects Data?
        </p>
        <div>
          We use data to build better services. Your information will not be
          shared with others and will only be used internally for the purposes
          described below:
        </div>
        <div className="font-bold">Provide our services</div>
        <div>
          We use your information to deliver our services or information you
          requested, and to process and complete any transactions.
        </div>
        <div className="font-bold">Maintain & improve our services</div>
        <div>
          We also use your information to ensure our services are working as
          intended, such as tracking outages or troubleshooting issues that you
          report to us. And we use your information to make improvements to our
          services - for example, to analyze usage and trends with anonymous
          user data, and to improve the quality of our service and user
          experience.
        </div>
        <div className="font-bold">Communicate with you</div>
        <div>
          FIMPO collects email addresses from those who communicate with us via
          email, as well as information provided through voluntary activities
          such as site registration or survey participation. We use the
          information we collect to interact with you directly.
        </div>
        <div className="font-bold">
          Protect FIMPO, our users, and the public
        </div>
        <div>
          <div>
            We use information to help improve the safety and reliability of our
            services. This includes detecting, preventing, and responding to
            fraud, abuse, security risks, and technical issues that could harm
            FIMPO, our users, or the public.
          </div>
          <p>
            We use different technologies to process your information for these
            purposes. We'll ask for your consent before using your information
            for a purpose that isn't covered in this Privacy Policy.
          </p>
          <p>
            You're also welcome to contact us to ask for our confirmation
            whenever you feel concerned about how your personal information is
            being processed, where and for what purpose.
          </p>
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Your Privacy Controls
        </p>
        <div>
          While FIMPO owns the FIMPO application's code, databases, and all
          rights, you retain all rights to your data. You have choices regarding
          the information we collect and how it's used. FIMPO will never sell
          your personal data with a third party, and we will never share data to
          third parties without your permission. When absolutely necessary,
          FIMPO uses third party services and hosting partners who are
          GDPR-compliant. In such instances, we take essential security methods
          to guarantee that we comply with GDPR when sending and receiving data
          from third parties.
        </div>
        <div className="font-bold">Cookies</div>
        <div>
          Cookies are required on FIMPO's Website. We use them to collect
          visitors' preferences and thus to better optimize the user experience.
          Users can disable cookies in their browser settings. But please note
          that our services rely on cookies to function properly, and you may
          not be able to access certain features on our Website after disabling
          them.
        </div>
        <div className="font-bold">Data Retention & Secure</div>
        <div>
          <div>
            FIMPO is built with strong security features that continuously
            protect your information. SSL protocol secures all data and
            information transmitted with Service. The insights we gain from
            maintaining our services help us detect and automatically block
            security threats from ever reaching you. And if we do detect
            something risky that we think you should know about, we'll notify
            you and help guide you through steps to stay better protected.
          </div>
          <p>
            We work hard to protect you and FIMPO from unauthorized access,
            alteration, disclosure, or destruction of information we hold.
          </p>
        </div>
        <div className="font-bold">How long we store your information</div>
        <div>
          We keep the information until you delete your account, and the
          information will keep in our backup archives for 90 days after the
          account is deleted. For subscriptions and transaction records, we
          retain this information after the account is deleted.
        </div>
        <div className="font-bold">Data Deletion</div>
        <div>
          You can delete your FIMPO account with "Avatar - Settings - Account
          and Security" in FIMPO website. If you terminate your Account, any
          association between your Account and information we store will no
          longer be accessible through your Account. We will stop providing
          products and/or services to you and delete your personal information
          as required by you.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Changes to This Policy
        </p>
        <div>
          <div>
            If our Privacy Policy changes at some time in the future, we will
            not reduce your rights under this Privacy Policy without your
            explicit consent. We always indicate the date the latest changes
            were published. If changes are significant, we'll provide a more
            prominent notice (including, for certain services, email
            notification of Privacy Policy changes).
          </div>
          <p>
            Please check back periodically to keep informed of updates or
            changes to this Privacy Policy. By continuing to access and to use
            FIMPO, you are agreeing to be bound by the revised policy.
          </p>
        </div>
        <div className="font-bold">
          To read more details and frequently asked questions about FIMPO's
          privacy and terms, please read the FAQ in our Help Center.
        </div>
        <div className="font-light text-center my-4">© 2022 FIMPO Team</div>
      </div>
    </IonContent>
  </IonPage>
);

export default PrivacyPolicy;
