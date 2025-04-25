from flask import Flask, jsonify, request 
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
from newsapi import NewsApiClient

#Create api app instance
app = Flask(__name__)
CORS(app) 
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

#Load API Key
load_dotenv()
NEWS_API_KEY = os.getenv('NEWS_API_KEY')
print(NEWS_API_KEY)

@app.route('/api/articles', methods=['GET'])
def get_articles():
    
    #Get the user search query
    userSearchQuery = request.args.get('query')
    print("Received search query:", userSearchQuery)

    #Pass API key from .env
    newsapi = NewsApiClient(api_key=NEWS_API_KEY)
            
    all_articles = newsapi.get_everything(q=userSearchQuery,
                                        sources='bbc-news,the-verge,TechRadar,Wired',
                                        domains='bbc.co.uk,techcrunch.com',
                                        from_param='2025-03-30',
                                        to='2025-04-21',
                                        language='en',
                                        sort_by='relevancy',
                                        page=2)

    #Extract the 
    articles_info = []
    for article in all_articles['articles']:
        articles_info.append({
            'title': article['title'],
            'source': article['source']['name'],
            'description': article['description'],
            'url' : article['url']
        })

    return jsonify(articles_info)

# Run the app
if __name__ == "__main__":
    app.run(debug=True)