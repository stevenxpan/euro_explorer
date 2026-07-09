import React from "react";
import { useState, useEffect } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import path from "./entries/about.md";

const Country: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(path);
        const text = await res.text();
        setMarkdown(text);
      } catch (error) {
        console.error("Error loading Markdown:", error);
      }
    };

    fetchMarkdown();
  });
  
  return (
    <div className="flex justify-center">
        <MarkdownRenderer content={markdown} />
    </div>
  );
};

export default Country;
