import numpy as np
import pandas as pd
import random

#Syntethic data generator cause I didn't find anything good online :P

samples = 4000

salaryPerYear = np.random.randint(7000,90000,samples)
carCost = np.random.randint(1200,70000,samples)

#We will assume that if the car is over 1.5 times more expensive than the yearly salary of the person then it is a bad buy
def resultCalculator(salary,payment):
    return 1 if (salary * 1.5) <= payment else 0

data = []

for i in range(samples):
    salary = salaryPerYear[i]
    cost = carCost[i]
    result = resultCalculator(salary,cost)
    data.append([salary,cost,result])

df = pd.DataFrame(data, columns=['SalaryPerYear','CarCost','Result'])
df.to_csv('car_dataset.csv',index=False)




