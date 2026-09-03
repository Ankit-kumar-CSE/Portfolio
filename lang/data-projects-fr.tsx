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
    title: "Réseau de neurones depuis zéro",
    description:
      "Implémentation d’un réseau de neurones sans utiliser de bibliothèques d’IA existantes. Le but est de suivre les mêmes principes que Keras avec TensorFlow en Python, à l’aide de différentes couches facilement manipulables.",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#0f766e",
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
