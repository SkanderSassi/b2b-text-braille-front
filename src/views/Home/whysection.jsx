import { React } from "react";
import classes from "./home.module.css";

const sectionItems = [
  {
    title: "Create UX magic",
    icon_path: "./icon_1.jpg",
    content:
      "Enable instant document processing thanks to our real-time API, and free your users from manual data entry.",
  },
  {
    title: "Integrate in no time",
    icon_path: "./icon_1.jpg",
    content:
      "Prototype ideas and build production ready features with documentation and tools for every stack.",
  },
  {
    title: "Focus on your core product",
    icon_path: "./icon_1.jpg",
    content:
      "Concentrate your efforts on building the best product. We handle performances, reliability and scalability.",
  }
];

const WhySection = () => {
    return(
    <div className={classes.why_section}>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia quis similique exercitationem. Corporis ducimus harum voluptates nulla in ea iure voluptas, deserunt soluta eveniet ut fugiat facere necessitatibus sunt!
        </div>
    )
};

export default WhySection;