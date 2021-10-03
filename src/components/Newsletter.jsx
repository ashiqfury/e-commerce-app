import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fcf5f5;
	flex-direction: column;
`;
const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
`;
const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
`;
const InputContainer = styled.div`
	height: 40px;
	width: 50%;
	background: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
`;
const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates from your favourite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
