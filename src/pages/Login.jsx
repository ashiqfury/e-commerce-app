import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background: white;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;
const Button = styled.button`
	width: 30%;
	padding: 15px 20px;
	border: none;
	background: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;
const Link = styled.a`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>SIGN IN</Button>
					<Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
