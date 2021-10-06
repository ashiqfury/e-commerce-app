import styled from 'styled-components';
import Register from './pages/Register';

const Container = styled.div`
	width: 100%;
`;

function App() {
	return (
		<Container className="container">
			<Register />
		</Container>
	);
}

export default App;
