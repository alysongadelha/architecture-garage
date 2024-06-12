import { Container } from '@/components/container/Container'
import Wrapper from '@/components/container/Wrapper'
import CardContainer from '@/components/cards/CardContainer'
import Card from '@/components/cards/Card'
import { ProjectsData } from '@/interfaces/Project'
import { isPromise } from '@/utils'
import MaintenanceDiv from '@/components/MaintenanceDiv'
import { headers } from 'next/headers'
import { getProjects } from '@/services/getProjects'
import CardSkeleton from '@/components/Skeleton/CardSkeleton'
import { redirect } from 'next/navigation'

const Shop = async () => {
  const headersList = headers()
  const hostName = headersList.get('host') || 'architecture-garage.vercel.app'
  const { result: projects, error } = await getProjects(hostName)

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

  if (error) {
    redirect('/')
  }

  if (projects === null) return <MaintenanceDiv page='Projetos' />

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
