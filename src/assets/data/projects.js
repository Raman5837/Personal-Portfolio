import { v4 as uuidv4 } from "uuid";
import CovertApp from "../images/CovertApp.jpg";
import EComProject from "../images/Ecom_Project.jpg";
import URLShortener from "../images/URL-Shortner.jpg";
import AndroidApp from "../images/SendAnnonymously.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "E-Commerce Website",
    desc: "An eCommerce website with features like user profiles, invoices after payment, and more, built using Django, HTML, CSS, and JavaScript.",
    img: EComProject,
    githubUrl: "https://github.com/Raman5837/Make4Me",
    projectUrl: "https://github.com/Raman5837/Make4Me",
  },
  {
    id: uuidv4(),
    name: "Covert - File Sharing",
    desc: "A web app for sharing any type of file with anyone, either through a download link or by scanning a QR code.",
    img: CovertApp,
    githubUrl: "https://github.com/Raman5837/Covert-FileShare",
    projectUrl: "https://covert-file-sharing-app.vercel.app",
  },
  {
    id: uuidv4(),
    name: "Send Anonymously",
    desc: "An Android application that allows sending WhatsApp messages without saving the recipient's contact.",
    img: AndroidApp,
    githubUrl: "https://github.com/Raman5837/Send-Anonymously",
    projectUrl: "https://github.com/Raman5837/Send-Anonymously",
  },
  {
    id: uuidv4(),
    name: "URL Shortener",
    desc: "A custom URL shortener built using Node.js, Express.js, and MongoDB.",
    img: URLShortener,
    githubUrl: "https://github.com/Raman5837/URL-Shortener",
    projectUrl: "https://github.com/Raman5837/URL-Shortener",
  },
];

export default projects;
