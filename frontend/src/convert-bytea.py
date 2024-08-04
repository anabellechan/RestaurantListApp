#This code is mainly for future usage of storing images in bytes, which will allow
#for storing of images in postgres database without relying on href links to google for
# which will allow us to store images without relying
# on internet network using bytea datatype.

url = 'https://m.media-amazon.com/images/M/MV5BMTY5MTY3NjgxNF5BMl5BanBnXkFtZTcwMDExMTQyMw@@._V1_SX1777_CR0,0,1777,987_AL_.jpg'
import requests
# Return data as a string
# output = requests.get(url).text

# Return data as bytes
output = requests.get(url).content

print(output)