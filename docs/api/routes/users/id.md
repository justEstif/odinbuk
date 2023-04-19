# users/:id

content: liked-posts, liked-comments, posts

- `GET /users`: get user summary and post

- `GET users/:id`: get user summary and posts
- `DELETE users/:id`: delete user
- `PUT users/:id`: update user

- `GET /users/:id/posts`: get user's liked posts

- `GET /users/:id/liked-posts`: get user's liked posts
- `GET /users/:id/liked-comments`: get user's liked comments
- `GET /users/:id/comments`: get user's liked comments

- `GET /users/:id/friend-requests`: get requests
- `POST /users/:id/friend-requests/:id`: accept requests from user
- `DELETE /users/:id/friend-requests/:id`: deny request from user

- `GET /users/:id/sent-requests/`: get sent request
- `POST /users/:id/sent-requests/:id`: send a request to user
- `DELETE /users/:id/sent-requests/:id`: delete a sent request

- `GET /users/:id/friends`: get user's friends
- `DELETE /users/:id/friends/:id`: unfriend
