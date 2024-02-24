import BrandName from "../../components/BrandName/BrandName";
import Skills from "../../components/Skills/Skills";
import ContactList from "../../molecules/ContactList/ContactList";
import ContactListItem from "../../components/ContactListItem/ContactListItem";
import ContactLink from "../../molecules/ContactLink/ContactLink";
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
      <ContactList>
        {contact?.data?.map((e) => (
          <ContactListItem key={e.title}>
            <ContactLink title={e.title} href={e.href} />
          </ContactListItem>
        ))}
      </ContactList>
    </section>
  );
}
function SkillsSection() {
  const { skills } = store;
  return (
    <section className="my-2">
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
      {projectExperience?.data
        ?.filter((e) => e.status === "active")
        ?.map((e) => <WorkExperienceCard key={e.title} {...e} />)}
    </section>
  );
}

function Main() {
  return (
    <main className="text-color-primary mx-auto px-4 font-sans sm:px-12 md:px-48 lg:px-72 xl:max-w-screen-sm xl:px-0">
      <NameSection />
      <hr />
      <ContactSection />
      <div className="my-0.5 text-xs font-medium">{store?.skills?.title}</div>
      <hr />
      <SkillsSection />
      <hr />
      <WorkExperienceSection />
      <hr />
      <ProjectExperienceSection />
    </main>
  );
}

export default Main;
