/**
 * Contient toutes les informations relatives aux projets.
 */

import cognnoraImg from "../public/img/projects/Coggnora.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";

//TODO check la traduction

const projects = [
  {
    id: 1,
    title: "Coggnora",
    description:
      "Application de productivité bureau conçue pour réduire les distractions numériques. Fonctionnalités : suivi d'activité, surveillance du temps perdu, limite de temps maximum, blocage d'applications et de sites web, et sessions de concentration. Disponible sur le Microsoft Store. Développée avec la stack MERN et Electron.js.",
    image_path: cognnoraImg,
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
  },
  {
    id: 2,
    title: "KisanRaw",
    description:
      "Plateforme de gestion des achats et des files d'attente des agriculteurs alimentée par l'IA. Application web et mobile complète pour la réservation de créneaux, le suivi en temps réel des files d'attente, la génération de jetons numériques, la gestion de la capacité des centres et la prédiction du temps d'attente estimé. Les agriculteurs peuvent suivre leur statut d'achat et de paiement via des notifications SMS/push en temps réel.",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Ankit-kumar-CSE",
    color: "#15803d",
    tags: ["MERN Stack", "React Native", "Supabase"],
  },
  {
    id: 3,
    title: "Ray tracing",
    description:
      "Développement d’un système de ray tracing. L’objectif est de simuler des objets et une caméra dans un espace 3D, puis de reconstruire de manière réaliste ce que la caméra percevrait en ajustant textures, couleurs ou motifs.",
    image_path: rayTracingImg,
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#6d28d9",
  },
];

export default projects;
