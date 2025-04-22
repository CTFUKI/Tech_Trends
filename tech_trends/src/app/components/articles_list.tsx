import React from 'react';

export default function ArticleList() {
  // Sample article data - replace with your actual content
  const articles = [
    {
      id: 1,
      title: "The Future of Renewable Energy",
      summary: "Exploring how solar, wind, and hydroelectric power are reshaping global energy markets and reducing carbon emissions worldwide.",
      date: "April 18, 2025"
    },
    {
      id: 2,
      title: "Advancements in Artificial Intelligence",
      summary: "A deep dive into recent breakthroughs in machine learning models and their applications across various industries and everyday life.",
      date: "April 15, 2025"
    },
    {
      id: 3,
      title: "The Growing Importance of Cybersecurity",
      summary: "Analyzing the increasing threats in the digital landscape and how organizations are adapting their security protocols to protect sensitive data.",
      date: "April 12, 2025"
    },
    {
      id: 4,
      title: "Impact of Remote Work on Urban Development",
      summary: "Examining how the shift to remote work has influenced housing markets, city planning, and community development in major metropolitan areas.",
      date: "April 10, 2025"
    },
    {
      id: 5,
      title: "Breakthroughs in Quantum Computing",
      summary: "Exploring recent advances in quantum computing technology and the potential implications for cryptography, medicine, and scientific research.",
      date: "April 8, 2025"
    },
    {
      id: 6,
      title: "The Evolution of Digital Currency",
      summary: "Tracking the development and adoption of cryptocurrencies and central bank digital currencies across global financial systems.",
      date: "April 5, 2025"
    },
    {
      id: 7,
      title: "Next Generation of Space Exploration",
      summary: "Highlighting recent missions to Mars, the Moon, and beyond, as both government agencies and private companies push the boundaries of human space travel.",
      date: "April 2, 2025"
    },
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Recent Articles</h2>
        </div>
        
        {/* Scrollable content */}
        <div className="h-96 overflow-y-auto">
          <ul className="divide-y divide-gray-200">
            {articles.map((article) => (
              <li key={article.id} className="px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                    {article.id}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{article.summary}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-600 flex justify-between items-center">
          <span>{articles.length} articles available</span>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}