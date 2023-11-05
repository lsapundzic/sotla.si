import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Spinner,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <h1>ddc</h1>

      <Button>Hello</Button>

      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Spinner />
    </div>
  );
}
