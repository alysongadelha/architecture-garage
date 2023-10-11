import { Container } from "@/components/container/Container";
import Image, { StaticImageData } from "next/image";
import BuySection from "@/components/buySection/BuySection";
import { getProjectDetails } from "@/services/getProjectDetails";
import ImagesComponent from "@/components/detailsPage/ImagesComponent";
import { headers } from "next/headers";

// Icons
import storiesIcon from "@public/icons/stories-m.png";
import bedsIcon from "@public/icons/beds-m.png";
import bathsIcon from "@public/icons/baths-m.png";
import landSize from "@public/icons/land-size.png";
import office from "@public/icons/office.png";
import pool from "@public/icons/pool.png";
import garage from "@public/icons/covered-garage.png";
import sqmtIcon from "@public/icons/square-meters.png";
import gourmetArea from "@public/icons/gourmet-area.png";
import Custom404 from "@/app/not-found";
import Error from "@/app/error";

interface Props {
  params: {
    [key: string]: string;
  };
}

type iconImages = { [key: string]: StaticImageData };

const iconImages: iconImages = {
  landSize,
  sqmtIcon,
  storiesIcon,
  bedsIcon,
  bathsIcon,
  garage,
  office,
  gourmetArea,
  pool,
};

const ProjectDetailsPage = async ({ params }: Props) => {
  const { projectKey } = params;
  const headersList = headers();
  const hostName = headersList.get("host") || "architecture-garage.vercel.app";

  //   const projectDetailImages = await getProject(projectKey, hostName);
  const { result: project, error } = await getProjectDetails(
    projectKey,
    hostName
  );

  if (error === undefined) return <Error error={error} reset={() => null} />;
  if (project === null || !project.imageArray.length) return <Custom404 />;

  return (
    <>
      <Container minimumScreenSize>
        <section className="flex flex-col">
          <h1 className="text-heading3">
            <span className=" text-logoColor-brandAG">#</span> {project.name}
          </h1>
          <ImagesComponent projectImages={project.imageArray} />
        </section>
      </Container>
      {/* ICONS */}
      {project.icons.length ? (
        <section className="mt- mx-auto my-6 flex w-full flex-wrap justify-center bg-logoColor-surfaceMuted ">
          {project.icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col items-center p-2 text-center text-icon lg:mx-6"
            >
              <Image
                width={45}
                height={45}
                src={iconImages[icon.alt]}
                alt={icon.alt}
              />
              <p className="uppercase">{icon.iconName}</p>
              <p className="text-sm font-bold uppercase">{icon.iconValue}</p>
            </div>
          ))}
        </section>
      ) : null}
      {/* Separated component */}
      <BuySection
        projectTypes={project.projectType}
        additionalOptions={project.additionalOptions}
      />
      {/* About the project */}
      {project.description.length ? (
        <Container marginTopDefinition={[10, 4, 4]} minimumScreenSize>
          <main className="flex flex-col gap-4 bg-logoColor-surfaceMuted p-2 px-10">
            <h2 className="text-heading3 font-semibold uppercase">
              Sobre o Projeto
            </h2>
            <div className="lg:min-h-96 flex flex-col justify-center gap-6 ">
              {project.description.map((paragraph) => (
                <p key={paragraph} className="text-paragraph leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>
          </main>
        </Container>
      ) : null}
    </>
  );
};

export default ProjectDetailsPage;
