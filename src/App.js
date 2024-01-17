import MarkdownEditor from "@uiw/react-markdown-editor";
import "@wcj/dark-mode";
import { useState } from "react";
import "./styles.css";

const code = `# title\n\nHello World!\n\n`;

export default function App() {
  const [markdownVal, setMarkdownVal] = useState(code);
  console.log("markdownVal:", markdownVal);
  return (
    <div>
     
      <h3 style={{textAlign:'center'}}>Mark Down Editor: </h3>
      <div className="App" data-color-mode="light">
        <MarkdownEditor
        // className="markdown-editor"
          value={markdownVal}
          onChange={(value) => {
            setMarkdownVal(value);
          }}
        />
      </div>
      
    </div>
  );
}
