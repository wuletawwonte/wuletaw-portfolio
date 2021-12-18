import { Link } from 'gatsby';
import * as React from 'react';
import "./articleitem.css";

const ArticleItem = () => {
    return (
        <div className="article-item-container">            
            <Link to="/" className="article-item-title">Article Item</Link>
            <p className="article-item-content">Culpa reprehenderit velit quis non in aute consectetur dolor aliquip deserunt. Veniam aliquip aliqua dolor do labore Lorem consectetur. Reprehenderit occaecat adipisicing veniam quis officia do non exercitation nostrud.</p>
        </div>
    )
}

export default ArticleItem;
