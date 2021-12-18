import { Link } from "gatsby";
import * as React from "react";
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
                </div>
            </div>
        </section>
    );
};

export default Articles;
