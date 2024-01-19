import "./featuredProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="featuredProperties">
            <div className="featuredPropertyItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="propertyImg" />
                <div className="propertyDesc">
                    <p className="propertyName">Aparthotel Stare Miasto</p>
                    <p className="propertyLocation">Poland</p>
                    <p className="propertyPrice">Starting from ₹9,821</p>
                    <div className="rating">
                        <button className="propertyRating">9.1</button>
                        <span className="propertyReview">Excellent</span>
                    </div>
                </div>
            </div>

            <div className="featuredPropertyItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o" alt="propertyImg" />
                <div className="propertyDesc">
                    <p className="propertyName">7Seasons Apartments</p>
                    <p className="propertyLocation">Hungary</p>
                    <p className="propertyPrice">Starting from ₹9,710</p>
                    <div className="rating">
                        <button className="propertyRating">8.5</button>
                        <span className="propertyReview">Fabulous</span>
                    </div>
                </div>
            </div>

            <div className="featuredPropertyItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="propertyImg" />
                <div className="propertyDesc">
                    <p className="propertyName">Oriente Palace</p>
                    <p className="propertyLocation">Spain</p>
                    <p className="propertyPrice">Starting from ₹9,420</p>
                    <div className="rating">
                        <button className="propertyRating">9.0</button>
                        <span className="propertyReview">Excellent</span>
                    </div>
                </div>
            </div>

            <div className="featuredPropertyItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="propertyImg" />
                <div className="propertyDesc">
                    <p className="propertyName">Casa Portuguesa Prata</p>
                    <p className="propertyLocation">Portugal</p>
                    <p className="propertyPrice">Starting from ₹49,420</p>
                    <div className="rating">
                        <button className="propertyRating">9.5</button>
                        <span className="propertyReview">Superb</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
