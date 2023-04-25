# schema

## user

```prisma
model AuthUser {
  id           String        @id @unique
  username     String        @unique
  bio String
  imageUrl String
  posts Post[] @relation("Posts")
  likedPosts Post[] @relation("LikedPosts")

  comments Comment[] @relation("Comments")
  likedComments Comment[] @relation("LikedComments")

  friendRequests User[] @relation("Requests")
  sentRequests User[] @relation("Requests")

  friends User[] @relation("Friends")
  friendsOf User[] @relation("Friends)

  notifications Notification[]

}
```

- posts
- liked posts
- comments
- liked comments
- requests
- sent requests
- friends
- friendsOf
- notifications

## post

- content
- likes
- comments

## comment

- content
- post
- user
- child comments
- likes

## notification

- notification type
  - received request
  - request accepted
  - post liked
  - comment liked
  - comment reply
