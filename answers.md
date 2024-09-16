- [ ] Mention two parts of Express that you learned about this week.
      Express Routers
      Express Convenience Helpers
- [ ] Describe Middleware?
      They are functions that can operate on request and response objects, or send them
      to the next middleware in your server/list.

- [ ] Describe a Resource?
      Everything we use in servers are a resource. They are accessed by a url and managed with HTTP protocols.
- [ ] What can the API return to help clients know if a request was successful?

It can return HTTP status codes that let the client know whether or not the request worked.

- [ ] How can we partition our application into sub-applications?
      we can use server.use() lets us split endpoints between different files.
