function Featurebox(props) {
    return (
        <div className="a-box">
            <div class='a-b-img'>
                <img src={props.image} alt="" />
                <div className="a-b-text">
                    <h2>{props.title}</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aperiam.</p>
                </div>
            </div>

        </div>
    )
}
export default Featurebox;