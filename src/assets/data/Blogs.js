import { v4 as uuidv4 } from "uuid";
import LList from "../images/LList.png";
import Babel from "../images/Babel.png";

const Blogs = [
  {
    id: uuidv4(),
    name: "Singly Linked List Implementation In Python",
    desc: "Linked List is one of the most used Data structures. But when we have arrays to use then why one should use it. ? Well Linked lists differ from arrays in the way that they store elements in memory. While arrays use a contiguous memory block to store references to their data, linked lists store references as part of their own elements. { Click On Read More Button To Read This Blog. }",
    img: LList,
    url: "https://hashnode.com/post/single-linked-list-implementation-in-python-cksbrb9yv04ql6us1avk64nsm",
  },
  {
    id: uuidv4(),
    name: "What is Babel ? How it is important for React.Js",
    desc: "Babel is a very famous transpiler that basically allows us to use future JavaScript in today's browsers. In simple words, it can convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 which is not fully supported by all the browsers and hence we make use of a tool such as `babel` so that we can convert it into the code that today's browser understands.  { Click On Read More Button To Read This Blog. }",
    img: Babel,
    url: "https://hashnode.com/post/what-is-babel-and-how-it-is-important-for-reactjs-cksbtwg6f059w6us1ekak1xe1",
  },
];

export default Blogs;
