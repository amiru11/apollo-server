import users from "./users";
import posts from "./posts";

const query = `
type Query {
  ${users}
  ${posts}
}
`;

export default query;
