import {Button, ButtonGroup} from '@chakra-ui/react'
import {Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'

export default function Home() {
    return (
        <div>
            <Button colorScheme="red">Hello</Button>
            <Card>
                <CardBody>
                    <p>Hello</p>
                </CardBody>
            </Card>
        </div>
    )
}
