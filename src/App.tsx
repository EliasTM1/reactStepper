import { Box, Text, VStack } from "@chakra-ui/react";
import "./index.css";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ButtonWithChild } from "./ButtonWithChild";

const messages = ["Learn React *", "Apply for Jobs", "Invest Dinero"];

function App() {
	const activeStyle = { backgroundColor: "#7950f2", color: "#fff" };
	const [step, setStep] = useState(1);
	const [isVisible, setIsVisible] = useState(true);

	function goNext() {
		// Instead of updating the state like this:
		// if (step < 3) setStep(step + 1);
		// * We should do it like this
		if (step < 3) setStep((previousState) => previousState + 1);
	}

	function previous() {
		if (step > 1) setStep((previousState) => previousState - 1);
	}

	function toggleStepper() {
	setIsVisible((previosState) => !previosState)
	}

	return isVisible ? (
		<VStack height="100vh" backgroundColor="beige">
			<ViewOffIcon onClick={toggleStepper} boxSize={10} float="right"/>
			<Text>Click to hide the stepper</Text>
			<Box
				width='600px'
				backgroundColor='#f7f7f7'
				borderRadius='7px'
				padding='25px 100px'
				margin='100px auto'
				border="4px solid black"
			>
				<Box display='flex' justifyContent='space-between'>
					<Box style={step >= 1 ? activeStyle : {}} className='childNumbers'>
						1
					</Box>
					<Box style={step >= 2 ? activeStyle : {}} className='childNumbers'>
						2
					</Box>
					<Box style={step >= 3 ? activeStyle : {}} className='childNumbers'>
						3
					</Box>
				</Box>
				<Text
					textAlign='center'
					fontSize='20px'
					margin='40px 0'
					fontWeight='bold'
					display='flex'
					flexDir='column'
					alignItems='center'
				>
					Step {step}: {messages[step - 1]}
				</Text>
				<Box display='flex' justifyContent='space-between'>
					<ButtonWithChild handleClick={previous}>
						👈 Previous
					</ButtonWithChild>
					<ButtonWithChild handleClick={goNext}>
						Next 👉
					</ButtonWithChild>
				</Box>
			</Box>
		</VStack>
	) : (
		<VStack >
			<ViewIcon onClick={toggleStepper} boxSize={10}/>
			<Text>Click to see the icon.</Text>
		</VStack>
	);
}

export default App;
