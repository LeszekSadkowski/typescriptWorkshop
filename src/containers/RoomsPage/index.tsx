import React from 'react';
import { connect } from 'react-redux'
import { Container, Row, Card, CardBody, CardTitle, Button, Col } from 'reactstrap';
import SingleRoom from '../../components/SingleRoom';
import { RoomReducerState, Room } from '../../reducers/roomReducer';
import { addRoom, addLike, deleteRoom } from '../../actions/roomActions'

interface RoomsPageProps {
  rooms: Room[];
  addRoom: (roomName: string) => void;
  addLike: (id: number) => void;
  deleteRoom: (id: number) => void;
}

export class RoomsPage extends React.Component<RoomsPageProps> {
  public state = {
    roomName: 'salan konferancyjna'
  };

  public addRoom = () => {
    this.props.addRoom(this.state.roomName);
    this.setState({
      roomName: '',
    })
  }

  public updateRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roomName = e.target.value
    this.setState({
      roomName
    })
  }
  public addLike = (id: number ) => {
    this.props.addLike(id)
  }
  public deleteRoom = (id: number) => {
    this.props.deleteRoom(id);
  }
  public render() {
    return (
      <Container>
        <div>
          {this.state.roomName}<br />
          <input type="text"
            value={this.state.roomName}
            onChange={(e) => this.updateRoomName(e)} />
          <button onClick={this.addRoom}>Dodaj pokuj</button>
        </div>
        {/* <Button style={{marginBottom: 20}} onClick={this.addRoom}>Dodaj pokoj</Button> */}
        <Row>
          {this.props.rooms.map((item) => {
            return (
              <SingleRoom
                addLike={this.addLike}
                id={item.id}
                likes={item.likes}
                key={item.id}
                name={item.name}
              deleteRoom={this.props.deleteRoom}/>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export interface ReducerState {
  roomReducer: RoomReducerState
}

const mapStateToProps = (state: ReducerState) => {
  return ({
    rooms: state.roomReducer.rooms
  })
}

const mapDispatchToProps = {
  addLike,
  addRoom,
  deleteRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsPage);












