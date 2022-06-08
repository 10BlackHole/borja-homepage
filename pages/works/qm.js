import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Quantum Mechanics">
			<Container>
				<Title>
					Quantum Mechanics <Badge>English</Badge>
				</Title>
				<P>
					A Markdown bla bla...
				</P>
				<List ml={4} my={4}></List>
			</Container>
		</Layout>
	)
}
 export default Work
