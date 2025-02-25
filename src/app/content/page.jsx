import { allPages } from "contentlayer/generated";

console.log(allPages);
console.log(allPages[0].title);

const documentationContent = () => {
  return <h1>{allPages[0].title}</h1>;
};

export default documentationContent;
