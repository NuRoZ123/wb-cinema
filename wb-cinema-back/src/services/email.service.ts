import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConfirmationEmail = async (
  to: string,
  film: string,
  dateHeure: string,
  nbPlaces: number
) => {
  try {
    const response = await resend.emails.send({
      from: process.env.SENDER_EMAIL as string,
      to: to,
      subject: "Confirmation de réservation",
      html: `
        <h1>Confirmation de votre réservation</h1>
        <p>Bonjour,</p>
        <p>Vous avez réservé <strong>${nbPlaces}</strong> place(s) pour le film <strong>${film}</strong>.</p>
        <p>Date de la séance : <strong>${new Date(
          dateHeure
        ).toLocaleString()}</strong></p>
        <p>Merci pour votre réservation !</p>
      `,
    });

    console.log("Email envoyé avec succès :", response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
  }
};
