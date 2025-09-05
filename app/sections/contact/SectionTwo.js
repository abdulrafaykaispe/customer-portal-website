import ContactForm from "./ContactForm";
import BackgroundImage from "/public/cta-background-shape-image-two.png";

export default function FormLayout({ content }) {
  const {
    contactUsPage: { sectionTwo },
  } = content;

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-28 lg:margin-bottom-large sm:margin-bottom-small"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="lg:container-large md:container-medium sm:container-small grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-4 sm:gap-12 justify-center">
        <div className="flex flex-col lg:items-start sm:items-center lg:text-left sm:text-center">
          <div className="border-[3px] -border-purply-blue w-[36px] mb-4"></div>
          <p className="text-[16px] -text-purply-blue font-semibold tracking-widest mb-5 lg:pt-0.5">
            {sectionTwo.mainHighlight}
          </p>
          <p className="text-[40px] -text-jungle-black leading-[48px] font-semibold mb-6 lg:pr-12">
            {sectionTwo.mainHeading}
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
