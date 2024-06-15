import { Container } from '@/components/container/Container'
import Wrapper from '@/components/container/Wrapper'
import CardContainer from '@/components/cards/CardContainer'
import Card from '@/components/cards/Card'
import { ProjectsData } from '@/interfaces/Project'
import { isPromise } from '@/utils'
import { getProjectsAction } from '@/actions/getProjects'
import CardSkeleton from '@/components/Skeleton/CardSkeleton'

const Shop = async () => {
  const projects = await getProjectsAction()

  if (isPromise(projects)) {
    return (
      <Container>
        <Wrapper>
          <CardContainer>
            {[1, 2, 3].map((skeleton, index) => (
              <CardSkeleton key={index} />
            ))}
          </CardContainer>
        </Wrapper>
      </Container>
    )
  }

  const renderCards = (project: ProjectsData) => {
    return <Card key={project.id} project={project} />
  }

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
  )
}

export default Shop
