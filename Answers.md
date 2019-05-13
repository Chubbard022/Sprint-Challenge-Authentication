
1. What is the purpose of using sessions?
    1. The purpose of using sessions is to allow access between applications and allows access to things that were possibly protected and had no access to. Once a user has access the session will persist data and allow access to the content that is restricted. We use a cookie to talk between the server and client to keep the authentication persisted.

2. What does bcrypt do to help us store passwords in a secure manner.
    1. Bcrypt allows for passwords to be hashed X amount of times. You can still use the hashed password to verify that the user when enters the password is the same as the hashed password that the backend sees;

3. What does bcrypt do to slow down attackers?
    1. Bcrypt hashes a password as many many times as preferred. You can add extra values added to the end of the password. All of these extra strengthens the password and makes it harder to decrypt and obtain users passwords.
    
4. What are the three parts of the JSON Web Token?
    1. The headers
        which type of JSON web token will be received
    2. The payload
        information we need to keep on the token
    3. The signature 
        the JWT token that is encoded
