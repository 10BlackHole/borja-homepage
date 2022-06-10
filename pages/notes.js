import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

//import thumbQM from '../public/images/notes/qm.png'
import thumbQM from '../public/images/notes/qm3.png'
import thumbEM from '../public/images/notes/em.png'

const Notes = () => {
	return (
		<Layout>
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Notes
			</Heading>

			<SimpleGrid columns={[1,1,2]} gap={6}>
				<Section>
					<WorkGridItem id="quantum-mechanics" title="Quantum Mechanics" thumbnail={thumbQM}>
					Notes on Quantum Mechanics [English]	
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="electromagnetismo" title="Electromagnetismo" thumbnail={thumbEM}>
					Apuntes sobre Electromagnetismo [Español]
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
		</Layout>
	)
}

export default Notes
