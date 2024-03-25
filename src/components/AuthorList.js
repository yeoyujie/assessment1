import { Card } from "semantic-ui-react";

function AuthorList({ authorNames }) {
  return (
    <div className="styles">
      <Card.Group itemsPerRow={4}>
        {authorNames.map((name, index) => {
          const color =
            index % 3 === 0 ? "red" : index % 3 === 1 ? "orange" : "yellow";
          return <Card key={index} color={color} header={name}></Card>;
        })}
      </Card.Group>
    </div>
  );
}

export default AuthorList;
