import tagData from "/src/data/tags.json";
import "/src/components/TagList/Taglist.scss";


function TagList(props){
    return(
        <section className="tag-list">
            <h2 className="tag-list__heading">Filters</h2>
            <ul className="tag-list__list">
        {tagData.map((tag, index) => {
          return (
            <li
              onClick={() => {
                props.handleTagClick(tag);
              }}
              key={index}
              className="tag-list__tag"
            >
              {tag}
            </li>
          );
        })}
      </ul>
        </section>
    );
}
export default TagList