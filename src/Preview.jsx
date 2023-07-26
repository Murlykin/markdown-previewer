import React from "react";
import Marked from "marked";
import {render} from "./marked"
import DOMPurify from "dompurify";

const Preview = props => {
  const HTML = Marked(props.markdown, { renderer: render});
  return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(HTML)
        }}
      />
  );
}

export default Preview;