/* eslint-disable react/prop-types */
const ProductCheckoutCard = ({ dataCarts }) => {
	return (
		<>
			<div className="product-checkout-card flex items-center gap-8 w-full text-lg my-2">
				<div className="product-qty">
					<span className="font-medium">{dataCarts.quantity}x</span>
				</div>
				<div className="product-name">
					<span className="font-medium">{dataCarts.product.product_name}</span>
				</div>
				<div className="total-product-price ml-auto">
					<span className="font-bold">{Number(dataCarts.quantity * dataCarts.product.product_price).toLocaleString("id-ID", {
						style: "currency",
						currency: "IDR",
						minimumFractionDigits: 0,
					})}</span>
				</div>
			</div>
		</>
	);
};

export default ProductCheckoutCard;
