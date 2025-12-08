const Article = ({ title = "Article", children }) => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>

            <div className="prose prose-invert leading-relaxed">
                {children || <p>No article content provided.</p>}
            </div>
        </div>
    );
};

export default Article;
