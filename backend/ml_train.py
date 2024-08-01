import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib

data = pd.read_csv('car_dataset.csv')
X = data[['SalaryPerYear','CarCost']]
y = data['Result']

X_train, X_test, y_train, y_test = train_test_split(X,y,test_size = 0.2, random_state=42)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
neightbours = 200

model = KNeighborsClassifier(n_neighbors=neightbours)
model.fit(X_train,y_train)

joblib.dump(model, 'model.pkl')
joblib.dump(scaler, 'scaler.pkl')