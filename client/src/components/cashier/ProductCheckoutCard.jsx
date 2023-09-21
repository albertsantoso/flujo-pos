const ProductCheckoutCard = () => {
    return (
        <>
            <div className="product-checkout-card flex items-center gap-8 w-full text-lg my-2">
                <div className="product-qty">
                    <span className="font-medium">
                        4x
                    </span>
                </div>
                <div className="product-name">
                    <span className="font-medium">
                        BigMac
                    </span>
                </div>
                <div className="total-product-price ml-auto">
                    <span className="font-bold">
                        Rp. 44.000
                    </span>
                </div>
            </div>
        </>
    )
}

export default ProductCheckoutCard