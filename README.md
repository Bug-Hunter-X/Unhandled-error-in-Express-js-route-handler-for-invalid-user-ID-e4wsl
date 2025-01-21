# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers:  lack of error handling for invalid input.  Specifically, the code attempts to parse a user ID as an integer without first validating that the ID is actually a number.

## Bug Description
The `bug.js` file contains an Express.js route handler that fetches a user based on their ID.  If the ID is not a valid integer, the `parseInt()` function will return `NaN`, leading to the `find()` method failing to locate the user.  This results in the route handler not sending a proper response, potentially causing server errors or unexpected behavior. 

## Solution
The `bugSolution.js` file demonstrates the corrected code, including robust error handling to prevent such issues. The solution includes checks to ensure the user ID is a valid number before attempting to parse it.  Appropriate error responses are returned if the ID is invalid or the user is not found. 