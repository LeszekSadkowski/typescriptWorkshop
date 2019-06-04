import RoomReducersState from '../roomReducer';

describe('Room reducer', () => {
    it('should add new room', () => {
        const state = {
            rooms: [{
                id: 1,
                likes: 5,
                name: 'Example name',
            }]
        };
        const result = RoomReducersState(state, { type: 'ADD_ROOM', payload: { roomName: 'enigma' } });
        expect(result.rooms.length).toEqual(state.rooms.length + 1);
        expect(result.rooms).toContainEqual(expect.objectContaining({name: 'enigma', id: expect.anything()}))
    });
    it('should add new room', () => {
        const state = {
            rooms: [{
                id: 1,
                likes: 5,
                name: 'Example name',
            }]
        };
        const result = RoomReducersState(state, { type: 'DELETE_ROOM', payload: { id: 1 } });
        expect(result.rooms.length).toEqual(state.rooms.length -1);
    });


});
