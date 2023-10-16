import pandas as pd
irisData = pd.read_csv('https://github.com/Muhd-Shahid/Write-Raw-File-into-Database-Server/raw/main/iris.csv',index_col=False)
# irisData.head()

import mysql.connector as msql
from mysql.connector import Error
try:
    conn = msql.connect(host='localhost', user='admin',  
                        password='admin', database='irisDB')
    if conn.is_connected():
        cursor = conn.cursor()
        print("Successful connection")
except Error as e:
    print("Error while connecting to MySQL", e)

# import the module
from sqlalchemy import create_engine
# create sqlalchemy engine
engine = create_engine("mysql+pymysql://{user}:{pw}@localhost/{db}"  
                      .format(user="admin", pw="admin", 
                      db="irisDB"))
# Insert whole DataFrame into MySQL
irisData.to_sql('iris', con = engine, if_exists = 'append', chunksize = 1000,index=False)

# Execute query
sql = "SELECT * FROM iris"
cursor.execute(sql)
# Fetch all the records
result = cursor.fetchall()
for i in result:
    print(i)