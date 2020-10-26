# OAuth Comparative Analysis

## OAuth Provider Name
**Facebook**

### Research Conducted By:
* Abdallah Zakaria
* Abdulhakim Zatar
* Aya Akrabawi
* Mohammad Eshtaiwi

### Overall Score and Comments
#### Score (Out of 10): 9
#### General Comments
Full stack with simple front end page using oauth from facebook to login and store the user to db.

#### Pros
* Secure
* Do it onec and work forever
* Can create test users
* Have passport libery for facebook
* Credibility for users

#### Cons
* Have many ways to setup
* Depened on third party, maybe it vanish oneday
* Scope is not clear
* Some scopes require to submit permission request and it take time

### Ratings and Reviews
#### Documentation
* Creating files
* Downloding dependencies
* Create app on facebook developer website
* Setup oauth route
* Create middleware
* Using passport and FacebookStrategy to do the handshake
* Send client id, secret, scope and using FacebookStrategy
* Get the profile and save it in the database and geneter token using jwt
* response with user and token

#### Systems Requirements
Above and beyond 'node' and 'linux'
* "base-64": "^0.1.0",
* "bcrypt": "^3.0.8",
* "cors": "^2.8.5",
* "dotenv": "^8.2.0",
* "express": "^4.17.1",
* "jsonwebtoken": "^8.5.1",
* "passport": "^0.4.1",
* "passport-facebook": "^3.0.0",
* "superagent": "^5.3.1"

#### Ramp-Up Projections
First two hours was for research we split and read the tasks and read the facebook documents, then two hours for coding and last hour prep the report.

#### Community Support and Adoption levels
Facebook is one of the most known platforms, you could see it almost on every website that use oauth features, 2.7 bilion active accounts on facebook.


### Links and Resources
* [framework](https://developers.facebook.com/)
* [docs](https://developers.facebook.com/docs/facebook-login/web/)
* [examples/tutorials](https://developers.facebook.com/docs/javascript/examples/)

### Code Demos
* [code repository](https://github.com/zatar-401-advanced-javascript/fb-oauth)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start`
* Endpoint: `/`
  * HTML page with link to login using facebook.
* Endpoint: `/oauth`
  * Return json object with token and user details.
