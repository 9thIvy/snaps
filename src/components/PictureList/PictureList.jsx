import "/src/components/PictureList/PictureList.scss";
import pictureData from "/src/data/photos.json";
import PictureItem from "/src/components/PictureItem/PictureItem";
import { useState } from "react";
import {Link} from "react-router-dom";

function PictureList(props){
    const [pictures, setPicture] = useState(pictureData);
    const {selectedTag} = props;
    
    let filteredPictures;

    
    if(selectedTag !== ""){
        filteredPictures = pictures.filter(picture => 
           picture.tags && picture.tags.includes(selectedTag));
    }
    else{
        filteredPictures = pictures;
    }
    return(
        <section className="gallery">
        <ul className="picture-list">
            {filteredPictures.map((picture) =>{
                return(
                    // <div key={picture.id}>
                        <Link key={picture.id} to={`/picture/${picture.id}`}>
                        <PictureItem  picture={picture} />
                        </Link>
                    // </div>
                );
            })}
        </ul>
        </section>
    );
}

export default PictureList;
