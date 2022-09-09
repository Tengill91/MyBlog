import React from "react";
import { useParams } from "react-router-dom";

import ArticlesList from "../components/ArticlesList";
import ArticleContent from "./ArticleContent";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { name } = useParams();
  const article = ArticleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  const otherArticles = ArticleContent.filter(
    (article) => article.name !== name
  );
  return (
    <div>
      <h2>{article.title}</h2>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other articles...</h3>
      <ArticlesList articles={otherArticles} />
    </div>
  );
};

export default ArticlePage;
