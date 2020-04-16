# bluedot-nodejs-sdk

## GetStarted

```javascript
const Bluedot = require('bluedot-nodejs-sdk');

const bluedot = new Bluedot({ email, password });

const projects = await bluedot.api.getProjects();
```

## V1
For V1 please use the official guide:  
https://github.com/Bluedot-Innovation/PublicAPI-Client-Node


## API Documentation for Bluedot V2 
- https://config-docs.bluedot.io/  
- https://docs.bluedot.io/config-api/  

### credentials
#### createTokenRequest
Triggers a password reset token  
[https://config-docs.bluedot.io/#operation/createTokenRequest](https://config-docs.bluedot.io/#operation/createTokenRequest)  

```javascript
# POST: /password/token-request
const respone = await bluedot.api.createTokenRequest(body);
```
            
#### resetPassword
Uses password reset token to change password  
[https://config-docs.bluedot.io/#operation/resetPassword](https://config-docs.bluedot.io/#operation/resetPassword)  

```javascript
# POST: /password/token
const respone = await bluedot.api.resetPassword(body);
```
            
#### createNewPassword
Uses the temporary password to change a newly created user's password  
[https://config-docs.bluedot.io/#operation/createNewPassword](https://config-docs.bluedot.io/#operation/createNewPassword)  

```javascript
# POST: /password/new
const respone = await bluedot.api.createNewPassword(body);
```
            
### tags
#### getTags
Gets a list of all tags being used on zones by projectId  
[https://config-docs.bluedot.io/#operation/getTags](https://config-docs.bluedot.io/#operation/getTags)  

```javascript
# GET: /tags
const respone = await bluedot.api.getTags({ projectId });
```
            
### sessions
#### createSession
Authenticates a user  
[https://config-docs.bluedot.io/#operation/createSession](https://config-docs.bluedot.io/#operation/createSession)  

```javascript
# POST: /sessions
const respone = await bluedot.api.createSession(body);
```
            
#### deleteSession
Logs a user out  
[https://config-docs.bluedot.io/#operation/deleteSession](https://config-docs.bluedot.io/#operation/deleteSession)  

```javascript
# DELETE: /sessions
const respone = await bluedot.api.deleteSession(body);
```
            
#### refreshSession
Refreshes a session  
[https://config-docs.bluedot.io/#operation/refreshSession](https://config-docs.bluedot.io/#operation/refreshSession)  

```javascript
# PUT: /sessions
const respone = await bluedot.api.refreshSession(body);
```
            
### users
#### addUser
Adds a user  
[https://config-docs.bluedot.io/#operation/addUser](https://config-docs.bluedot.io/#operation/addUser)  

```javascript
# POST: /users
const respone = await bluedot.api.addUser(body);
```
            
#### searchUsers
Gets all users  
[https://config-docs.bluedot.io/#operation/searchUsers](https://config-docs.bluedot.io/#operation/searchUsers)  

```javascript
# GET: /users
const respone = await bluedot.api.searchUsers(query);
```
            
#### replaceUser
Updates a complete user  
[https://config-docs.bluedot.io/#operation/replaceUser](https://config-docs.bluedot.io/#operation/replaceUser)  

```javascript
# PUT: /users/{userId}
const respone = await bluedot.api.replaceUser(userId, body);
```
            
#### getUserById
Finds user by userId  
[https://config-docs.bluedot.io/#operation/getUserById](https://config-docs.bluedot.io/#operation/getUserById)  

```javascript
# GET: /users/{userId}
const respone = await bluedot.api.getUserById(userId);
```
            
#### deleteUser
Deletes a user  
[https://config-docs.bluedot.io/#operation/deleteUser](https://config-docs.bluedot.io/#operation/deleteUser)  

```javascript
# DELETE: /users/{userId}
const respone = await bluedot.api.deleteUser(userId);
```
            
#### updateUser
Updates a user  
[https://config-docs.bluedot.io/#operation/updateUser](https://config-docs.bluedot.io/#operation/updateUser)  

```javascript
# PATCH: /users/{userId}
const respone = await bluedot.api.updateUser(userId, body);
```
            
### projects
#### addProject
Adds a project  
[https://config-docs.bluedot.io/#operation/addProject](https://config-docs.bluedot.io/#operation/addProject)  

```javascript
# POST: /projects
const respone = await bluedot.api.addProject(body);
```
            
#### getProjects
Gets all projects by accountId  
[https://config-docs.bluedot.io/#operation/getProjects](https://config-docs.bluedot.io/#operation/getProjects)  

```javascript
# GET: /projects
const respone = await bluedot.api.getProjects(query);
```
            
#### replaceProject
Updates a complete project  
[https://config-docs.bluedot.io/#operation/replaceProject](https://config-docs.bluedot.io/#operation/replaceProject)  

```javascript
# PUT: /projects/{projectId}
const respone = await bluedot.api.replaceProject(projectId, body);
```
            
#### getProjectById
Finds project by ID  
[https://config-docs.bluedot.io/#operation/getProjectById](https://config-docs.bluedot.io/#operation/getProjectById)  

```javascript
# GET: /projects/{projectId}
const respone = await bluedot.api.getProjectById(projectId);
```
            
#### deleteProject
Deletes a project  
[https://config-docs.bluedot.io/#operation/deleteProject](https://config-docs.bluedot.io/#operation/deleteProject)  

```javascript
# DELETE: /projects/{projectId}
const respone = await bluedot.api.deleteProject(projectId);
```
            
#### updateProject
Updates an project  
[https://config-docs.bluedot.io/#operation/updateProject](https://config-docs.bluedot.io/#operation/updateProject)  

```javascript
# PATCH: /projects/{projectId}
const respone = await bluedot.api.updateProject(projectId, body);
```
            
### zones
#### addZone
Adds a zone to the project  
[https://config-docs.bluedot.io/#operation/addZone](https://config-docs.bluedot.io/#operation/addZone)  

```javascript
# POST: /zones
const respone = await bluedot.api.addZone(body);
```
            
#### getZones
Gets all zones by project Id  
[https://config-docs.bluedot.io/#operation/getZones](https://config-docs.bluedot.io/#operation/getZones)  

```javascript
# GET: /zones
const respone = await bluedot.api.getZones({ projectId });
```
            
#### replaceZone
Replaces a zone  
[https://config-docs.bluedot.io/#operation/replaceZone](https://config-docs.bluedot.io/#operation/replaceZone)  

```javascript
# PUT: /zones/{zoneId}
const respone = await bluedot.api.replaceZone(zoneId, body);
```
            
#### getZoneById
Finds a zone by zoneId  
[https://config-docs.bluedot.io/#operation/getZoneById](https://config-docs.bluedot.io/#operation/getZoneById)  

```javascript
# GET: /zones/{zoneId}
const respone = await bluedot.api.getZoneById(zoneId);
```
            
#### deleteZone
Deletes a zone  
[https://config-docs.bluedot.io/#operation/deleteZone](https://config-docs.bluedot.io/#operation/deleteZone)  

```javascript
# DELETE: /zones/{zoneId}
const respone = await bluedot.api.deleteZone(zoneId);
```
            
#### updateZone
Updates a zone  
[https://config-docs.bluedot.io/#operation/updateZone](https://config-docs.bluedot.io/#operation/updateZone)  

```javascript
# PATCH: /zones/{zoneId}
const respone = await bluedot.api.updateZone(zoneId, body);
```
            
#### getZoneClusters
Gets zone clusters by project Id  
[https://config-docs.bluedot.io/#operation/getZoneClusters](https://config-docs.bluedot.io/#operation/getZoneClusters)  

```javascript
# GET: /zones/clusters
const respone = await bluedot.api.getZoneClusters({ projectId, northeast, southwest });
```
            
#### getZonesCount
Gets zones count per project Id  
[https://config-docs.bluedot.io/#operation/getZonesCount](https://config-docs.bluedot.io/#operation/getZonesCount)  

```javascript
# GET: /zones/count
const respone = await bluedot.api.getZonesCount({ projectId });
```
            
### beacons
#### addBeacon
Adds a beacon  
[https://config-docs.bluedot.io/#operation/addBeacon](https://config-docs.bluedot.io/#operation/addBeacon)  

```javascript
# POST: /beacons
const respone = await bluedot.api.addBeacon(body);
```
            
#### getBeacons
Gets all beacons by account  
[https://config-docs.bluedot.io/#operation/getBeacons](https://config-docs.bluedot.io/#operation/getBeacons)  

```javascript
# GET: /beacons
const respone = await bluedot.api.getBeacons(query);
```
            
#### getBeaconById
Finds a beacon by beaconId  
[https://config-docs.bluedot.io/#operation/getBeaconById](https://config-docs.bluedot.io/#operation/getBeaconById)  

```javascript
# GET: /beacons/{beaconId}
const respone = await bluedot.api.getBeaconById(beaconId);
```
            
#### deleteBeacon
Deletes a beacon  
[https://config-docs.bluedot.io/#operation/deleteBeacon](https://config-docs.bluedot.io/#operation/deleteBeacon)  

```javascript
# DELETE: /beacons/{beaconId}
const respone = await bluedot.api.deleteBeacon(beaconId);
```
            
#### replaceBeacon
Updates a complete beacon  
[https://config-docs.bluedot.io/#operation/replaceBeacon](https://config-docs.bluedot.io/#operation/replaceBeacon)  

```javascript
# PUT: /beacons/{beaconId}
const respone = await bluedot.api.replaceBeacon(beaconId, body);
```
            
#### updateBeacon
Updates a beacon  
[https://config-docs.bluedot.io/#operation/updateBeacon](https://config-docs.bluedot.io/#operation/updateBeacon)  

```javascript
# PATCH: /beacons/{beaconId}
const respone = await bluedot.api.updateBeacon(beaconId, body);
```
            

## V1
For V1 please use the official guide:  
https://github.com/Bluedot-Innovation/PublicAPI-Client-Node
