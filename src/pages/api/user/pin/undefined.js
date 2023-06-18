export default function handler(req, res) {
	const pinResult = {
		id: 123,
		token: "qazxswedcvfrt",
	};

	res.status(200).json(pinResult);
}
