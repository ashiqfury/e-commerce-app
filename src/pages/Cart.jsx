import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
	color: ${(props) => props.type === 'filled' && 'white'};
`;
const TopTexts = styled.div`
	${mobile({ display: 'none' })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;
const Image = styled.img`
	width: 200px;
	height: 200px;
	margin: 5px;
	object-fit: cover;
`;
const Details = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`;
const Hr = styled.hr`
	background: #eee;
	border: none;
	height: 1px;
`;
const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;
const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && 500};
	font-size: ${(props) => props.type === 'total' && 24}px;
`;
const SummaryItemTitle = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
	width: 100%;
	padding: 10px;
	background: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
								<Details>
									<ProductName>
										<strong>Product:</strong>MICHEL JACKSON SHOES
									</ProductName>
									<ProductId>
										<strong>ID:</strong>45855517515578
									</ProductId>
									<ProductColor color="goldenrod" />
									<ProductSize>
										<strong>Size:</strong> 22
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>Rs. 249/-</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
								<Details>
									<ProductName>
										<strong>Product:</strong>ELON MUSK SHOES
									</ProductName>
									<ProductId>
										<strong>ID:</strong>858654875489
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<strong>Size:</strong> L
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>Rs. 329/-</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemTitle>Subtotal</SummaryItemTitle>
							<SummaryItemPrice>Rs. 795/-</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemTitle>Estimated Shipping</SummaryItemTitle>
							<SummaryItemPrice>Rs. 49/-</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemTitle>Shipping Discount</SummaryItemTitle>
							<SummaryItemPrice>Rs. -39/-</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemTitle>Total</SummaryItemTitle>
							<SummaryItemPrice>Rs. 805/-</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
