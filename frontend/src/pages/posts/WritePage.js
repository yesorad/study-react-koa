import React from 'react';
import Reponsive from '../../components/common/Reponsive';
import EditorContainer from '../../containers/write/EditorContainer';
import TagBoxContainer from '../../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../../containers/write/WriteActionButtonContainer';
import { Helmet } from 'react-helmet-async';

function WritePage() {
  return (
    <>
      <Helmet>
        <title>BLOG-WRITE</title>
      </Helmet>
      <Reponsive>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonContainer />
      </Reponsive>
    </>
  );
}

export default WritePage;
