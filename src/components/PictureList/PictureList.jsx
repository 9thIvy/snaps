import "/src/components/PictureList/PictureList.scss";
import pictureData from "/src/data/photos.json";
import PictureItem from "/src/components/PictureItem/PictureItem";
import { useState } from "react";

function PictureList(props){
    const [pictures, setPicture] = useState(pictureData);
    console.log("picture list props: ",props);
    const {selectedTag} = props;
    console.log("tag: ", selectedTag);

    const filteredPictures = pictures.filter(picture => 
        picture.tags && picture.tags.includes(selectedTag));
    return(
        <ul className="picture-list">
            {filteredPictures.map((picture) =>{
                return <PictureItem key={picture.id} picture={picture} />;
            })}
        </ul>
    );
}

export default PictureList;