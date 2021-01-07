# Learning from past mistakes
## Issue 1
Make sure your environment variables match those that are set in the Cognito Dashboard. We had an incident where
the repository set the `redirectSignOut: http://localhost:3000/` and the console had it set to `http://localhost:3000`.

Just one `/` character threw the whole thing off.