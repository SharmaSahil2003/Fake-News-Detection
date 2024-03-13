import nltk
nltk.download('punkt')
import pandas as pd
import pickle

fake = pd.read_csv("./backend/Fake.csv")
true = pd.read_csv("./backend/True.csv")

print("1")

fake['flag'] = 0
true['flag'] = 1

print("2")

data = pd.concat([fake, true], axis=0)
data = data.reset_index(drop=True)
data = data.drop(['title', 'subject', 'date'], axis=1)
data = pd.concat([fake, true], axis=0)

print("3")

# TOKENIZATION
from nltk.tokenize import word_tokenize
data['text'] = data['text'].apply(word_tokenize)

print("4")

# STEMMING
from nltk.stem.snowball import SnowballStemmer
porter = SnowballStemmer("english")
def stem_it(text):
    return [porter.stem(word) for word in text]
data['text'] = data['text'].apply(stem_it)

print("5")

# STOPWORD REMOVAL
from nltk.corpus import stopwords
def stop_it(t):
    dt = [word for word in t if len(word)>2]
    return dt
data['text'] = data['text'].apply(stop_it)
data['text'] = data['text'].apply(' '.join)

with open('model.pkl','wb') as file:
    pickle.dump(data,file)