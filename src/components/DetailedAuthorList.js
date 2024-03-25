import {
  Card,
  CardMeta,
  CardContent,
  CardHeader,
  CardDescription,
  Icon,
} from "semantic-ui-react";

function DetailedAuthorList({ authors }) {
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        {authors.map((author, index) => {
          const color =
            index % 3 === 0 ? "red" : index % 3 === 1 ? "orange" : "yellow";
          return (
            <Card key={index} color={color}>
              <CardContent>
                <CardHeader>{author.name}</CardHeader>
                <CardMeta>@{author.username}</CardMeta>
                <CardDescription>
                  <Icon name="mail" />
                  {author.email}
                </CardDescription>
              </CardContent>
              <CardContent extra>
                <Icon name="phone" />
                {author.phone}
              </CardContent>
            </Card>
          );
        })}
      </Card.Group>
    </div>
  );
}

export default DetailedAuthorList;
