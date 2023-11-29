import { Container } from "@/components/container/Container";
import Wrapper from "@/components/container/Wrapper";
import { getCollection } from "@/firebase/firestore/getData";
import Error from "@/app/error";
import CardContainer from "@/components/cards/CardContainer";
import Card from "@/components/cards/Card";
import { ProjectsData } from "@/interfaces/Project";
import { isPromise } from "@/utils";
import MaintenanceDiv from "@/components/MaintenanceDiv";
import { getProjects } from "@/services/getProjectDetails";
import { headers } from "next/headers";

type Props = {};

const Shop = async (props: Props) => {
  const headersList = headers();
  const hostName = headersList.get("host") || "architecture-garage.vercel.app";
  const { result: projects, error } = await getProjects(hostName);

  if (isPromise(projects)) return <p>Loading</p>;

  if (error !== null)
    return <Error error={error} reset={() => console.log("TO DO")} />;

  if (projects === null) return <MaintenanceDiv page="Projetos" />;

  const renderCards = (project: ProjectsData) => {
    return <Card key={project.name} project={project} />;
  };

  return (
    <Container>
      <Wrapper>
        {projects !== null ? (
          <CardContainer>
            {projects.map((project) => renderCards(project))}
          </CardContainer>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Shop;
