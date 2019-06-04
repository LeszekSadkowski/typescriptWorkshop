import React from 'react';
import { Card, CardBody, CardTitle, Button, Col } from 'reactstrap';

interface SingleRoomsProps {
  name: string;
  likes: number;
  addLike: (id: number) => void;
  deleteRoom: (id: number) => void;

  id: number,
}

class SingleRoom extends React.PureComponent<SingleRoomsProps> {
  public addLike = () => {
    this.props.addLike(this.props.id);
  }


  public deleteRoom = () => {
    this.props.deleteRoom(this.props.id)
  }
  public render() {
    return (
      <Col md='4'>
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <div>
              Likes: {this.props.likes}
            </div>
            <Button onClick={this.addLike}>Like</Button>
            <Button onClick={this.deleteRoom}>usuń</Button>

          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default SingleRoom;
