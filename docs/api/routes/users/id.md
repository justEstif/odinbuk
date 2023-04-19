# users/:id

content: liked-posts, liked-comments, posts

- `GET users/:id`: get user summary and posts
- `GET users/:id?content=liked-posts`: get liked posts
- `GET users/:id?content=friends`: get liked posts
- `GET users/:id?content=comments`: get comments
- `GET users/:id?content=liked-comments`: get liked comments

- `GET users/:id?content=requests`: get sent requests
- `POST users/:id?content=requests`: get sent requests

- `GET users/:id?content=received-requests`: get received requests

- `GET users/:id?content=sent-requests`: get sent posts
- `POST users/:id?content=sent-request`: send a friend request
- `DELETE users/:id?content=sent-request`: delete sent request

- `POST users/:id?content=accept-request`:
- `POST users/:id?content=decline-request`
- `POSTS users/:id?content=unfriend`

- `DELETE users/:id?content=user`: delete user

- `PUT users/:id`
- `PUT users/:id?content=user`: edit user
