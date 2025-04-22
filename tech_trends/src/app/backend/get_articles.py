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

@app.route('/api/articles', methods=['GET'])
def get_articles():
    
    #Get the user search query
    userSearchQuery = request.args.get('query')
    print("Received search query:", userSearchQuery)  # Log the received query

    #Pass API key
    newsapi = NewsApiClient(api_key='943bdad0d52940b8a58d4ca61bc27f77')

    # /v2/everything
    all_articles = newsapi.get_everything(q=userSearchQuery,
                                        sources='bbc-news,the-verge',
                                        domains='bbc.co.uk,techcrunch.com',
                                        from_param='2025-03-30',
                                        to='2025-04-21',
                                        language='en',
                                        sort_by='relevancy',
                                        page=2)

    # Extract relevant information from articles
    articles_info = []
    for article in all_articles['articles']:
        articles_info.append({
            'title': article['title'],
            'source': article['source']['name'],
            'description': article['description']
        })

    print(articles_info)

    return jsonify(articles_info)  # Return only the extracted information


# Run the app
if __name__ == "__main__":
    app.run(debug=True)