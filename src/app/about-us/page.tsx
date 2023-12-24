import { Container } from "@/components/container/Container";
import Heading from "@/components/form/Heading";
import HorizontalRow from "@/components/form/HorizontalRow";
import { aboutUsInformation } from "@/constants/about-us-paragraph";

const AboutUs = () => {
  return (
    <Container>
      {aboutUsInformation.map(({ label, paragraphs }) => (
        <div key={label} className="flex w-full flex-col gap-5 py-5">
          <Heading tag="h2" label={label} className="text-heading2" />
          <main className="flex flex-col gap-4">
            <div className="flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </main>
          <HorizontalRow />
        </div>
      ))}
    </Container>
  );
};

export default AboutUs;
