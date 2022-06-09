import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
					Notes written by Borja Diez mainly from Introduction to Quantum Mechanics by David J. Griffiths and own knowledge.
				</P>
				<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link href="https://github.com/10BlackHole/Quantum-Mechanics">
						Github<ExternalLinkIcon mx="2px"/>
					</Link>
				</ListItem>
				</List>
			</Container>
		</Layout>
	)
}
 export default Work
