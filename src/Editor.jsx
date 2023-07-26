import React from "react";

const Editor = props => {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      value={props.markdown}
    />
  );
}

export default Editor;