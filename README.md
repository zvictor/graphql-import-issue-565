Please run:

```js
$ npm i
$ node test.js
```

Expected output:

```graphql
=========================== blog/Post.gql ===========================
>> CORRECT! <<

=========================== **/Post.gql ===========================
>> CORRECT! <<

=========================== **/*.gql ===========================

>> FOUND <<
type User {
  username: String!
}

>> MISSING <<
type Post {
  title: String!
  content: String!
  author: User!
}
```
