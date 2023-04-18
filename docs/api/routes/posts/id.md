# posts/:id

- `GET posts/:id`: get post, comment count and like count.
- `PUT posts/:id`: edit post
- `DELETE posts/:id`: delete post

- `GET posts/:id?content=likes`: get likes of post
- `POST posts/:id?content=likes`: like post
- `POST posts/:id?content=likes&comment=comment-id`: like comment
- `DELETE posts/:id?content=likes`: delete like on post

- `GET posts/:id?content=comments`: get comments of post
- `POST posts/:id?content=comments`: create comments of post
- `POST posts/:id?content=comments&comment=comment-id`: create comments of comment
- `PUT posts/:id?content=comments&comment=comment-id`: update comments of post
- `DELETE posts/:id?content=comments&comment=comment-id`: delete comment of post

- `GET posts/:id?content=comments&comment=comment-id`: get comments of comment
- `GET posts/:id?content=likes&comment=comment-id`: get likes of comment
