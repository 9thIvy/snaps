import "/src/components/DetailsPictureItem/DetailsPictureItem.scss";

function DetailsPictureItem(props){

    const formatDate = (unixTime) => {
        const date = new Date(unixTime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

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
                    <div className="picture-item__likes">
                        <object className="likes-icon" type="image/svg+xml" data="/src/assets/images/icons/Like_Outline.svg"></object>
                        <p className="likes">{props.picture.likes} likes</p>
                        <p>{formatDate(props.picture.timestamp)}</p>
                    </div>
            </div>
        </li>
    );
}
export default DetailsPictureItem