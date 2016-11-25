import React, {Component, PropTypes} from 'react';
import {Image, Alert} from 'react-native';
import {Container, Content, Card, CardItem, Thumbnail, Text, Button} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectCharacter} from '../../actions/character.actions';

import styles from './styles';

class CharacterCard extends Component {
    static propTypes = {
        character: PropTypes.object
    }

    static contextTypes = {
        routes: PropTypes.object.isRequired
    };

    handlePress = (character) => {
        this.context.routes.details({data: character, title: "Details"})
    }

    render () {
        const {
            character
        } = this.props;

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Image style={styles.image} source={{uri: character.image}} />
                        </CardItem>
                        <CardItem>
                            <Button transparent onPress={() => this.handlePress(character)} >{character.name}</Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCharacter: selectCharacter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard);