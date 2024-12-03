import { useState } from 'react';
import '/src/App.scss';
import Header from '/src/components/Header/Header.jsx';
import TagList from './components/TagList/TagList';
import PictureList from './components/PictureList/PictureList';

function App() {
  const [filterStatus, setFilterStatus] = useState(false)
  const [selectedTag, setSelectedTag] = useState("");

  function handleStatusClick(){
    setFilterStatus(!filterStatus);
  }

  function handleTagClick(clickedTag){
    setSelectedTag(clickedTag);
  }

  return (
    <>
      <Header setStatus={handleStatusClick}/>
      <p>Selected Tag: {selectedTag}</p>
      {filterStatus ? <TagList handleTagClick={handleTagClick} /> : null}
      <PictureList selectedTag={selectedTag} />
    </>
  )
}

export default App
