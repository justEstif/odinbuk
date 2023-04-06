# Routes

## users

| Type       | Route                            | Function                                               |
| ---------- | -------------------------------- | ------------------------------------------------------ |
| [ ] GET    | /users                           | get all users                                          |
| [ ] GET    | /users/:id                       | get user using user id                                 |
| [ ] GET    | /users/:id/posts                 | get user posts using user id                           |
| [ ] GET    | /users/:id/profile               | get user profile using user id                         |
| [ ] GET    | /users/:id/liked-posts           | get user liked posts using user id                     |
| [ ] GET    | /users/:id/friends               | get user friends using user id                         |
| [ ] GET    | /users/:id/sent-requests         | get user received-requests                             |
| [ ] GET    | /users/:id/received-requests     | get user sent-requests                                 |
| [ ] POST   | /users/:id/posts                 | create a post, only if user id matches session user id |
| [ ] POST   | /users/:id/sent-requests/:id     | send a friend request                                  |
| [ ] POST   | /users/:id/received-requests/:id | accept a friend request                                |
| [ ] PUT    | /users/:id/profile               | update profile                                         |
| [ ] DELETE | /users/:id                       | delete a user                                          |
| [ ] DELETE | /users/:id/friends/:id           | delete a friend                                        |
| [ ] DELETE | /users/:id/sent-requests/:id     | delete a sent friend request                           |
| [ ] DELETE | /users/:id/received-requests/:id | delete a received friend request                       |

## posts

| HTTP       | Route                            | Description                                          |
| ---------- | -------------------------------- | ---------------------------------------------------- |
| [ ] GET    | [`/posts`](#get-posts)           | get posts                                            |
| [ ] POST   | [`/posts`](#post-postsid)        | create a post                                        |
| [ ] GET    | /posts/:id/comments              | get post comments                                    |
| [ ] GET    | /posts/:id/likes                 | get post likes                                       |
| [ ] GET    | /posts/:id                       | get post & its comments(count), likes(count)         |
| [ ] PUT    | /posts/:id                       | update a post                                        |
| [ ] DELETE | /posts/:id                       | delete post, comments, likes                         |
| [ ] GET    | /posts/postId                    | get posts, likes and comments count using post id    |
| [ ] GET    | /posts/postId/likes              | get post likes using post id                         |
| [ ] GET    | /posts/postId/comments           | get all the comments of a post                       |
| [ ] GET    | /posts/postId/comments/commentId | get a comment of a post                              |
| [ ] POST   | /posts/postId/likes              | like/unlike a post                                   |
| [ ] POST   | /posts/postId/comments           | comment on a post                                    |
| [ ] POST   | /posts/postId/comments/commentId | comment on a comment                                 |
| [ ] POST   | /posts/:id                       | update a post                                        |
| [ ] PUT    | /posts/:id/comments/:id          | update a comment                                     |
| [ ] DELETE | /posts/:id                       | delete a post, only if the post if the current users |
| [ ] DELETE | /posts/:id/comments/:id          | delete a comment                                     |
| [ ] POST   | /posts                           | create a post                                        |
