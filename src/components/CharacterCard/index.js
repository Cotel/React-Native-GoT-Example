import React, {Component} from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import {Container, Content, Card, CardItem, Thumbnail, Text, Button} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {selectCharacter} from '../../actions/character.actions';

class CharacterCard extends Component {
    handlePress = () => {
        this.props.selectCharacter(this.props.character.name)
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
                            <Button transparent onPress={this.handlePress} >{character.name}</Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: null,
        height: 200
    },
    text: {
        color: 'white'
    }

});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectCharacter: selectCharacter
    }, dispatch)
}

export default connect(mapDispatchToProps)(CharacterCard);