import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
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
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderCharacterList()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 0
    }
})

function mapStateToProps(state) {
    return {
        characters: state.characters.list
    }
}

export default connect(mapStateToProps)(CharacterList);