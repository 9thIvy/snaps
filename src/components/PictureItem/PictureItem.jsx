import "/src/components/PictureItem/PictureItem.scss";

function PictureItem(props){
    console.log(props);
    return(
        <li className="picture-item">
            <div className="picture-item__meta">
            <img src={props.picture.photo} alt="" className="picture-item__image" />
            <p className="picture-item__author">{props.picture.photographer}</p>
            <ul className="picture-item__tags">
                {props.picture.tags.map((tag, index) =>
                <li key={index} className="picture-item__tag">
                    {tag}
                </li>)}
            </ul>
            </div>
        </li>
    );
}
export default PictureItem