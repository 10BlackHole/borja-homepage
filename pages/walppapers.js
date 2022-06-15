import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbWallpaper from '../public/images/black-hole.png'

const Wallpaper = () => {
	return (
		<Layout>
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>
					Wallpapers
				</Heading>

				<SimpleGrid columns={[1,1,2]} gap={6}>
					<Section>
						<WorkGridItem id="wallpapers" title="Wallpapers" thumbnail={thumbWallpaper}>
						Wallpapers
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default Wallpaper
