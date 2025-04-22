'use client'
import React, { useState } from 'react';
import axios from 'axios';

//Create the article interface
interface Article {
    title : string;
    description: string;
    url: string;
}

//Create search button flags
let returnHeadlinesOnly = false;
let returnAllArticles = false;

//Define flag setter functions
function SetHeadLinesOnlyFlag(){
    returnHeadlinesOnly = true;
    returnAllArticles = false;
    console.log("Headlines Only Flag set:", returnHeadlinesOnly);
    console.log("All articles flag: ", returnAllArticles)
}

function SetAllArticlesFlag(){
    returnHeadlinesOnly = false;
    returnAllArticles = true;
    console.log("All Articles Flag set:", returnAllArticles);
    console.log("Headlines Only Flag set:", returnHeadlinesOnly);

}

const ArticleSearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [articles, setArticles] = useState<Article[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        console.log("Sending search query:", query);
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/articles', {
                params: { query }
            });
            console.log("Articles fetched:", response.data);
            setArticles(response.data as Article[]);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800 overflow-hidden">
            <div className="relative p-8 rounded-lg bg-gray-900 flex items-center overflow-auto max-h-[calc(100vh-64px)]">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 w-96"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <button 
                    className={`mr-4 ml-4 px-4 py-2 rounded-full transition duration-200 ${returnHeadlinesOnly ? 'bg-red-600' : 'bg-blue-500'} text-white hover:bg-green-600`}
                    onClick={SetHeadLinesOnlyFlag}
                    >Headlines
                </button>
                <button 
                    className={`mr-4 ml-0.1 px-4 py-2 rounded-full transition duration-200 ${returnAllArticles ? 'bg-blue-600' : 'bg-red-500'} text-white hover:bg-green -600`}
                    onClick={SetAllArticlesFlag}
                    >All Articles
                </button>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto max-h-[calc(100vh-64px)]">
                {articles.length > 0 ? (
                    articles.map((article: Article, index) => (
                        <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}
                            </a>
                            <p className="text-gray-300">{article.description}</p>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
};

export default ArticleSearch;