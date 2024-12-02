import tagData from "/src/data/tags.json";
import "/src/components/TagList/Taglist.scss";
import { useState } from 'react';


function TagList(props){
  const [clickedTag, setClickedTag] = useState(null);

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
      {tagData.map((tag, index) => {
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