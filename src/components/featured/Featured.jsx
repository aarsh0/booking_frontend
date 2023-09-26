import "./featured.css";

const Featured = () => {

    // const innerWidth = window.innerWidth;
    return (
        <div className="featured">
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="featuredCity-img" />
                <div className="featuredTitles">
                    <h1>Mumbai</h1>
                    <h3>150 Properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="featuredCity-img" />
                <div className="featuredTitles">
                    <h1>Chennai</h1>
                    <h3>205 Properties</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/684822.jpg?k=8e3dfdbe7474b16f993bead046bb1d3d329cdd68c6aee6ec72c8e935ba426a9f&o=" alt="featuredCity-img" />
                <div className="featuredTitles">
                    <h1>Pune</h1>
                    <h3>258 Properties</h3>
                </div>
            </div>

            {/* {innerWidth < 775 ? <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" alt="featuredCity-img" />
                <div className="featuredTitles">
                    <h1>Hyderabad</h1>
                    <h3>458 Properties</h3>
                </div>
            </div> : null} */}
        </div>
    )
}

export default Featured