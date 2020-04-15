# bluedot-nodejs-sdk

## API Documentation for Bluedot V2 
- https://config-docs.bluedot.io/  
- https://docs.bluedot.io/config-api/  

### credentials
#### [createTokenRequest](https://config-docs.bluedot.io/#operation/createTokenRequest)
Triggers a password reset token  

```javascript
# POST: /password/token-request

const respone = await bluedot.api.createTokenRequest(body);
```
            
#### [resetPassword](https://config-docs.bluedot.io/#operation/resetPassword)
Uses password reset token to change password  

```javascript
# POST: /password/token

const respone = await bluedot.api.resetPassword(body);
```
            
#### [createNewPassword](https://config-docs.bluedot.io/#operation/createNewPassword)
Uses the temporary password to change a newly created user's password  

```javascript
# POST: /password/new

const respone = await bluedot.api.createNewPassword(body);
```
            
### tags
#### [getTags](https://config-docs.bluedot.io/#operation/getTags)
Gets a list of all tags being used on zones by projectId  
Returns tags by projectId  

```javascript
# GET: /tags

const respone = await bluedot.api.getTags({ projectId });
```
            
### sessions
#### [createSession](https://config-docs.bluedot.io/#operation/createSession)
Authenticates a user  

```javascript
# POST: /sessions

const respone = await bluedot.api.createSession(body);
```
            
#### [deleteSession](https://config-docs.bluedot.io/#operation/deleteSession)
Logs a user out  

```javascript
# DELETE: /sessions

const respone = await bluedot.api.deleteSession(body);
```
            
#### [refreshSession](https://config-docs.bluedot.io/#operation/refreshSession)
Refreshes a session  

```javascript
# PUT: /sessions

const respone = await bluedot.api.refreshSession(body);
```
            
### users
#### [addUser](https://config-docs.bluedot.io/#operation/addUser)
Adds a user  

```javascript
# POST: /users

const respone = await bluedot.api.addUser(body);
```
            
#### [searchUsers](https://config-docs.bluedot.io/#operation/searchUsers)
Gets all users  

```javascript
# GET: /users

const respone = await bluedot.api.searchUsers(query);
```
            
#### [replaceUser](https://config-docs.bluedot.io/#operation/replaceUser)
Updates a complete user  

```javascript
# PUT: /users/{userId}

const respone = await bluedot.api.replaceUser(userId, body);
```
            
#### [getUserById](https://config-docs.bluedot.io/#operation/getUserById)
Finds user by userId  
Returns a single user  

```javascript
# GET: /users/{userId}

const respone = await bluedot.api.getUserById(userId);
```
            
#### [deleteUser](https://config-docs.bluedot.io/#operation/deleteUser)
Deletes a user  

```javascript
# DELETE: /users/{userId}

const respone = await bluedot.api.deleteUser(userId);
```
            
#### [updateUser](https://config-docs.bluedot.io/#operation/updateUser)
Updates a user  

```javascript
# PATCH: /users/{userId}

const respone = await bluedot.api.updateUser(userId, body);
```
            
### projects
#### [addProject](https://config-docs.bluedot.io/#operation/addProject)
Adds a project  

```javascript
# POST: /projects

const respone = await bluedot.api.addProject(body);
```
            
#### [getProjects](https://config-docs.bluedot.io/#operation/getProjects)
Gets all projects by accountId  

```javascript
# GET: /projects

const respone = await bluedot.api.getProjects(query);
```
            
#### [replaceProject](https://config-docs.bluedot.io/#operation/replaceProject)
Updates a complete project  

```javascript
# PUT: /projects/{projectId}

const respone = await bluedot.api.replaceProject(projectId, body);
```
            
#### [getProjectById](https://config-docs.bluedot.io/#operation/getProjectById)
Finds project by ID  
Returns a single project  

```javascript
# GET: /projects/{projectId}

const respone = await bluedot.api.getProjectById(projectId);
```
            
#### [deleteProject](https://config-docs.bluedot.io/#operation/deleteProject)
Deletes a project  

