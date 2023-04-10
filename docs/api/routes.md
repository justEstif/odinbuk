# API Routes

## Users

### Get all users

<details>
 <summary><code>GET /users</code></summary>

#### Response

**Without filters**

`GET /users`

```json
[
	{
		"id": "userId",
		"profile": {
			"pic": ""
		},
		"status": {
			"friends": true,
			"sentRequest": false,
			"receivedRequest": false
		}
	},
	{
		"id": "userId",
		"profile": {
			"pic": ""
		},
		"status": {
			"friends": true,
			"sentRequest": false,
			"receivedRequest": false
		}
	}
]
```

**Optional filters**

- `id`: get user using user id

`GET /users?id=1234`

```json
{
	"id": "userId",
	"profile": {
		"pic": "",
		"name": "",
		"bio": ""
	},
	"status": {
		"friends": true,
		"sentRequest": false,
		"receivedRequest": false
	},
	"posts": [
		{
			"id": ""
		}
	]
}
```

- `resource`: get specific or all resource based on filter

  - `GET /users?id=1234&resource=all`
  - `GET /users?id=1234&resource=posts`
  - `GET /users?id=1234&resource=comments`
  - `GET /users?id=1234&resource=profile`
  - `GET /users?id=1234&resource=liked-posts`
  - `GET /users?id=1234&resource=friends`
  - `GET /users?id=1234&resource=sent-requests`
  - `GET /users?id=1234&resource=received-requests`
  - `GET /users?id=1234&resource=posts+comments` #TODO

</details>
