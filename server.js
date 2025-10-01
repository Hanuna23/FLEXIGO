// server.js
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 3000; // Replit asigna process.env.PORT automáticamente

app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // en centavos
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
});

app
  .listen(port, () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
  })
  .on("error", (err) => {
    console.log(
      "Puerto ocupado, intenta reiniciar Replit o matar procesos antiguos.",
    );
    process.exit(1);
  });
