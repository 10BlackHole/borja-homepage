import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Electromagnetismo">
			<Container>
				<Title>
					Electromagnetismo <Badge>Spanish</Badge>
				</Title>
				<P>
					Apuntes escritos por Borja Diez basados principalmente en Física Universitaria de Young, Hugh D. y Roger A. Freedman (2009) y conocimiento propio.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://github.com/10BlackHole/electromagnetismo">
							Github<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
				</List>
			</Container>
		</Layout>
	)
}
 export default Work
