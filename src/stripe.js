/* eslint-disable */
import axios from "axios";
import Cookies from "js-cookie";
const stripe = Stripe(
  "pk_test_51MWMseAAtmvqepsFm3hH9aq5YYQPJWNcOWnBnOLaDRCJQ4NrRmjwj4gGZkUJZeaglo3UxnvbWS3qzznBznRpOpYu00RFsWdOv4"
);

export const booking = async (purchaseId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios.get(
      `${process.env.REACT_APP_BASE_URL}purchaces/createSession/${purchaseId}`,
      { headers: { authorization: Cookies.get("token") } }
    );

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    // showAlert("error", err);
  }
};
