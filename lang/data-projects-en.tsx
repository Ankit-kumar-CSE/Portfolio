/**
 * Contient toutes les informations relatives au projets.
 */

import cognnoraImg from "../public/img/projects/Coggnora.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";

const projects = [
  {
    id: 1,
    title: "Coggnora",
    description:
      "A desktop productivity app designed to reduce digital distractions. Features activity tracking, waste-time monitoring, maximum waste limits, app & website blocking, and focus sessions. Available on the Microsoft Store.",
    image_path: cognnoraImg,
    link: "https://github.com/Raseraa0/Wallpaper",
    color: "#c2410c",
    tags: ["Electron.js", "MERN Stack", "Microsoft Store"],
  },
  {
    id: 2,
    title: "Neural Network from scratch",
    description:
      "Implementation of a neural network without using existing AI libraries. The goal is to follow the same principles as Keras with TensorFlow in Python, using various layers that can be easily manipulated.",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Raseraa0/NeuralNetworkFromScratch",
    color: "#0f766e",
    tags: ["Python", "NumPy", "Deep Learning"],
  },
  {
    id: 3,
    title: "Ray tracing",
    description:
      "Development of a ray tracing system. The aim is to simulate objects and a camera in a 3D space, then realistically reconstruct what the camera would perceive by adjusting textures, colors, or patterns.",
    image_path: rayTracingImg,
    link: "https://github.com/Raseraa0/RayTracing",
    color: "#6d28d9",
    tags: ["C++", "3D Graphics", "Rendering"],
  },
];

export default projects;
