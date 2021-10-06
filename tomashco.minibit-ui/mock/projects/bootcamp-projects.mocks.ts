import serverlessImg from "./img/AuctionServiceArch.png";
import colorsAppImg from "./img/colorsApp.png";
import yelpCampImg from "./img/yelpCamp.png";

export const mockBootcampProjectsList = [
  {
    title: "Serverless Auctions Platform",
    description:
      "Project developed following the course Serverless Framework Bootcamp: Node.js, AWS & Microservices by Ariel Weinberger. Aim of the course has been to develop a reliable and scalable Serverless application, following the microservices architecture. This application has been deployed on AWS using the Serverless framework to build the CloudFormation infrastructure (infrastructure by code).",
    techStackLabels: ["Node.js", "Serverless", "AWS"],
    src: serverlessImg,
    dateStart: new Date("January 15, 2021"),
    primaryButtonText: "View Code",
    primaryButtonLink: "https://github.com/tomashco/serverless-bootcamp",
  },
  {
    title: "YelpCamp",
    description:
      "Yelpcamp is a campground rating app, where users can create their own campgrounds, view and comment on others' campgrounds. It is a full stack app developed using Express and MongoDb and deployed on Heroku.",
    techStackLabels: [
      "Node.js",
      "Express.js",
      "Passport.js",
      "jQuery",
      "MongoDB",
    ],
    src: yelpCampImg,
    dateStart: new Date("May 15, 2020"),
    primaryButtonText: "View Code",
    primaryButtonLink: "https://github.com/tomashco/yelpCamp",
    secondaryButtonText: "Visit Site",
    secondaryButtonLink: "https://obscure-falls-44780.herokuapp.com/",
  },
  {
    title: "The React Colors App",
    description:
      "This application has a lot of features, i.e. drag and drop, animations, route transitions, complex form validations, and more.",
    techStackLabels: [
      "React Context",
      "Hooks",
      "custom hooks",
      "Router",
      "JSS",
      "Material UI",
    ],
    src: colorsAppImg,
    dateStart: new Date("April 15, 2020"),
    primaryButtonText: "View Code",
    primaryButtonLink: "https://github.com/tomashco/colorApp",
    secondaryButtonText: "Visit Site",
    secondaryButtonLink: "https://tomashco.github.io/colorApp/",
  },
];
