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
  - 새로운 유저 생성
  ```
  {
    "user":{
      "id": 1,
      "name": "Jung Yoon Kim",
      "email": "haruholic@daum.net",
      "type": "facebook.com",
      "token": "4aO7llSZfoQ9qYhSXDiWyAbuuYl2",
      "updatedAt": "2019-05-18T13:44:19.377Z",
      "createdAt": "2019-05-18T13:44:19.377Z"
    },
    "new": true
  }
  ```
  - 이미 존재하는 유저
  ```
  {
    "new": false
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

## Quest

### 퀘스트 목록

- URI
  ```
  GET /api/quests
  ```
- Return
  ```
  [
    {
        "id": 2,
        "userId": 1,
        "isProgress": false,
        "place": "아아",
        "person": "아아아",
        "name": "으아",
        "endAt": "2019-05-18T16:52:49.000Z",
        "isPrivate": true,
        "like": 0,
        "createdAt": "2019-05-18T16:46:30.000Z",
        "updatedAt": "2019-05-18T16:52:49.000Z"
    }
  ]
  ```

* URI
  ```
  GET /api/quests
  ```
* Return
  ```
  {
    "id": 2,
    "userId": 1,
    "isProgress": false,
    "place": "아아",
    "person": "아아아",
    "name": "으아",
    "endAt": "2019-05-18T16:52:49.000Z",
    "isPrivate": true,
    "like": 0,
    "createdAt": "2019-05-18T16:46:30.000Z",
    "updatedAt": "2019-05-18T16:52:49.000Z"
  }
  ```

### 퀘스트 삭제

- URI
  ```
  DELETE /api/quests/:id
  ```

### 퀘스트 수정(포기 or 성공 버튼 눌렀을 때)

- URI
  ```
  PATCH /api/quests/:id
  ```
- Body
  ```
  {
    isPrivate: boolean
  }
  // 포기, 성공 버튼 누르고 그 다음 화면인 공유 여부를 선택할 때의 결과만 보내주시면 됩니다
  ```
