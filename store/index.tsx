import CONTACT_LIST_DATA from "./contact-list-data.json";
import SKILLS_DATA from "./skills-data.json";
import WORK_EXPERIENCE_DATA from "./work-experience.json";
import PROJECT_EXPERIENCE_DATA from "./project-experience.json";

const store = {
  name: "Mark Toh",
  contact: {
    data: CONTACT_LIST_DATA,
  },
  skills: {
    title: "Front-end Engineer, Full Stack Engineer, Tech Lead",
    data: SKILLS_DATA,
  },
  workExperience: {
    title: "Work Experience",
    data: WORK_EXPERIENCE_DATA,
  },
  projectExperience: {
    title: "Project Experience",
    data: PROJECT_EXPERIENCE_DATA,
  },
};

export default store;
