# BE Routes

- `/users`

  - GET:

- `/users/:id`
  - GET:
    - filters: ?all, ?profile, ?liked-posts, ?friends, ?sent-request, ?received-requests
  - POST:
  - PUT:
  - optional filters
    - ?all, ?profile, ?liked-posts, ?friends, ?sent-request, ?received-requests
    - posts, profile, liked-posts, friends, sent-requests, received-requests

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
| [x] POST   | /users/:id/sent-requests/:id     | send a friend request                                  |
| [x] POST   | /users/:id/received-requests/:id | accept a friend request                                |
| [x] PUT    | /users/:id/profile               | update profile                                         |
| [x] DELETE | /users/:id                       | delete a user                                          |
| [x] DELETE | /users/:id/friends/:id           | delete a friend                                        |
| [x] DELETE | /users/:id/sent-requests/:id     | delete a sent friend request                           |
| [ ] DELETE | /users/:id/received-requests/:id | delete a received friend request                       |

## posts

| HTTP       | Route                            | Description                                          |
| ---------- | -------------------------------- | ---------------------------------------------------- |
| [x] GET    | [`/posts`](#get-posts)           | get posts                                            |
| [x] POST   | [`/posts`](#post-postsid)        | create a post                                        |
| [x] GET    | /posts/:id/comments              | get post comments                                    |
| [x] GET    | /posts/:id/likes                 | get post likes                                       |
| [x] GET    | /posts/:id                       | get post & its comments(count), likes(count)         |
| [x] PUT    | /posts/:id                       | update a post                                        |
| [x] DELETE | /posts/:id                       | delete post, comments, likes                         |
| [x] GET    | /posts/postId                    | get posts, likes and comments count using post id    |
| [x] GET    | /posts/postId/likes              | get post likes using post id                         |
| [x] GET    | /posts/postId/comments           | get all the comments of a post                       |
| [x] GET    | /posts/postId/comments/commentId | get a comment of a post                              |
| [x] POST   | /posts/postId/likes              | like/unlike a post                                   |
| [x] POST   | /posts/postId/comments           | comment on a post                                    |
| [x] POST   | /posts/postId/comments/commentId | comment on a comment                                 |
| [x] POST   | /posts/:id                       | update a post                                        |
| [x] PUT    | /posts/:id/comments/:id          | update a comment                                     |
| [x] DELETE | /posts/:id                       | delete a post, only if the post if the current users |
| [x] DELETE | /posts/:id/comments/:id          | delete a comment                                     |
| [x] POST   | /posts                           | create a post                                        |
