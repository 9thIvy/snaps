import '/src/components/Comments/Comments.scss';
import {useState, useEffect} from 'react';
import {getComments} from '/src/scripts/api.js';
import { postComment } from '../../scripts/api';

function Comments(props){

    const [comments, setComments] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [content, setContent] = useState('');
    const [username, setUsername] = useState('');


    useEffect(()=>{
        const fetchComments = async () =>{
            try{
                const fetchedComments = await getComments(props.pictureId);
                setComments(fetchedComments);
            }
            catch(error){
                console.log(error);
              }
              finally{
                setLoading(false);
              }
        };
        fetchComments();
    },[props.pictureId]);
    if(isLoading){
        return <div>Loading</div>
      }

    const formatDate = (unixTime) => {
        const date = new Date(unixTime);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }


    const handleSubmit = async(event)=>{
        event.preventDefault();

        const newComment = {
            name: username,
            comment: content,
        };
        let jsonComment = JSON.stringify(newComment);
        console.log(newComment);
        console.log("json: ",jsonComment);
        try{
            setLoading(true);
            await postComment(props.pictureId, jsonComment);
            setComments((prevComments) => [...prevComments, newComment]);
            setUsername('');
            setContent('');
        }
        catch(error){
            console.error(error);
        }
        finally{
            setLoading(false)
            console.log(Response);
        }
        if(isLoading){
            return <div>Loading</div>
          }
    };


    

    return(
        <>
       
    <section className="comment-section">
        <div className="comment-section__horizontal-flex">
            <form className="comment-section__form" onSubmit={handleSubmit}>

                <label>Name</label>
                <input
                     value={username}
                     className="comment-section__user-input" 
                     type="text"
                     onChange={(event) => setUsername(event.target.value)}
                    />

                <label>Comment</label>
                <input 
                    value={content}
                    className="comment-section__user-input--comment-box" 
                    type="text"
                    onChange={(event) => setContent(event.target.value)}
                />
                <div className="button-box">
                    <button type="submit" className="comment-section__submit-button">Submit</button>
                </div>
            </form>
        </div>
    </section>

    <div className="comment-section__container">
                {comments.map((comment, index) => (
                    <div key={index} className="comment-section__comment">
                        <div className="comment-section__icon-wrapper">
                            <div>
                                <div className="comment-section__comment-meta">
                                    <p className="comment-section__user-name">{comment.name}</p>
                                    <p className="date">{formatDate(comment.timestamp)}</p>
                                </div>
                                <p className="comment-section__comment-content">{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );


}
export default Comments