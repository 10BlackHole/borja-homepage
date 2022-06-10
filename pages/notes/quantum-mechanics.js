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
				Unlike Newton&apos;s mechanics, or Maxwell&apos;s electrodynamics, or Einstein&apos;s relativity, quantum theory was not created (or even definitively packaged) by one individual, and it retains to this day some of the scars of its exhilaranting byt traumatic youth. There is no general consensus as to  what its fundamental principles are, how it should be taught, or what it really &#34;means&#34;. Every competent physicist can &#34;do&#34; quantum mechanics, but the stories we tell ourselves about what we are doing are as various as the tales of Scheharazade, and almost as implausible. Niels Bohr said, &#34;If you are not confused by quantum physics the you haven&apos;t really understood it&#34;; Richard Feynman remarked, &#34;I think I can safely say that nobody understands quantum mechanics&#34;.
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
