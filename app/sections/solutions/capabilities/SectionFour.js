import Link from "next/link";

export default function SectionFour({ content }) {
  const {
    capabilitesPage: { sectionFour },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small text-center">
      <h2 className="heading-style mb-6">{sectionFour.mainHeading}</h2>
      <p className="paragraph-style lg:px-36">{sectionFour.mainParagraph}</p>
      <p className="paragraph-style mb-14">{sectionFour.secondaryParagraph}</p>

      <p className="text-[34px] -text-jungle-black leading-[51px] font-medium">
        {sectionFour.secondaryHeading}{" "}
        <Link href="/pricing" className="-text-purply-blue">
          {sectionFour.secondaryHeadingHighlight}
        </Link>
      </p>
    </section>
  );
}
