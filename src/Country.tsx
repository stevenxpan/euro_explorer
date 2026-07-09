import React from "react";
import { useState, useEffect } from "react";
import MarkdownRenderer from "./MarkdownRenderer";

interface CountryProps {
  mdPath: string;
}

const Country: React.FC<CountryProps> = ({ mdPath }) => {
  const [markdown, setMarkdown] = useState<string>("");
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(mdPath);
        const text = await res.text();
        setMarkdown(text);
      } catch (error) {
        console.error("Error loading Markdown:", error);
      }
    };

    fetchMarkdown();

  }, [mdPath]);
  return (
    <div className="flex justify-center" style={{textAlign: "center"}}>
        <MarkdownRenderer content={markdown} />
    </div>
  );
};

export default Country;
