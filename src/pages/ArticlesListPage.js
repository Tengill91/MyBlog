import React from "react";

import ArticlesList from "../components/ArticlesList";
import articleContent from "./ArticleContent";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={ articleContent } />
    </>
  );
};

export default ArticlesListPage;
