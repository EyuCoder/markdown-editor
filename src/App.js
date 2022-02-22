import React, { useState } from "react";
import ReactMarkDown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("##  Hello Markdown!");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>

        <article className="preview">
          <ReactMarkDown>{markdown}</ReactMarkDown>
        </article>
      </section>
    </main>
  );
}

export default App;
