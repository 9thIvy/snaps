import "/src/components/PictureList/PictureList.scss";
// import pictureData from "/src/data/photos.json";
import PictureItem from "/src/components/PictureItem/PictureItem";
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getPhotos} from '/src/scripts/api.js';


function PictureList(props){
    const [isLoading, setLoading] = useState(true);
    const [pictures, setPicture] = useState([]);
    const {selectedTag} = props;

    useEffect(()=>{
        const fetchPictures = async () => {
            try{
                const fetchPictureData = await getPhotos();
                setPicture(fetchPictureData);
            }
            catch(error){
                console.log(error);
            }
            finally{
            setLoading(false);
            }
        };
        fetchPictures();
    },[]);


    if(isLoading){
        return <div>Loading</div>
      }
    
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
