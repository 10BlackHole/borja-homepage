import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box borderRadius="lg" bg="red" p={3} mb={6} aling="center">
				Hello, I&apos;m a physics student from Chile!
			</Box>

			<Box display={{md: 'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Borja Diez
					</Heading>
					<p>I am interested in Quntum Field Theory, Quantum Electrodynamics, General Relativty</p>
					</Box>
				</Box>
		</Container>
	)
}

export default Page

