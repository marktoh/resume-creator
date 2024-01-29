import BrandName from "../../components/BrandName/BrandName";
import ContactList from "./ContactList";
import Skills from "../../components/Skills/Skills";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import WorkExperienceCard from "../../molecules/WorkExperienceCard/WorkExperienceCard";
import store from "../../../store/index";

function NameSection() {
  const { name } = store;
  return (
    <section>
      <BrandName title={name} />
    </section>
  );
}
function ContactSection() {
  const { contact } = store;
  return (
    <section>
      <ContactList items={contact?.data} />
    </section>
  );
}
function SkillsSection() {
  const { skills } = store;
  return (
    <section>
      <SectionHeading title={skills?.title} />
      <Skills skills={skills?.data} />
    </section>
  );
}
function WorkExperienceSection() {
  const { workExperience } = store;
  return (
    <section>
      <SectionHeading title={workExperience?.title} />
      {workExperience?.data?.map((e) => (
        <WorkExperienceCard key={e.title} {...e} />
      ))}
    </section>
  );
}
function ProjectExperienceSection() {
  const { projectExperience } = store;
  return (
    <section>
      <SectionHeading title={projectExperience?.title} />
      {projectExperience?.data?.map((e) => (
        <WorkExperienceCard key={e.title} {...e} />
      ))}
    </section>
  );
}

function Main() {
  return (
    <main className="text-color-primary mx-auto px-4 font-sans sm:px-12 md:px-48 lg:px-72 xl:max-w-screen-sm xl:px-0">
      <NameSection />
      <ContactSection />
      <SkillsSection />
      <WorkExperienceSection />
      <ProjectExperienceSection />
    </main>
  );
}

export default Main;
