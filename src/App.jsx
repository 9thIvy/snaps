import { useState } from 'react';
import '/src/App.scss';
import Header from '/src/components/Header/Header.jsx';
import TagList from './components/TagList/TagList';
import PictureList from './components/PictureList/PictureList';
import MissionStatement from './components/MissionStatement/MissionStatement';

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
      <Header setStatus={handleStatusClick} className="header-class"/>
      {filterStatus ? <TagList handleTagClick={handleTagClick} className="taglist"/> : null}
      <MissionStatement className="mission"/>
      <PictureList selectedTag={selectedTag} className="pictures"/>
    </>
  )
}

export default App
