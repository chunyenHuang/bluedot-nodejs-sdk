# Documentation
## credentials
### [createTokenRequest](https://config-docs.bluedot.io/#operation/createTokenRequest)
 - `POST: /password/token-request`  
 - Triggers a password reset token  
```await bluedot.api.createTokenRequest(body);```
### [resetPassword](https://config-docs.bluedot.io/#operation/resetPassword)
 - `POST: /password/token`  
 - Uses password reset token to change password  
```await bluedot.api.resetPassword(body);```
### [createNewPassword](https://config-docs.bluedot.io/#operation/createNewPassword)
 - `POST: /password/new`  
 - Uses the temporary password to change a newly created user's password  
```await bluedot.api.createNewPassword(body);```
## tags
### [getTags](https://config-docs.bluedot.io/#operation/getTags)
 - `GET: /tags`  
 - Gets a list of all tags being used on zones by projectId  
 - Returns tags by projectId  
```await bluedot.api.getTags({ projectId });```
## sessions
### [createSession](https://config-docs.bluedot.io/#operation/createSession)
 - `POST: /sessions`  
 - Authenticates a user  
```await bluedot.api.createSession(body);```
### [deleteSession](https://config-docs.bluedot.io/#operation/deleteSession)
 - `DELETE: /sessions`  
 - Logs a user out  
```await bluedot.api.deleteSession(body);```
### [refreshSession](https://config-docs.bluedot.io/#operation/refreshSession)
 - `PUT: /sessions`  
 - Refreshes a session  
```await bluedot.api.refreshSession(body);```
## users
### [addUser](https://config-docs.bluedot.io/#operation/addUser)
 - `POST: /users`  
 - Adds a user  
```await bluedot.api.addUser(body);```
### [searchUsers](https://config-docs.bluedot.io/#operation/searchUsers)
 - `GET: /users`  
 - Gets all users  
```await bluedot.api.searchUsers(query);```
### [replaceUser](https://config-docs.bluedot.io/#operation/replaceUser)
 - `PUT: /users/{userId}`  
 - Updates a complete user  
```await bluedot.api.replaceUser(userId, body);```
### [getUserById](https://config-docs.bluedot.io/#operation/getUserById)
 - `GET: /users/{userId}`  
 - Finds user by userId  
 - Returns a single user  
```await bluedot.api.getUserById(userId);```
### [deleteUser](https://config-docs.bluedot.io/#operation/deleteUser)
 - `DELETE: /users/{userId}`  
 - Deletes a user  
```await bluedot.api.deleteUser(userId);```
### [updateUser](https://config-docs.bluedot.io/#operation/updateUser)
 - `PATCH: /users/{userId}`  
 - Updates a user  
```await bluedot.api.updateUser(userId, body);```
## projects
### [addProject](https://config-docs.bluedot.io/#operation/addProject)
 - `POST: /projects`  
 - Adds a project  
```await bluedot.api.addProject(body);```
### [getProjects](https://config-docs.bluedot.io/#operation/getProjects)
 - `GET: /projects`  
 - Gets all projects by accountId  
```await bluedot.api.getProjects(query);```
### [replaceProject](https://config-docs.bluedot.io/#operation/replaceProject)
 - `PUT: /projects/{projectId}`  
 - Updates a complete project  
```await bluedot.api.replaceProject(projectId, body);```
### [getProjectById](https://config-docs.bluedot.io/#operation/getProjectById)
 - `GET: /projects/{projectId}`  
 - Finds project by ID  
 - Returns a single project  
```await bluedot.api.getProjectById(projectId);```
### [deleteProject](https://config-docs.bluedot.io/#operation/deleteProject)
 - `DELETE: /projects/{projectId}`  
 - Deletes a project  
```await bluedot.api.deleteProject(projectId);```
### [updateProject](https://config-docs.bluedot.io/#operation/updateProject)
 - `PATCH: /projects/{projectId}`  
 - Updates an project  
```await bluedot.api.updateProject(projectId, body);```
## zones
### [addZone](https://config-docs.bluedot.io/#operation/addZone)
 - `POST: /zones`  
 - Adds a zone to the project  
```await bluedot.api.addZone(body);```
### [getZones](https://config-docs.bluedot.io/#operation/getZones)
 - `GET: /zones`  
 - Gets all zones by project Id  
 - Returns zones by query / default offset=0 / default limit=100  
```await bluedot.api.getZones({ projectId });```
### [replaceZone](https://config-docs.bluedot.io/#operation/replaceZone)
 - `PUT: /zones/{zoneId}`  
 - Replaces a zone  
 - Returns a single zone  
```await bluedot.api.replaceZone(zoneId, body);```
### [getZoneById](https://config-docs.bluedot.io/#operation/getZoneById)
 - `GET: /zones/{zoneId}`  
 - Finds a zone by zoneId  
 - Returns a single zone  
```await bluedot.api.getZoneById(zoneId);```
### [deleteZone](https://config-docs.bluedot.io/#operation/deleteZone)
 - `DELETE: /zones/{zoneId}`  
 - Deletes a zone  
```await bluedot.api.deleteZone(zoneId);```
### [updateZone](https://config-docs.bluedot.io/#operation/updateZone)
 - `PATCH: /zones/{zoneId}`  
 - Updates a zone  
```await bluedot.api.updateZone(zoneId, body);```
### [getZoneClusters](https://config-docs.bluedot.io/#operation/getZoneClusters)
 - `GET: /zones/clusters`  
 - Gets zone clusters by project Id  
 - Returns an array of zoneClusters  
```await bluedot.api.getZoneClusters({ projectId, northeast, southwest });```
### [getZonesCount](https://config-docs.bluedot.io/#operation/getZonesCount)
 - `GET: /zones/count`  
 - Gets zones count per project Id  
 - Returns a number with the number of zones  
```await bluedot.api.getZonesCount({ projectId });```
## beacons
### [addBeacon](https://config-docs.bluedot.io/#operation/addBeacon)
 - `POST: /beacons`  
 - Adds a beacon  
```await bluedot.api.addBeacon(body);```
### [getBeacons](https://config-docs.bluedot.io/#operation/getBeacons)
 - `GET: /beacons`  
 - Gets all beacons by account  
```await bluedot.api.getBeacons(query);```
### [getBeaconById](https://config-docs.bluedot.io/#operation/getBeaconById)
 - `GET: /beacons/{beaconId}`  
 - Finds a beacon by beaconId  
 - Returns a single beacon  
```await bluedot.api.getBeaconById(beaconId);```
### [deleteBeacon](https://config-docs.bluedot.io/#operation/deleteBeacon)
 - `DELETE: /beacons/{beaconId}`  
 - Deletes a beacon  
```await bluedot.api.deleteBeacon(beaconId);```
### [replaceBeacon](https://config-docs.bluedot.io/#operation/replaceBeacon)
 - `PUT: /beacons/{beaconId}`  
 - Updates a complete beacon  
```await bluedot.api.replaceBeacon(beaconId, body);```
### [updateBeacon](https://config-docs.bluedot.io/#operation/updateBeacon)
 - `PATCH: /beacons/{beaconId}`  
 - Updates a beacon  
```await bluedot.api.updateBeacon(beaconId, body);```