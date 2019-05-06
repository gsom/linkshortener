## How to setup & start server
1. connect to postgres, localhost:5432
2. apply sql in ./sql/diff sequentially 
3. docker-compose up --build

## API
### CREATE shortLink
#### Request
- METHOD: HTTP POST
- URL: /api/link
- payload: {"FullUrl":<TEXT URL>}

- example:

curl --header "Content-Type: application/json"   --request POST   --data '{"FullUrl":"https://google.com"}'   http://localhost:8001/api/link

#### Response
- success: status code: 200, payload: "<SHORTENED URL>"
- fail: status code: 400, payload: "<TEXT OF ERROR>"