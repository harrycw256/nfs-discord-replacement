# New Forest School Discord Replacement
In New Forest School, many pupils attend, but not all can access the discord community, so I thought I would make my own version for them.

**NOTE: Most of this code will not function properly without using a web server.** For testing, I am using `python -m http.server 80`

# Code analysis so that we're on the same page
index.html will redirect the user to auth.html if not authed, otherwise redirect them to login.html

login.html is a placeholder for the login page, though it still requires auth like it should.

auth.html is to authenticate that the person visiting the site is indeed an NFS student or has been in the past.

core.js contains variables such as the site name, site admin, and the auth functionality.

authedonly.js will redirect the user to auth.html if they are not authed, prevents skipping auth.

notauthedonly.js will redirect the user to index.html if they are authed, prevents going to auth.html when authed.
