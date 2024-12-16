import "/src/components/TagList/Taglist.scss";
import {useEffect, useState} from 'react';
import {getTags} from '/src/scripts/api.js';


function TagList(props){

  const [tags,setTags] = useState(null);
  const [clickedTag, setClickedTag] = useState(null);
  const [isLoading, setLoading] = useState(true);


  useEffect(()=>{
    const fetchTags = async () =>{
      try{
        const fetchTagData = await getTags();
        setTags(fetchTagData);
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    };
    fetchTags();
  },[]);

  if(isLoading){
    return <div>Loading</div>
  }


  function handleTagClick(tag){
    if(clickedTag === tag){
      setClickedTag(null);
    }
    else{
      setClickedTag(tag);
    }
  }
  
  return(
    <section className="tag-list">
      <h2 className="tag-list__heading">Filters</h2>
      <ul className="tag-list__list">
      {tags.map((tag, index) => {
        const isTagClicked = clickedTag === tag;
        return (
          <li
            key={index}
            className={`tag-list__tag ${isTagClicked ? 'clicked':''}`}
            onClick={() => {
              handleTagClick(tag);
              props.handleTagClick(tag);
              }}>
            {tag}
          </li>
          );
        })}
        </ul>
    </section>
  );
}
export default TagList