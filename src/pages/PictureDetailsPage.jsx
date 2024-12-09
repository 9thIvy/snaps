import {useParams, Navigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {getPhotoByID} from "/src/scripts/api.js"; 
import DetailsPictureItem from "/src/components/DetailsPictureItem/DetailsPictureItem";
import Footer from '/src/components/Footer/Footer';
import DetailsPageHeader from '/src/components/DetailsPageHeader/DetailsPageHeader.jsx';
import {Link} from "react-router-dom";
import Comments from "/src/components/Comments/Comments.jsx";

function PictureDetailsPage() {
    const {pictureId} = useParams();
    const [picture, setPicture] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPictureData = async () => {
            try{
                const response = await getPhotoByID(pictureId); 
                setPicture(response); 
            }
            catch(error){
                console.log(error);
            }
            finally{
                setLoading(false);
            }
            
        };

        fetchPictureData();
    }, [pictureId]);

    if(isLoading){
        return <div>Loading</div>
    }


    if (!picture) {
        return <Navigate to="/HomePage" />;
    }

    return (
        <>
            <Link to="/">
                <DetailsPageHeader />
            </Link>
            <DetailsPictureItem key={picture.id} picture={picture} />
            <Comments pictureId={picture.id} />
            <Footer />
        </>
    );
}

export default PictureDetailsPage;