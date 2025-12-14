// src/mock/articles.js

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const mockArticles = [
    {
        id: "101",
        title: "React Router 入门：从 /articles 到 /articles/:id",
        author: "Miyuki",
        content:
            "这是一篇示例文章内容。你将学习 useParams、Link、Routes 等核心用法，并完成列表页到详情页的跳转。",
    },
    {
        id: "102",
        title: "useEffect 请求数据的正确姿势",
        author: "Risha",
        content:
            "本文讨论 loading/error 状态、依赖数组、以及为什么要在 finally 里 setLoading(false)。",
    },
    {
        id: "103",
        title: "如何做一个 Skeleton 骨架屏",
        author: "ChatGPT",
        content:
            "Skeleton 是一种提升体验的加载占位方式。你将用简单的 div + CSS 实现一个通用骨架组件。",
    },
];

// 模拟：获取列表
export async function fetchArticles() {
    await sleep(600); // 模拟网络延迟
    return mockArticles.map(({ content, ...rest }) => rest); // 列表不返回正文
}

// 模拟：按 id 获取详情
export async function fetchArticleById(id) {
    await sleep(800);

    const found = mockArticles.find((a) => a.id === id);
    if (!found) {
        // 模拟后端 404
        const err = new Error("Article not found");
        err.status = 404;
        throw err;
    }

    return found;
}
