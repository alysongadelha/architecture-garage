import { Container } from "@/components/container/Container";
import Wrapper from "@/components/container/Wrapper";
import { getCollection } from "@/firebase/firestore/getData";
import Error from "@/app/error";
import CardContainer from "@/components/cards/CardContainer";
import Card from "@/components/cards/Card";
import { ProjectsData } from "@/interface/Project";
import { isPromise } from "@/utils";
import MaintenanceDiv from "@/components/MaintenanceDiv";

type Props = {};

const Shop = async (props: Props) => {
  const { projects, error } = await getCollection("projects");
  console.log("error", error);
  console.log("error", error);

  if (isPromise(projects)) return <p>Loading</p>;

  if (error !== null)
    return <Error error={error} reset={() => console.log("TO DO")} />;

  if (projects === null) return <MaintenanceDiv page="Projetos" />;

  const renderCards = (props: ProjectsData) => {
    if (props === null) return null;

    return <Card key={props.name} propsApi={props} />;
  };

  return (
    <Container>
      <Wrapper>
        <h1 className="text-center text-heading1 uppercase">Projetos</h1>
        {projects !== null ? (
          <CardContainer>
            {projects.map((props) => renderCards(props))}
          </CardContainer>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Shop;
