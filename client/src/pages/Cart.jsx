import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

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
const ProductName = styled.span`
	text-transform: capitalize;
`;
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
	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const history = useHistory();

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post('/checkout/payment', {
					tokenId: stripeToken.id,
					amount: 500,
				});
				history.push('/success', { data: res.data });
			} catch (err) {}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, history]);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<Link to="/">
						<TopButton>CONTINUE SHOPPING</TopButton>
					</Link>
					<TopTexts>
						<TopText>Shopping Bag({cart.quantity})</TopText>
						<TopText>Your Wishlist(0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map((product) => (
							<Product key={product._id}>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<strong>Product: </strong>
											{product.title}
										</ProductName>
										<ProductId>
											<strong>ID: </strong>
											{product._id}
										</ProductId>
										<ProductColor color={product.color} />
										<ProductSize>
											<strong>Size: </strong> {product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add />
										<ProductAmount>{product.quantity}</ProductAmount>
										<Remove />
									</ProductAmountContainer>
									<ProductPrice>Rs. {product.price * product.quantity}/-</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemTitle>Subtotal</SummaryItemTitle>
							<SummaryItemPrice>Rs. {cart.total}/-</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemTitle>Estimated Shipping</SummaryItemTitle>
							<SummaryItemPrice>Rs. {parseInt((cart.total / 100) * 10)}/-</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemTitle>Shipping Discount</SummaryItemTitle>
							<SummaryItemPrice>Rs. -{parseInt((cart.total / 100) * 8)}/-</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemTitle>Total</SummaryItemTitle>
							<SummaryItemPrice>
								Rs.{' '}
								{cart.total + parseInt((cart.total / 100) * 10) - parseInt((cart.total / 100) * 8)}
								/-
							</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name="E-com Fury."
							image="https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFtc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							billingAddress
							shippingAddress
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}
						>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
