const { importSchema } = require('graphql-import')

const target = `type Post {
  title: String!
  content: String!
  author: User!
}

type User {
  username: String!
}
`

function run(pattern) {
  console.log('\n===========================', pattern, '===========================')

  try {
    const schema = importSchema(pattern)
    const missing = target.replace(schema, '')
    
    if(missing) {
      console.log(`\n>> FOUND <<\n${schema}`)
      console.log(`>> MISSING <<\n${missing}`)
    } else {
      console.log('>> CORRECT! <<')
    }
  } catch (e) {
    console.error(e)
  }
}

run('blog/Post.gql')
run('**/Post.gql')
run('**/*.gql')
run(['blog/Post.gql','accounts/User.gql'])
run(['accounts/User.gql','blog/Post.gql'])
