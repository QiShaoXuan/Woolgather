import React from "react";
import md from "markdown-it";
const Content = props => {
  const { content } = props;
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: md().render(content) }}
    ></div>
  );
};

export default Content;
