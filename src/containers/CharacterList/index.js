import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {Spinner} from 'native-base';
import CharacterCard from '../../components/CharacterCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchCharacters, listCharacters} from '../../actions/character.actions';

class CharacterList extends Component {
    componentWillMount() {
        this.props.listCharacters();
        console.log(this.props.characters);
    }


    renderCharacterList() {
        return this.props.characters.list.map((character) => {
            return (
                <CharacterCard key={character.name} character={character} />
            )
        })
    }

    render() {
        return(
            <ScrollView>
                {!this.props.characters.list.length == 0 ? 
                    this.renderCharacterList() :
                    <Spinner />
                }
            </ScrollView>
        )
    }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		listCharacters: listCharacters
	}, dispatch)
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);