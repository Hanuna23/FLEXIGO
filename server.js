// server.js
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir frontend estático (desde dist/public en la raíz del proyecto)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist", "public")));

// Endpoint de Stripe
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // en centavos
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(400).send({ error: { message: error.message } });
  }
});

// Catch-all para React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "public", "index.html"));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`✅ Server listening at http://localhost:${port}`);
});
