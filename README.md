## API
### CREATE shortLink
- METHOD: HTTP POST
- URL: /api/link
- payload: {"FullUrl":<TEXT URL>}

- example:

curl --header "Content-Type: application/json"   --request POST   --data '{"FullUrl":"https://google.com"}'   http://localhost:8001/api/link