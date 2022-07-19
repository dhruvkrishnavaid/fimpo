import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { lottieOptions, qod } from "../utils/functions";

const Home: React.FC = () => {
  const [quote, setQuote] = useState({ q: "", a: "" });

  let date = new Date().getDate();
  useEffect(() => {
    qod({ quote, setQuote });
  }, [quote, date]);

  if (!quote.q || !quote.a) {
    qod({ quote, setQuote });
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="pt-5 px-5 text-3xl font-bold">Welcome, User</div>
        <IonCard
          mode="ios"
          className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <IonCardHeader>
            <IonCardTitle className="text-xl text-center font-semibold text-gray-100">
              Quote of the day
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {quote.q && quote.a ? (
              <>
                <div className="text-base text-gray-200">
                  {'"'}
                  {quote.q}
                  {'"'}
                </div>
                <div className="text-right text-base text-gray-200">
                  {"- "}
                  {quote.a}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Lottie options={lottieOptions} height={200} width={200} />
                <div className="text-base text-gray-200">Loading...</div>
              </div>
            )}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
