import axios from "axios";

export const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../lotties/loading.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export const qod = async ({quote, setQuote}: any) => {
  const res = await axios.get("https://quotes.rest/qod.json?category=inspire");
  const data: any = res.data;
  const q = data.contents.quotes[0].quote;
  const a = data.contents.quotes[0].author;
  if (q !== quote.q || a !== quote.a) {
    setQuote({ q, a });
  }
};
