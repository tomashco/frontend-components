import mamaKitchenImg from "./img/mamaKitchenThumbnail.png";
import portfolioImg from "./img/portfolio.png";

export const mockPersonalProjectsList = [
  {
    title: "Personal Portfolio",
    description: "This website has been made ",
    techStackLabels: ["React", "Bit", "Typescript"],
    src: portfolioImg,
    dateStart: new Date("September 15, 2021"),
    dateEnd: new Date("October 15, 2021"),
    primaryButtonText: "View Code",
    primaryButtonLink: "https://bit.dev/tomashco/minibit-ui/",
    secondaryButtonText: "View Site",
    secondaryButtonLink: "https://tomashco.github.io",
  },
  {
    title: "Mamakitchen",
    description:
      "Mamakitchen aims to be the first marketplace to sell homemade food, connecting the chef with the customer. The idea is that every person could be able to sell his own food in his neightborhood and start a small business.",
    techStackLabels: ["React", "Redux", "AntDesign", "Firebase"],
    dateStart: new Date("July 15, 2020"),
    dateEnd: new Date("September 15, 2020"),
    src: mamaKitchenImg,
    primaryButtonText: "View Code",
    primaryButtonLink: "https://github.com/tomashco/mamakitchen",
    secondaryButtonText: "View Site",
    secondaryButtonLink: "https://mamakitchen-989f4.firebaseapp.com/",
  },
];
