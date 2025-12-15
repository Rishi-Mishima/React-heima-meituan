import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// type ArticleDTO = {
//     id: string;
//     title: string;
//     author: string;
//     content: string;
// };

// export default function Article() {
//     const { id } = useParams<{ id: string }>();

//     const [article, setArticle] = useState<ArticleDTO | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         if (!id) {
//             setError("Missing article id in URL");
//             setLoading(false);
//             return;
//         }

//         const controller = new AbortController();

//         const fetchArticle = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 setArticle(null);

//                 const res = await fetch(`/api/articles/${id}`, {
//                     signal: controller.signal,
//                 });

//                 if (!res.ok) throw new Error(`Failed to fetch article (${res.status})`);

//                 const data: ArticleDTO = await res.json();
//                 setArticle(data);
//             } catch (err: unknown) {
//                 // ✅ 解决 err unknown
//                 if (err instanceof Error) {
//                     // AbortError 通常不需要展示给用户
//                     if (err.name !== "AbortError") setError(err.message);
//                 } else {
//                     setError("Unknown error");
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchArticle();

//         return () => controller.abort();
//     }, [id]);

//     // ✅ 解决 article 可能为 null：用明确的分支返回
//     if (loading) return <div>Loading...</div>;

//     if (error) {
//         return (
//             <div>
//                 <p>Error: {error}</p>
//                 <Link to="/articles">← Back</Link>
//             </div>
//         );
//     }

//     if (!article) {
//         return (
//             <div>
//                 <p>Article not found.</p>
//                 <Link to="/articles">← Back</Link>
//             </div>
//         );
//     }

//     return (
//         <div className="article-page">
//             <h1>{article.title}</h1>
//             <p className="meta">Author: {article.author}</p>
//             <div className="content">{article.content}</div>
//         </div>
//     );
// }

import { useSearchParams } from "react-router-dom";

const Article = () => {
    // const [params] = useSearchParams()
    // //params自带GET方法
    // const id = params.get('id')
    // const name = params.get('name')

    const params = useParams()
    const id = params.id

    return (
        // 此时会显示 I m the Article Page 1001
        // <div>I m the Article Page {id} </div>
        <div>I m the Article Page - {id} </div>

    )
}
export default Article