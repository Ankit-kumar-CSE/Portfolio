/**
 * Contient toutes les informations relatives au skills.
 */

import dockerImg from "../public/img/skills/docker.svg";
import gitImg from "../public/img/skills/git.svg";
import csharpImg from "../public/img/skills/csharp.svg";
import cppImg from "../public/img/skills/cpp.svg";
import javaImg from "../public/img/skills/java.svg";
import reactImg from "../public/img/skills/react.svg";
import nodeImg from "../public/img/skills/node.svg";
import typescriptImg from "../public/img/skills/typescript.svg";
import pytorchImg from "../public/img/skills/pytorch.svg";
import tensorflowImg from "../public/img/skills/tensorflow.svg";
import pythonImg from "../public/img/skills/python.svg";
import mongodbImg from "../public/img/skills/mongodb.svg";
import expressImg from "../public/img/skills/express.svg";
import nextjsImg from "../public/img/skills/nextjs.svg";
import postgresqlImg from "../public/img/skills/postgresql.svg";

const skills = [
  {
    id: 1,
    title: "Artificial Intelligence",
    subSkills: [
      {
        name: "Python",
        image: pythonImg,
      },
      {
        name: "TensorFlow",
        image: tensorflowImg,
      },
      {
        name: "PyTorch",
        image: pytorchImg,
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    subSkills: [
      {
        name: "MongoDB",
        image: mongodbImg,
      },
      {
        name: "Express",
        image: expressImg,
      },
      {
        name: "React",
        image: reactImg,
      },
      {
        name: "Node.js",
        image: nodeImg,
      },
    ],
  },
  {
    id: 3,
    title: "Object-Oriented",
    subSkills: [
      {
        name: "Java",
        image: javaImg,
      },
      {
        name: "C++",
        image: cppImg,
      },
      {
        name: "C#",
        image: csharpImg,
      },
    ],
  },
  {
    id: 4,
    title: "Database & DevOps",
    subSkills: [
      {
        name: "PostgreSQL",
        image: postgresqlImg,
      },
      {
        name: "Git",
        image: gitImg,
      },
      {
        name: "Docker",
        image: dockerImg,
      },
    ],
  },
];

export default skills;
