import CardContainer from "@/components/container/CardContainer";
import { Container } from "@/components/container/Container";
import Wrapper from "@/components/container/Wrapper";

const Shop = () => {
  return (
    <Container>
      <Wrapper>
        <h1 className="text-center text-heading1">Projetos</h1>
        <CardContainer />
      </Wrapper>
    </Container>
  );
};

export default Shop;
