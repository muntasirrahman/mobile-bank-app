export default function handler(req, res) {
	const loginResult = {
		data: {
			data: {
				data: {
					pin: 1234,
					token: "hello world",
				},
			},
		},
	};

	res.status(200).json(loginResult);
}
