import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import {connect} from 'react-redux';

class CharacterList extends Component {
    renderCharacterList() {
        return this.props.characters.map((character) => {
            return (
                <CharacterCard key={character.name} character={character} />
            )
        })
    }

    render() {
        return(
            <ScrollView>
                {this.renderCharacterList()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters.list
    }
}

export default connect(mapStateToProps)(CharacterList);