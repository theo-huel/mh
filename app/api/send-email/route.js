// app/api/send-email/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration de Nodemailer (utilise les variables d'environnement de Next.js)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // Convertir la chaîne en booléen
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Fonction POST pour gérer les requêtes d'envoi d'e-mails
export async function POST(request) {
  try {
    // Analyse le corps de la requête JSON
    const { name, email, subject, message } = await request.json();

    // Vérifie si toutes les données nécessaires sont présentes
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Tous les champs du formulaire sont requis.' },
        { status: 400 }
      );
    }

    // 1. Envoi de l'e-mail à ta boîte de réception (l'administrateur du site)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Nouveau message de contact : ${subject}`,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    console.log(`E-mail envoyé à l'administrateur depuis ${email}`);

    // 2. Envoi de l'e-mail de confirmation automatique à l'expéditeur du formulaire
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Confirmation de réception de votre message - MH Business`,
      html: `
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et vous remercions de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.</p>
        <p>Voici un récapitulatif de votre message :</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <p>Cordialement,</p>
        <p>L'équipe MH Business</p>
      `,
    };

    await transporter.sendMail(userMailOptions);
    console.log(`E-mail de confirmation envoyé à ${email}`);

    // Réponse de succès
    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    // En cas d'erreur, renvoie une réponse d'erreur
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi du message.', error: error.message },
      { status: 500 }
    );
  }
}
