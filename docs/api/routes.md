# API Routes

## Users

### Create new posts

<details>
 <summary>POST /users/:id/posts</summary>

#### Parameters

> | name              | type     | data type    | description                  |
> | ----------------- | -------- | ------------ | ---------------------------- |
> | `likes`           | optional | int ($int64) | The specific stub numeric id |
> | `comments`        | optional | int ($int64) | The specific stub numeric id |
> | `comments`        | optional | int ($int64) | The specific stub numeric id |
> | `stub_numeric_id` | optional | int ($int64) | The specific stub numeric id |

#### Responses

> | http code | content-type               | response                                 |
> | --------- | -------------------------- | ---------------------------------------- |
> | `201`     | `text/plain;charset=UTF-8` | `Configuration created successfully`     |
> | `400`     | `application/json`         | `{"code":"400","message":"Bad Request"}` |
> | `405`     | `text/html;charset=utf-8`  | None                                     |

</details>
