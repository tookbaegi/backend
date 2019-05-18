# 뚝배기 대신 퀘스트

## Users

### 유저 생성

- URI
  ```
  POST /api/users
  ```
- Parameter
  ```
  {
    name: String,
    email: String,
    type: String,
    token: String
  }
  ```
- Return
  ```
  {
    "id": 3,
    "name": "2",
    "email": "1",
    "type": "1",
    "token": "1",
    "updatedAt": "2019-05-18T13:44:19.377Z",
    "createdAt": "2019-05-18T13:44:19.377Z"
  }
  ```

### 유저 삭제

- URI
  ```
  POST /api/users/:id
  ```

### 유저 조회

- URI
  ```
  GET /api/users/:id?
  ```
- Return
  ```
  [
    {
        "id": 2,
        "name": "2",
        "email": "1",
        "type": 1,
        "token": "1",
        "createdAt": "2019-05-18T13:41:13.000Z",
        "updatedAt": "2019-05-18T13:41:13.000Z"
    },
    {
        "id": 3,
        "name": "2",
        "email": "1",
        "type": 1,
        "token": "1",
        "createdAt": "2019-05-18T13:44:19.000Z",
        "updatedAt": "2019-05-18T13:44:19.000Z"
    }
  ]
  ```
  ```
  {
    "id": 2,
    "name": "2",
    "email": "1",
    "type": 1,
    "token": "1",
    "createdAt": "2019-05-18T13:41:13.000Z",
    "updatedAt": "2019-05-18T13:41:13.000Z"
  }
  ```

### 유저 정보 수정

- URI
  ```
  PATCH /api/users/:id
  ```
- Parameter
  ```
  {
    name: String
  }
  ```