```javascript
# DELETE: /projects/{projectId}

const respone = await bluedot.api.deleteProject(projectId);
```
            
#### [updateProject](https://config-docs.bluedot.io/#operation/updateProject)
Updates an project  

```javascript
# PATCH: /projects/{projectId}

const respone = await bluedot.api.updateProject(projectId, body);
```
            
### zones
#### [addZone](https://config-docs.bluedot.io/#operation/addZone)
Adds a zone to the project  

```javascript
# POST: /zones

const respone = await bluedot.api.addZone(body);
```
            
#### [getZones](https://config-docs.bluedot.io/#operation/getZones)
Gets all zones by project Id  
Returns zones by query / default offset=0 / default limit=100  

```javascript
# GET: /zones

const respone = await bluedot.api.getZones({ projectId });
```
            
#### [replaceZone](https://config-docs.bluedot.io/#operation/replaceZone)
Replaces a zone  
Returns a single zone  

```javascript
# PUT: /zones/{zoneId}

const respone = await bluedot.api.replaceZone(zoneId, body);
```
            
#### [getZoneById](https://config-docs.bluedot.io/#operation/getZoneById)
Finds a zone by zoneId  
Returns a single zone  

```javascript
# GET: /zones/{zoneId}

const respone = await bluedot.api.getZoneById(zoneId);
```
            
#### [deleteZone](https://config-docs.bluedot.io/#operation/deleteZone)
Deletes a zone  

```javascript
# DELETE: /zones/{zoneId}

const respone = await bluedot.api.deleteZone(zoneId);
```
            
#### [updateZone](https://config-docs.bluedot.io/#operation/updateZone)
Updates a zone  

```javascript
# PATCH: /zones/{zoneId}

const respone = await bluedot.api.updateZone(zoneId, body);
```
            
#### [getZoneClusters](https://config-docs.bluedot.io/#operation/getZoneClusters)
Gets zone clusters by project Id  
Returns an array of zoneClusters  

```javascript
# GET: /zones/clusters

const respone = await bluedot.api.getZoneClusters({ projectId, northeast, southwest });
```
            
#### [getZonesCount](https://config-docs.bluedot.io/#operation/getZonesCount)
Gets zones count per project Id  
Returns a number with the number of zones  

```javascript
# GET: /zones/count

const respone = await bluedot.api.getZonesCount({ projectId });
```
            
### beacons
#### [addBeacon](https://config-docs.bluedot.io/#operation/addBeacon)
Adds a beacon  

```javascript
# POST: /beacons

const respone = await bluedot.api.addBeacon(body);
```
            
#### [getBeacons](https://config-docs.bluedot.io/#operation/getBeacons)
Gets all beacons by account  

```javascript
# GET: /beacons

const respone = await bluedot.api.getBeacons(query);
```
            
#### [getBeaconById](https://config-docs.bluedot.io/#operation/getBeaconById)
Finds a beacon by beaconId  
Returns a single beacon  

```javascript
# GET: /beacons/{beaconId}

const respone = await bluedot.api.getBeaconById(beaconId);
```
            
#### [deleteBeacon](https://config-docs.bluedot.io/#operation/deleteBeacon)
Deletes a beacon  

```javascript
# DELETE: /beacons/{beaconId}

const respone = await bluedot.api.deleteBeacon(beaconId);
```
            
#### [replaceBeacon](https://config-docs.bluedot.io/#operation/replaceBeacon)
Updates a complete beacon  

```javascript
# PUT: /beacons/{beaconId}

const respone = await bluedot.api.replaceBeacon(beaconId, body);
```
            
#### [updateBeacon](https://config-docs.bluedot.io/#operation/updateBeacon)
Updates a beacon  

```javascript
# PATCH: /beacons/{beaconId}

const respone = await bluedot.api.updateBeacon(beaconId, body);
```
            

## V1
For V1 please use the official guide:  
https://github.com/Bluedot-Innovation/PublicAPI-Client-Node
