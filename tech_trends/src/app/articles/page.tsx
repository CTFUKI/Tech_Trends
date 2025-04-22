import Navbar from "../components/navbar";
import ArticleList from "../components/articles_list";
import ArticleSearch from "../components/article_search";

const Articles = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ArticleSearch></ArticleSearch>
        </div>
    );
};

export default Articles