import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    
    return (
        <div>
            <section className="text-center my-8 p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment</h2>
                <p className="text-lg text-gray-600 leading-relaxed">Pay to confirm your Tour</p>
            </section>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;