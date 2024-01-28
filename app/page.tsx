import BrandName from "@/lib/components/BrandName/BrandName";
import SectionHeading from "@/lib/components/SectionHeading/SectionHeading";
import WorkExperienceCard from "@/lib/molecules/WorkExperienceCard/WorkExperienceCard";
import ContactList from "@/lib/pages/Main/ContactList";
import Skills from "@/lib/components/Skills/Skills";
import STORE from "@/store/index";

function Main() {
  return (
    <main className="text-color-primary mx-auto px-4 font-sans sm:px-12 md:px-48 lg:px-72 xl:max-w-screen-sm xl:px-0">
      <BrandName title="Mark Toh" />
      <ContactList items={STORE.CONTACT_LIST_DATA} />
      <section>
        <SectionHeading title="Front-end Engineer, Full Stack Engineer, Tech Lead" />
        <Skills skills={STORE.SKILLS_DATA} />
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
