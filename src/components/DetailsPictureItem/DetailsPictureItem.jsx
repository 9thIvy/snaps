import "/src/components/DetailsPictureItem/DetailsPictureItem.scss";

function DetailsdetailItem(props){

    const formatDate = (unixTime) => {
        const date = new Date(unixTime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return(
        <li className="detail-item">
            <div className="detail-item__meta">
                <img src={props.picture.photo} alt="" className="detail-item__image" />
                <p className="detail-item__author">{props.picture.photographer}</p>
                <ul className="detail-item__tags">
                    {props.picture.tags.map((tag, index) =>
                    <li key={index} className="detail-item__tag">
                        {tag}
                    </li>)}
                </ul>
                    <div className="detail-item__likes">
                        <object className="likes-icon" type="image/svg+xml" data="/src/assets/images/icons/Like_Outline.svg"></object>
                        <p className="likes">{props.picture.likes} likes</p>
                        <p>{formatDate(props.picture.timestamp)}</p>
                    </div>
            </div>
        </li>
    );
}
export default DetailsdetailItem