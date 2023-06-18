export default function handler(req, res) {
	const result = {
		listIncome: [
			{
				day: "2023-06-17",
				total: 17000,
			},
			{
				day: "2023-06-16",
				total: 10000,
			},
		],
		totalIncome: 27000,
	};

	res.status(200).json(result);
}
