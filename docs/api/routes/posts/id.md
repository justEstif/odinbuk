# posts/:id

- `GET posts/:id`: get post, comment count and like count.
- `PUT posts/:id`: edit post
- `DELETE posts/:id`: delete post

- `GET posts/:id/likes`: get post likes
- `POST posts/:id/likes`: create post like
- `DELETE posts/:id/likes`: delete post like

- `GET posts/:id/comments`: get post's comments, with likes
- `POST posts/:id/comments`: create a comment
- `PUT posts/:id/comments/:id`: update a comment
- `DELETE posts/:id/comments/:id`: delete a comment

- `POST posts/:id/comments/:id`: create a child comment
- `POST posts/:id/comments/:id/likes`: create a comment like
- `DELETE posts/:id/comments/:id/likes`: create a comment like
