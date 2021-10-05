import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 10px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
	background: white;
	color: black;
	border: 1px solid gray;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;
const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background: white;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		background: #f8f4f4;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://images.unsplash.com/photo-1583433306546-ded68847fd0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						I dont want to create a lorem ipsum sentence beacuse everyone uses it to do things
						quicker but i dont like that thing, I want to become more unique so write this paragraph
						instead of boring lorem ipsum sentence. I know this is not enough, so that i am typing a
						paragraph that makes no sence. But I want even more bulky paragraph. So I need to type
						more and more to make this sentence big enough.
					</Desc>
					<Price>Rs. 149/-</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
