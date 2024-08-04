url = 'https://m.media-amazon.com/images/M/MV5BMTY5MTY3NjgxNF5BMl5BanBnXkFtZTcwMDExMTQyMw@@._V1_SX1777_CR0,0,1777,987_AL_.jpg'
import requests
# Return data as a string
# output = requests.get(url).text

# Return data as bytes
output = requests.get(url).content

print(output)