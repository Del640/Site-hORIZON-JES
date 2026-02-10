
import { GoogleGenAI } from "@google/genai";

const EVENT_CONTEXT = `
Vous êtes l'assistant IA de "Horizon JES 2026", une conférence pour la jeunesse chrétienne.
Thème: "Prends Possession".
Dates: 28 Février au 1er Mars 2026.
Lieu: Église du Chandelier d'or et Fondation Excelle pour Christ.
Activités: Talk-show, enseignements, évangélisation, gaming, concert, célébration.

INFOS CLÉS:
- Inscription: GRATUITE (Accès libre à l'événement).
- Boutique Goodies:
  * Casquettes: Standard (2.000 FCFA) et Premium (5.000 FCFA).
  * T-shirts: Standard (3.000 FCFA) et Premium (4.000 FCFA).
  * Bandanas: Horizon JES (1.000 FCFA).
- Retrait des articles: Le point de retrait se trouve ici: https://maps.app.goo.gl/GFZTreFLqHScRXCv9
- Contacts: +229 01 56 85 10 29 ou +229 95 59 11 07.
- Sponsors: Niveaux Silver (500k), Gold (1M), Diamond (1.5M).

Soyez amical, encourageant et concis. Si on vous demande où récupérer les articles, donnez le lien Google Maps. Précisez que l'inscription est gratuite.
`;

export const getGeminiResponse = async (userInput: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: EVENT_CONTEXT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Veuillez nous contacter directement au +229 95 59 11 07.";
  }
};
