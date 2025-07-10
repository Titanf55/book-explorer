from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

GOOGLE_BOOKS_API_KEY = "AIzaSyAjDq1OX0SesTqemlHXy-D1XTa-dAe31Hg"

@app.route('/books', methods=['POST'])
def get_books():
    data = request.json
    genre = data.get('genre_name')
    title = data.get('title')

    if title:
        # Search by title
        url = f"https://www.googleapis.com/books/v1/volumes?q=intitle:{title}&key={GOOGLE_BOOKS_API_KEY}"
    elif genre:
        # Search by genre
        url = f"https://www.googleapis.com/books/v1/volumes?q=subject:{genre}&key={GOOGLE_BOOKS_API_KEY}"
    else:
        return jsonify({"error": "No genre or title provided"}), 400

    response = requests.get(url).json()

    books = []
    for item in response.get('items', []):
        volume_info = item.get('volumeInfo', {})
        books.append({
            "title": volume_info.get('title', 'Unknown Title'),
            "authors": volume_info.get('authors', ['Unknown Author']),
            "description": volume_info.get('description', 'No description available'),
            "thumbnail": volume_info.get('imageLinks', {}).get('thumbnail', '')
        })

    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)
