import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from  '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection , BioYear } from '../components/bio'

const Page = () => {
	return (
		<Layout>
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('whuteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} aling="center">
				Hello, I&apos;m a physics student from Chile!
			</Box>

			<Box display={{md: 'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						10BlackHole
					</Heading>
					<p>I am interested in Quntum Field Theory, Quantum Electrodynamics, General Relativty</p>
					</Box>
				<Box
				flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{md: 6}}
					align="center"
				>	
					<Image
						borderColor="whiteAlpha.800"
						borderWidth={2}
						borderStyle="solid"
						maxWidth="100px"
						display="inline-block"
						borderRadius="full"
						src="/images/borja.jpg"
						alt="Profile Image"
					/>
				</Box>
				</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<Paragraph>
					Borja is a physics student at the University of Concepcion, Chile. His hobbies include taking notes on physics. His latest projects can be found on {' '} 
					<NextLink href="works/github">
						<Link>Github</Link>
					</NextLink>
					.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
					<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
						My portfolio
					</Button>
					</NextLink>
					</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>2001</BioYear>
					Born in Valdivia, Chile.
				</BioSection>
				<BioSection>
					<BioYear>2019 to present</BioYear>
					Go to university to study physics.
				</BioSection>
			</Section>

			<Section>
				<Heading as="h3" variant="section-title">
					I love
				</Heading>
				<Paragraph>
					Physics,{' '}
					<Link href="https://open.spotify.com/playlist/1ZpvW0jQkqGu1Aekakkb9r?si=60f2d27317a74a01">
						Music
					</Link>
					, Write.
				</Paragraph>
			</Section>
		</Container>
		</Layout>
	)
}

export default Page

