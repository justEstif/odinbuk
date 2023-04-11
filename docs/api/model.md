<details>
<summary>user</summary>

```prisma
model AuthUser {
  id           String        @id @unique
  username     String        @unique
  // posts
  posts      Post[] @relation("Posts")
  likedPosts Post[] @relation("LikedPosts")

  // comments
  comments      Comment[] @relation("Comments")
  likedComments Comment[] @relation("LikedComments")

  // received requests
  sentRequests     User[] @relation("Requests")
  receivedRequests User[] @relation("Requests")

  // friends
  friends   User[] @relation("Friends")
  friendsOf User[] @relation("Friends")
  @@map("auth_user")
}
```

</details>
<details>
<summary>Post</summary>

```prisma

model Post {
  id String @id @default(cuid())

  // date
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // post content
  content String
  // TODO: content type

  // user
  user   AuthUser   @relation("Posts", fields: [userId], references: [id], onDelete: Cascade)
  userId String

  // likes
  likes User[] @relation("LikedPosts")

  // comments
  comments Comment[] @relation("Comments")
}

```

</details>

<details>
<summary>Comments</summary>

```prisma

model Comment {
  id      String @id @default(cuid())
  content String

// date
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt

// post
post Post @relation("Comments", fields: [postId], references: [id], onDelete: Cascade)
postId String

// user
user User @relation("Comments", fields: [userId], references: [id], onDelete: Cascade)
userId String

// likes
likes User[] @relation("LikedComments")

// comment to comment relation
parentComment Comment? @relation("CommentParentsComment", fields: [parentCommentId], references: [id])
parentCommentId String?
childComments Comment[] @relation("CommentParentsComment")
}

```

</details>
