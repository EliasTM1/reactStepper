import { Button } from "@chakra-ui/react";

type ButtonWithChildProps = {
    handleClick: () => void
    children: any
}

export const ButtonWithChild = ({handleClick, children}: ButtonWithChildProps) => {
	return (
		<Button backgroundColor='#7950f2' color='white' onClick={handleClick}>
            {children}
		</Button>
	);
};
