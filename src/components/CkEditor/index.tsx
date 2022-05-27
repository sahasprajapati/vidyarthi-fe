import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Props {
  onChange: any;
}

const Editor: React.FC<Props> = ({ onChange }) => (
  <CKEditor onChange={onChange} editor={ClassicEditor} config={{}} />
);

export default React.memo(Editor);
