## Sistema para Administrar Profesores y Alumnos


### [GET] / --> Health conection

### [GET] /users --> Get all users except who is requesting

### [GET] /users/{user_id} --> Get a specific user

### [GET] /users/{user_id}/enable --> Activate an user

### [GET] /users/{user_id}/disable --> Deactivate an user

### [POST] /users/sign-in --> Sign-in with a existing user in db

### [POST] /users/sign-up --> Sign-up a new user in db

### [GET] /logout --> Destroy a session