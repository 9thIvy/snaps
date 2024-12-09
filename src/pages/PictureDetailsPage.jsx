import {useParams, Navigate} from "react-router-dom";
import pictureData from "/src/data/photos.json";
import DetailsPictureItem from "/src/components/DetailsPictureItem/DetailsPictureItem";
import Footer from '/src/components/Footer/Footer';
import DetailsPageHeader from '/src/components/DetailsPageHeader/DetailsPageHeader.jsx';
import {Link} from "react-router-dom";



function PictureDetailsPage(){
    const {pictureId} = useParams();
    const picture = pictureData.find((picture) => picture.id === pictureId);

    if(!picture){
        return <Navigate to="/HomePage"/>;
    }
    return(
    <>
        <Link to="/">
            <DetailsPageHeader />
        </Link>
        <DetailsPictureItem key={picture.id} picture={picture} />
        <Footer />
    </>
    );
}

export default PictureDetailsPage



