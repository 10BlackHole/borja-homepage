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
	//IoLogoInstagram,
	IoLogoGithub
} from 'react-icons/io5'
import { SiGmail } from "react-icons/si"

const Page = () => {
	return (
		<Layout>
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={1} mb={6} align="center">
				Welcome to my personal webiste!
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
					Borja is a physics student at the University of Concepcion, Chile. His hobbies include taking notes on physics, listen music, play voleyball, watch anime, and coding.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/notes">
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
					Go to the university to study physics.
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
					, Anime, Voleyball,{' '}
					<Link href="https://github.com/10BlackHole">
						Code
					</Link>
					, and {' '}
					<Link href="https://github.com/10BlackHole/config/blob/main/.vimrc">
						Vim (Neovim)
					</Link>
					.
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
						<Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHdwWlgdxXSlkPblcjjcbgQgmftwWJCGmknBfdvDqJHkzqpQlDBjmWVXQGNSKdVJhmgq" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<Icon as={SiGmail} />}
							>
								@borjadiez1014@gmail.com
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
