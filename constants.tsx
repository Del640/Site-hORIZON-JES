
import React from 'react';
import { NavItem, Product, SponsorLevel } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', page: 'home' },
  { label: 'Programme', page: 'program' },
  { label: 'Sponsors', page: 'sponsors' },
  { label: 'Boutique', page: 'shop' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Casquette Horizon Jes",
    price: "2.000 FCFA",
    description: "Casquette officielle Horizon JES.",
    image: "/casquette_horizon_jes.jpg",
    whatsappMsg: "Bonjour Horizon JES 2026, Je souhaiterais commander une Casquette Horizon Jes à 2.000 FCFA."
  },
  {
    id: 2,
    name: "T-Shirt Horizon JES Standard",
    price: "3.000 FCFA",
    description: "T-shirt coton confortable avec logo officiel.",
    image: "/t_shirt_horizon_jes.jpg",
    whatsappMsg: "Bonjour Horizon JES 2026, Je souhaiterais commander un T-Shirt Standard à 3.000 FCFA."
  },
  {
    id: 3,
    name: "T-Shirt Horizon JES Premium",
    price: "4.000 FCFA",
    description: "T-shirt haute qualité, textile premium et impression longue durée.",
    image: "/t_shirt_horizon_jes.jpg",
    whatsappMsg: "Bonjour Horizon JES 2026, Je souhaiterais commander un T-Shirt Premium à 4.000 FCFA."
  },
  {
    id: 4,
    name: "Bandana Horizon JES",
    price: "1.000 FCFA",
    description: "Bandana stylé Horizon JES - L'accessoire indispensable pour l'événement.",
    image: "/bandana_noir.webp",
    whatsappMsg: "Bonjour Horizon JES 2026, Je souhaiterais commander un Bandana Horizon JES à 1.000 FCFA."
  }
];

export const SPONSOR_LEVELS: SponsorLevel[] = [
  {
    level: "Silver",
    price: "500.000 FCFA",
    colorClass: "border-gray-300",
    benefits: [
      "Votre logo à l'entrée du site de l'évènement.",
      "Offre spéciale de communication sur votre marque.",
      "Votre logo sur les t-shirt du staff.",
      "2 minutes de communication sur votre produit sur scène."
    ]
  },
  {
    level: "Gold",
    price: "1.000.000 FCFA",
    colorClass: "border-yellow-400",
    benefits: [
      "Tous les avantages du niveau Silver.",
      "Logo du sponsor sur tous les visuels de communication.",
      "Exclusivité de vos produits sur le site.",
      "3 minutes de communication sur votre produit sur scène."
    ]
  },
  {
    level: "Diamond",
    price: "1.500.000 FCFA",
    isDiamond: true,
    colorClass: "border-indigo-500 bg-horizon-black",
    benefits: [
      "Tous les avantages du niveau Gold.",
      "Exclusivité de vos produits garantie.",
      "Placement de vos produits dans le spot vidéo de l'évènement.",
      "Placement de panneaux de communication à l'entrée du site.",
      "5 minutes exclusives sur la publicité de votre produit sur scène."
    ]
  }
];
