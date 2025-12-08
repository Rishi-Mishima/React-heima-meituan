import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Article = () => {
    const { id } = useParams(); // /article/:id
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await fetch(`/api/articles/${id}`);
                if (!res.ok) throw new Error("Failed to fetch article");
                const data = await res.json();
                setArticle(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return <div>Loading article...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="article-page">
            <h1>{article.title}</h1>
            <p className="meta">Author: {article.author}</p>
            <div className="content">{article.content}</div>
        </div>
    );
};

export default Article;
