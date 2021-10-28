import { publicRequest } from '../requestMethods';
import { getProductFailure, getProductStart, getProductSuccess } from './productRedux';
import { loginStart, loginSuccess, loginFailure } from './userRedux';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.get('/auth/login', user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

export const getProducts = async (dispatch) => {
	dispatch(getProductStart());
	try {
		const res = await publicRequest.post('/products');
		dispatch(getProductSuccess(res.data));
	} catch (err) {
		dispatch(getProductFailure());
	}
};
