const SELECT_CHARACTER = 'SELECT_CHARACTER';

export function selectCharacter(char) {
    return {
        type: SELECT_CHARACTER,
        payload: char
    }
}