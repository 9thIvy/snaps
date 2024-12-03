import "/src/components/PictureItem/PictureItem.scss";

function PictureItem(props){
    return(
        <li className="picture-item">
            <img src={props.picture.photo} alt="" className="picture-item__image" />
            <p className="picture-item__author"></p>
            <ul className="picture-item__tags">
                {props.picture.tags.map((tag, index) =>
                <li key={index} className="picture-item__tag">
                    {tag}
                </li>)}
            </ul>
        </li>
    );
}
export default PictureItem