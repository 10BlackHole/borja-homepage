import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/portfolio.jpg'
import thumbApp from '../public/images/gmail-ui.jpg'

const Posts = () => (
	<Layout title="Posts">
		<Container>
			<Heading as="h4" fontSize={20} mb={4}>
			Development Ideas
			</Heading>
			<Section delay={0.1}>
				<SimpleGrid columns={[1,2,2]} gap={6}>
					<GridItem
						title="How to buld a portfolio"
						thumbnail={thumbPortfolio}
						href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
					/>
					<GridItem
						title="How to build Gmail-like UI"
						thumbnail={thumbApp}
						href="https://www.youtube.com/watch?v=w-M9UFHLAl0&t=553s"
					/>
				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
)

export default Posts
