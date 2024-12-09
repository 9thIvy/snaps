import {useParams, Navigate} from "react-router-dom";
import pictureData from "/src/data/photos.json";
import PictureItem from "/src/components/PictureItem/PictureItem";

function PictureDetailsPage(){
    const {pictureId} = useParams();
    const picture = pictureData.find((picture) => picture.id === pictureId);

    if(!picture){
        return <Navigate to="/HomePage"/>;
    }
    return(
    <>
        {console.log("AAAA",pictureId)}
        <PictureItem key={picture.id} picture={picture} />
        </>
    );
}

export default PictureDetailsPage



