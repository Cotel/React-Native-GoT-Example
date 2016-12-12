import axios from 'axios';

export const API_URL = "https://api.got.show";

export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const LIST_CHARACTERS = 'LIST_CHARACTERS';
export const LIST_CHARACTERS_OFFLINE = 'LIST_CHARACTERS_OFFLINE';

export function selectCharacter(char) {
    return {
        type: SELECT_CHARACTER,
        payload: char
    }
}

export function listOfflineCharacters() {
    return {
        type: LIST_CHARACTERS_OFFLINE
    }
}

export function listCharacters() {
    return (dispatch, getState) => {
        fetch("http://anapioficeoandfire.com/api/characters/444")
            .then((response) => {
                dispatch(
                    {
                        type: LIST_CHARACTERS,
                        payload: response.data
                    }
                )
            })
            .catch((error) => {
                dispatch(
                    {
                        type: LIST_CHARACTERS,
                        payload: error
                    }
                )
            })
    }
}