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
    title: "KisanRaw",
    description:
      "AI-Powered Farmer Procurement & Queue Management platform. Full-stack web & mobile app streamlining farmer procurement, slot booking, and queue management with real-time queue tracking, digital token generation, centre capacity management, and estimated waiting-time prediction. Farmers can track procurement and payment status with real-time SMS/push notifications.",
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/Ankit-kumar-CSE",
    color: "#15803d",
    tags: ["MERN Stack", "React Native", "Supabase"],
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
