# Pages

## auth

- /sign-up
  - check if the user is logged in
  - if user -> reroute to home page
- /sign-in
- /sign-out

## users

- /users

  - show all users of site (pagination)
  - show friend/friend request status with the user

- /users/<username>

  - show posts, and friends of the user

  - if the user is me
    - edit profile option
    - show friends requests: pending and received
      - options to accept/deny received and remove sent
    - show me all the posts, comments and likes I have made
      - option to delete/edit posts, comments and likes
      - option to delete other users comments on my post
    - delete comments made on your post

## posts

- /

  - home page: only access if logged in; else route to /sign-in
  - create post option
  - show the posts of friends in desc order
  - option to like and comment

- /posts/<postId>

  - show specific post
  - with comments
