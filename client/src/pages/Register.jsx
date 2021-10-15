import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('https://images.pexels.com/photos/3605015/pexels-photo-3605015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background: white;
	${mobile({ width: '75%' })}
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0 0;
	padding: 10px;
`;
const Aggreement = styled.span`
	font-size: 12px;
	margin: 20px 0;
`;
const Button = styled.button`
	width: 40%;
	padding: 15px 20px;
	border: none;
	background: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="first name" />
					<Input placeholder="last name" />
					<Input placeholder="username" />
					<Input placeholder="email" />
					<Input placeholder="password" />
					<Input placeholder="confirm password" />
					<Aggreement>
						By creating an account, I consent to the processing of my personal data in accordance
						with the <strong>PRIVACY POLICY</strong>
					</Aggreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
