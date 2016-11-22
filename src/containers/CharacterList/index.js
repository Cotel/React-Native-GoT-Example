import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import {connect} from 'react-redux';

class CharacterList extends Component {
    renderCharacterList() {
        return this.props.characters.list.map((character) => {
            return (
                <CharacterCard key={character.name} image={character.image} name={character.name} />
            )
        })
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                {this.renderCharacterList()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    }
})

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterList);