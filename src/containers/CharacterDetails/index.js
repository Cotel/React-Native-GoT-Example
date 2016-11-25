import React, {Component, PropTypes} from 'react';
import {Container, Content, Text, Header, Title, Button, Icon} from 'native-base';
import {Image, View} from 'react-native'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import myTheme from '../../themes/myTheme';
import styles from './styles';

class CharacterDetails extends Component {
    static contextTypes = {
        routes: PropTypes.object.isRequired
    };

    render() {
        const {
            data,
            title
        } = this.props;

        const {
            routes
        } = this.context;

        return (
            <Container theme={myTheme}>
                <Header>
                    <Button transparent onPress={() => routes.pop()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>{title}</Title>
                </Header>
                <Content>                    
                    <View style={styles.container}>
                        <Image style={styles.image} source={{uri: data.image}}/>
                        <Text style={styles.text}>{data.name}</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        character: state.characters.activeCharacter
    }
}

export default connect()(CharacterDetails);