import React from "react";
import Toolbar from "./Toolbar";
import { placeholder } from "./marked";
import Preview from "./Preview";
import Editor from "./Editor";

class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorMax: false,
      previewMax: false,
      markdown: placeholder,
    };
    this.textChange = this.textChange.bind(this);
    this.editorSizeChange = this.editorSizeChange.bind(this);
    this.previewSizeChange = this.previewSizeChange.bind(this);
  }

  textChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  editorSizeChange() {
    this.setState({
      editorMax: !this.state.editorMax,
    });
  }

  previewSizeChange() {
    this.setState({
      previewMax: !this.state.previewMax,
    });
  }

  render() {
    const classes = [
      {
        h1: "",
        editor: "wrap",
        preview: "wrap",
        icon: "fas fa-expand-arrows-alt fa-2x",
      },
      {
        h1: "hide",
        editor: "wrap max",
        preview: "wrap hide",
        icon: "fas fa-compress-arrows-alt fa-2x",
      },
      {
        h1: "hide",
        editor: "wrap hide",
        preview: "wrap max",
        icon: "fas fa-compress-arrows-alt fa-2x",
      },
    ];

    const INDEX = this.state.editorMax ? 1 : this.state.previewMax ? 2 : 0;

    if (classes[INDEX].h1 == "hide") {
      document.body.classList.add("overlay");
    } else if (document.body.classList.contains("overlay")) {
      document.body.classList.remove("overlay");
    }

    return (
      <div>
        <h1 className={classes[INDEX].h1}>Markdown Previewer</h1>
<section className="basa">
        <div className={classes[INDEX].editor}>
          <Toolbar
            icon={classes[INDEX].icon}
            onClick={this.editorSizeChange}
            text="Editor"
          />
          <Editor markdown={this.state.markdown} onChange={this.textChange} />
        </div>

        <div className={classes[INDEX].preview}>
          <Toolbar
            icon={classes[INDEX].icon}
            onClick={this.previewSizeChange}
            text="Preview"
          />
          <Preview markdown={this.state.markdown} />
        </div>
        </section>
      </div>
    );
  }
}

export default Markdown;
