<h1>First Backend</h1>

# mongodb connection string
mongosh "mongodb+srv://cluster0.dbjy0qw.mongodb.net/" --apiVersion 1 --username <your_username> --password <your_passoword>

# dot env
1. make sure you create .env file in your routes folder <br>
2. setup your PORT, MONGODB connection string, CORS_ORIGIN <br>
3. make variable with the name of RANDOM_TOKEN_SECRET, RANDOM_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET and REFRESH_TOKEN_EXPIRY.
4. before make this please use your random token secret or refresh token as long string. without using quote
