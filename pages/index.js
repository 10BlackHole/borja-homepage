import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, Icon, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from  '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection , BioYear } from '../components/bio'
//import { GridItem } from '../components/grid-item'
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub
} from 'react-icons/io5'

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

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					On the web
				</Heading>
				<List>
					<ListItem>
						<Link href="https://github.com/10BlackHole" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoGithub} />}
							>
								@10BlackHole
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://twitter.com/10BlackHole1" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoTwitter} />}
							>
								@10BlackHole1
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://instagram.com/__borja10__" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoInstagram} />}
							>
								@__borja10__
							</Button>
						</Link>
					</ListItem>
				</List>
			</Section>
		</Container>
		</Layout>
	)
}

export default Page

