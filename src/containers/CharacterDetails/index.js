import React, {Component} from 'react';
import {Container, Content, Text, Header, Title, Button, Icon} from 'native-base';
import {Image, StyleSheet, View} from 'react-native'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import myTheme from '../../themes/myTheme';

class CharacterDetails extends Component {
    render() {
        return (
            <Container theme={myTheme}>
                <Header>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>{this.props.title}</Title>
                </Header>
                <Content>                    
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: this.props.data.image}}/>
                        <Text style={styles.text}>{this.props.data.name}</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: 400
    },
    text: {
        paddingTop: 20,
        flex: 2
    }
})

function mapStateToProps(state) {
    return {
        character: state.characters.activeCharacter
    }
}

export default connect()(CharacterDetails);