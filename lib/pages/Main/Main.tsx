import BrandName from "../../components/BrandName/BrandName";
import ContactList from "./ContactList";
import Field from "../../components/Field/Field";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import WorkExperienceCard from "../../molecules/WorkExperienceCard/WorkExperienceCard";
import STORE from "../../../store/index";

function Intro() {
  return (
    <div>
      {STORE.INTRO_DATA?.map((e) => (
        <Field key={e.label} label={e.label} value={e.value} />
      ))}
    </div>
  );
}

function Main() {
  return (
    <main className="text-color-primary mx-auto px-24">
      <BrandName title="Mark Toh" />
      <ContactList />
      <section>
        <SectionHeading title="Front-end Engineer, Full Stack Engineer, Tech Lead" />
        <Intro />
      </section>
      <section>
        <SectionHeading title="Work Experience" />
        {STORE.WORK_EXPERIENCE_DATA?.map((e) => (
          <WorkExperienceCard key={e.title} {...e} />
        ))}
      </section>
      <section>
        <SectionHeading title="Project Experience" />
        {STORE.PROJECT_EXPERIENCE_DATA?.map((e) => (
          <WorkExperienceCard key={e.title} {...e} />
        ))}
      </section>
    </main>
  );
}

export default Main;
