import users from "./users";
import posts from "./posts";

const mutation = `
type Mutation {
  ${users}
  ${posts}
}
`;

export default mutation;
