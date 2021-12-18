import { Link } from "gatsby";
import * as React from "react";
import ArticleItem from "./articleItem";
import "./articles.css";

const Articles = () => {
    return (
        <section>
            <div className="articles-container">
                <div className="articles-content">
                    <div className="articles-content-header">
                        <h2>Articles</h2>
                        <Link to="/articles" className="all-articles-link">All Articles &#9997;</Link>
                    </div>
                    <div className="articles-content-body">
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Articles;
