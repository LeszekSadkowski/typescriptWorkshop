import { addRoom, addLike } from '../roomActions';

describe('room actions test', () => {
    it('should return add room action', () => {
        const name = 'example name';
        const result = addRoom(name);
        expect(result.payload).toEqual({ roomName: name });
        expect(result.type).toEqual('ADD_ROOM' )
    })
    it('should return added like room action', () => {
        const like = 2;
        const result = addLike(like);
        expect(result.payload).toEqual({ id: like });
        expect(result.type).toEqual('ADD_LIKE')
    })
})