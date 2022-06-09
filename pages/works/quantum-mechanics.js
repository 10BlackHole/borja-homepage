import Section from '../../components/section'
import { Container, Badge, Heading, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
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
					<Meta>Download</Meta>
					<Link href="https://github.com/10BlackHole/Quantum-Mechanics/blob/main/QM.pdf">
						Github<ExternalLinkIcon mx="2px"/>
					</Link>
				</ListItem>
				</List>
				<Heading as="h3" variant="section-title">
				Preface	
				</Heading>
				<P>
				Unlike Newton's	 mechanics, or Maxwell's electrodynamics, or Einstein's relativity, quantum theory was not created (or even definitively packaged) by one individual, and it retains to this day some of the scars of its exhilaranting byt traumatic youth. There is no general consensus as to  what its fundamental principles are, how it should be taught, or what it really "means". Every competent physicist can "do" quantum mechanics, but the stories we tell ourselves about what we are doing are as various as the tales of Scheharazade, and almost as implausible. Niels Bohr said, "If you are not confused by quantum physics the you haven't really understood it"; Richard Feynman remarked, "I think I can safely say that nobody understands quantum mechanics".
				</P>
				
				<Section>
					<Heading as="h3" variant="section-title">
						Contents
					</Heading>
					<List>
						<ListItem>
							The Wave Function
						</ListItem>
						<ListItem>
							Time-Independent Schrodinger Equation
						</ListItem>
						<ListItem>
							Formalism
						</ListItem>
						<ListItem>
							Quantum Mechanics in Three Dimensions
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	)
}
 export default Work
