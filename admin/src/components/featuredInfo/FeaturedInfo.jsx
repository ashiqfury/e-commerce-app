import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';

export default function FeaturedInfo() {
	const [income, setIncome] = useState([]);
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		const getIncome = async () => {
			try {
				const res = await userRequest.get('/orders/income');
				setIncome(res.data);
				setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
			} catch (err) {}
		};
		getIncome();
	}, []);

	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revanue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">Rs. {income[0].total}</span>
					<span className="featuredMoneyRate">
						%{Math.floor(percentage) + ' '}
						{percentage < 0 ? (
							<ArrowDownward className="featuredIcon negative" />
						) : (
							<ArrowUpward className="featuredIcon" />
						)}
					</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Sales</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">Rs. 2,341</span>
					<span className="featuredMoneyRate">
						-11% <ArrowDownward className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Cost</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">Rs. 2,225</span>
					<span className="featuredMoneyRate">
						+2.4 <ArrowUpward className="featuredIcon" />
					</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
		</div>
	);
}
