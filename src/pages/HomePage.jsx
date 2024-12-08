import { useState } from 'react';
import '/src/App.scss';
import Header from '/src/components/Header/Header.jsx';
import TagList from '/src/components/TagList/TagList';
import PictureList from '/src/components/PictureList/PictureList';
import MissionStatement from '/src/components/MissionStatement/MissionStatement';
import Footer from '/src/components/Footer/Footer';

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
      <Footer />
    </>
  )
}

export default App
