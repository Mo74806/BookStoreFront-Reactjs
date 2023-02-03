/* eslint-disable */
import axios from "axios";
import Cookies from "js-cookie";
const stripe = Stripe(process.env.REACT_APP_STRIPE_KEY);
console.log(process.env.REACT_APP_STRIPE_KEY);
export const booking = async (purchaseId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/purchaces/createSession/${purchaseId}`,
      { headers: { authorization: Cookies.get("token") } }
    );

    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    // showAlert("error", err);
  }
};
