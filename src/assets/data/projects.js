import { v4 as uuidv4 } from 'uuid';
import EcomProject from '../images/Ecom_Project.jpg';
import AndroidApp from '../images/SendAnnonymously.jpg'
import CovertApp from '../images/CovertApp.jpg'
import PizzaCart from '../images/PizzaCart.png';
import ChatBot from '../images/ChatBot.jpg';
import TalkingDict from '../images/TalkingDict.jpg';
import URLShortener from '../images/URL-Shortner.jpg';


const projects = [
  {
    id: uuidv4(),
    name: "E-Commerce Website",
    desc: "An Ecommerce Website With Features Likes User Profile, Invoice After Payment And Many More Using Django, HTML, CSS and JavaScript",
    img: EcomProject,
    githubUrl: "https://github.com/Raman5837/Make4Me",
    projectUrl: "https://github.com/Raman5837/Make4Me"
  },
  {
    id: uuidv4(),
    name: "Covert - File Sharing",
    desc: "A Web App To Share Anytype Of File With Anyone, By sharing download link or by scanning QR Code ",
    img: CovertApp,
    githubUrl: "https://github.com/Raman5837/Covert-FileShare",
    projectUrl: "https://covert-file-sharing-app.vercel.app"
  },
  {
    id: uuidv4(),
    name: "Send Anonymously",
    desc: "An Android Application For Sending WhatsApp Messages Without Saving Contact Of The Person.",
    img: AndroidApp,
    githubUrl: "https://github.com/Raman5837/Send-Anonymously",
    projectUrl: "https://github.com/Raman5837/Send-Anonymously"
  },
  {
    id: uuidv4(),
    name: "URL Shortener",
    desc: "A Custom URL Shortener Using NodeJs , MongoDB , ExpressJs",
    img: URLShortener,
    githubUrl: "https://github.com/Raman5837/URL-Shortener",
    projectUrl: "https://github.com/Raman5837/URL-Shortener"
  },
  {
    id: uuidv4(),
    name: "React Cart Component",
    desc: "MultiPage Pizza Shoping Cart using React.Js",
    img: PizzaCart,
    githubUrl: "https://github.com/Raman5837/React-Cart",
    projectUrl: "https://github.com/Raman5837/React-Cart"
  },
  {
    id: uuidv4(),
    name: "AI ChatBot",
    desc: "A GUI Based ChatBot using Python",
    img: ChatBot,
    githubUrl: "https://github.com/Raman5837/ChatBot",
    projectUrl: "https://github.com/Raman5837/ChatBot"
  },
  {
    id: uuidv4(),
    name: "Talking Dictionary",
    desc: "A GUI Base Python Talking-Dictionary",
    img: TalkingDict,
    githubUrl: "https://github.com/Raman5837/Talking-Dictionary",
    projectUrl: "https://github.com/Raman5837/Talking-Dictionary"
  },

];

export default projects;
