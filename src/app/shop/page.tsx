import { Container } from "@/components/container/Container";
import Wrapper from "@/components/container/Wrapper";
import { getCollection } from "@/firebase/firestore/getData";
import Error from "@/app/error";
import CardContainer from "@/components/cards/CardContainer";
import Card from "@/components/cards/Card";
import { ProjectsData } from "@/interface/Project";

type Props = {};

const Shop = async (props: Props) => {
  const { result, error } = await getCollection("projects");

  if (error !== null)
    return <Error error={error} reset={() => console.log("TO DO")} />;

  const renderCards = (props: ProjectsData) => {
    if (props === null) return null;

    return <Card key={props.name} propsApi={props} />;
  };

  return (
    <Container>
      <Wrapper>
        <h1 className="text-center text-heading1">Projetos</h1>
        {result !== null ? (
          <CardContainer>
            {result.map((props) => renderCards(props))}
          </CardContainer>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Shop;
