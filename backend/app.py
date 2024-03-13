from flask import Flask, request, jsonify
import pickle
from nltk.tokenize import word_tokenize
from nltk.stem.snowball import SnowballStemmer
porter = SnowballStemmer("english")
def stem_it(text):
    return [porter.stem(word) for word in text]

from nltk.corpus import stopwords
def stop_it(t):
    dt = [word for word in t if len(word)>2]
    return dt

with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(model['text'], model['flag'], test_size=0.25)

from sklearn.feature_extraction.text import TfidfVectorizer
my_tfidf = TfidfVectorizer(max_df=0.7)

tfidf_train = my_tfidf.fit_transform(x_train)
tfidf_test = my_tfidf.transform(x_test)

from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

model_1 = LogisticRegression(max_iter=900)
model_1.fit(tfidf_train, y_train)
predict_1 = model_1.predict(tfidf_test)
accur_pc = accuracy_score(y_test, predict_1)

from sklearn.linear_model import PassiveAggressiveClassifier

model = PassiveAggressiveClassifier(max_iter=50)
model.fit(tfidf_train, y_train)

y_predict = model.predict(tfidf_test)
accscore = accuracy_score(y_test, y_predict)
print(accscore*100)





app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    # Get the user input from the request
    user_input = request.json['input']

    # Preprocess the user input
    user_input = word_tokenize(user_input) 
    user_input = stem_it(user_input)
    user_input = stop_it(user_input)
    user_input = ' '.join(user_input)

    # Vectorize the user input
    user_feature = my_tfidf.transform([user_input])

    # Predict the category of the user input using the trained model
    predicted_category_1 = model_1.predict_proba(user_feature)

    print("Predicted category using Logistic Regression:", predicted_category_1.tolist())

    # Return the predicted category as a JSON respons
    predicted_category_1=predicted_category_1.tolist()
    ans="True"
    if(predicted_category_1[0][0]>0.5):
        ans="False"
    response = {'realnews': ans}
    print(predicted_category_1)
    return jsonify(response)

if __name__ == '__main__':
    app.run()