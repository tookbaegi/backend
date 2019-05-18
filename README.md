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
  GET /api/users/:id
  ```
- Return
  ```
  {
    "id": 1,
    "name": "ㅂㅈㄷㄱㅂㅈㄷㄱ",
    "email": "haruholic@daum.net",
    "type": "facebook.com",
    "token": "4aO7llSZfoQ9qYhSXDiWyAbuuYl2",
    "createdAt": "2019-05-18T17:11:48.000Z",
    "updatedAt": "2019-05-18T18:12:22.000Z",
    "level": 1
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

### 퀘스트 생성

- URI
  ```
  POST /api/quests
  ```
- Body
  ```
  {
    "userId": Number,
    "person": String,
    "place": String,
    "name": String,
  }
  ```
- Return
  ```
  {
    "isProgress": true,
    "like": 0,
    "id": 15,
    "userId": "1",
    "person": "밀치는 할머니",
    "place": "버스에서",
    "name": "에게 한마",
    "updatedAt": "2019-05-18T23:21:27.081Z",
    "createdAt": "2019-05-18T23:21:27.081Z"
  }
  ```

### 퀘스트 목록 가져오기

- URI
  ```
  GET /api/quests
  ```
- Return
  ```
  [
    {
        "id": 1,
        "userId": 1,
        "isProgress": true,
        "place": "회식자리에서",
        "person": "부장님",
        "name": "모르게 신속히 9시에 빠져나가기",
        "endAt": null,
        "isPrivate": null,
        "like": 0,
        "createdAt": "2019-05-18T20:21:23.000Z",
        "updatedAt": "2019-05-18T20:21:23.000Z",
        "comments": [
            {
                "id": 1,
                "content": "1",
                "questId": 1,
                "userId": 1,
                "createdAt": "2019-05-18T20:21:24.000Z",
                "updatedAt": "2019-05-18T20:21:24.000Z",
                "user": {
                    "id": 1,
                    "name": "2",
                    "email": "1",
                    "type": "1",
                    "token": "1",
                    "createdAt": "2019-05-18T20:21:20.000Z",
                    "updatedAt": "2019-05-18T20:21:20.000Z"
                }
            },
            {
                "id": 2,
                "content": "1",
                "questId": 1,
                "userId": 1,
                "createdAt": "2019-05-18T20:21:25.000Z",
                "updatedAt": "2019-05-18T20:21:25.000Z",
                "user": {
                    "id": 1,
                    "name": "2",
                    "email": "1",
                    "type": "1",
                    "token": "1",
                    "createdAt": "2019-05-18T20:21:20.000Z",
                    "updatedAt": "2019-05-18T20:21:20.000Z"
                }
            }
        ]
    }
  ]
  ```

### 자신의 퀘스트 목록 가져오기

- URI
  ```
  GET /api/quests/:userId
  ```
- Return
  ```
  {
    "publicQuests": [], // 공유한 퀘스트
    "progressQuests": [], // 진행중인 퀘스트
    "completeQuests": [ // 완료한 퀘스트
        {
            "id": 2,
            "userId": 1,
            "isProgress": false,
            "place": "아아",
            "person": "아아아",
            "name": "으아",
            "endAt": "2019-05-18T16:52:49.000Z",
            "isPrivate": true,
            "like": 1,
            "createdAt": "2019-05-18T16:46:30.000Z",
            "updatedAt": "2019-05-18T17:44:09.000Z"
        }
    ]
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

### 해당 장소와 사람에 해당하는 퀘스트 목록 불러오기

- URI
  ```
  GET /api/quests?place=PLACE&person=PERSON
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

### 게시글 좋아요

- URI
  ```
  POST /api/quests/:id/like
  ```

## Comment

### 댓글 생성

- URI
  ```
  POST /api/comments
  ```
- Body
  ```
  {
    content: String,
    questId: Number,
    userId: Number
  }
  ```
- Return
  ```
  {
    "id": 3,
    "content": "3",
    "userId": "1",
    "questId": "1",
    "updatedAt": "2019-05-18T17:14:02.575Z",
    "createdAt": "2019-05-18T17:14:02.575Z"
  }
  ```

### 댓글 수정

- URI
  ```
  PATCH /api/comments/:id
  ```
- Body
  ```
  {
    content: String
  }
  ```

### 댓글 삭제

- URI
  ```
  DELETE /api/comments/:id
  ```

### 해당 퀘스트의 댓글 목록

- URI
  ```
  GET /api/comments?questId=QUEST_ID
  ```
- Return
  ```
  [
    {
        "id": 1,
        "content": "3",
        "questId": 1,
        "userId": 1,
        "createdAt": "2019-05-18T17:07:40.000Z",
        "updatedAt": "2019-05-18T17:09:18.000Z"
    },
    {
        "id": 2,
        "content": "3",
        "questId": 1,
        "userId": 1,
        "createdAt": "2019-05-18T17:13:38.000Z",
        "updatedAt": "2019-05-18T17:13:38.000Z"
    },
    {
        "id": 3,
        "content": "3",
        "questId": 1,
        "userId": 1,
        "createdAt": "2019-05-18T17:14:02.000Z",
        "updatedAt": "2019-05-18T17:14:02.000Z"
    },
    {
        "id": 4,
        "content": "으아",
        "questId": 3,
        "userId": 1,
        "createdAt": "2019-05-18T18:12:28.000Z",
        "updatedAt": "2019-05-18T18:12:28.000Z"
    }
  ]
  ```
