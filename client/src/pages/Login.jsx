import styled from 'styled-components';
import { mobile } from '../responsive';
import { login } from '../redux/apiCalls';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
	${mobile({ width: '75%' })}
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
	width: 40%;
	padding: 15px 20px;
	border: none;
	background: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	transition: 200ms;
	&:disabled {
		cursor: not-allowed;
		background: #77afaf;
	}
`;
const Link = styled.a`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Error = styled.span`
	color: crimson;
`;

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
					<Input placeholder="password" onChange={(e) => setPassword(e.target.value)} />
					<Button onClick={handleClick} disabled={isFetching}>
						SIGN IN
					</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
