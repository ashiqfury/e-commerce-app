import axios from 'axios';

const BASE_URL = 'http://localhost:2506/api';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE2MWE3MGVkYjdjMDlmMzg0MmEzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDAxNzY2NywiZXhwIjoxNjM0Mjc2ODY3fQ.dBRPKFt6DjhAXDtN_K6y_fXSUKI91cHynSYx-5WAWso';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
