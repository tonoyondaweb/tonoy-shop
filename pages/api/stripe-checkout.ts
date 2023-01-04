import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import { CartItemType } from "../../types/dataTypes";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const items = req.body.items.map((item: CartItemType) => {
		return {
			price_data: {
				currency: "inr",
				product_data: {
					name: item.name,
				},
				unit_amount: item.price * 100,
			},
			quantity: item.quantity,
		};
	});

	const params: Stripe.Checkout.SessionCreateParams = {
		submit_type: "pay",
		payment_method_types: ["card"],
		line_items: items,
		mode: "payment",
		success_url: `${req.headers.origin}/success`,
		cancel_url: `${req.headers.origin}/cancel`,
	};

	if (req.method === "POST") {
		try {
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create(params);
			res.status(200).json({ id: session.id });
		} catch (err: any) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
