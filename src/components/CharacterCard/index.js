import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {
    Card,
    CardTitle,
    CardImage
} from 'react-native-card-view';

class CharacterCard extends Component {
    render () {
        return (
            <Card style={styles.card}>
                <CardImage>
                    <Image style={styles.image} source={{uri: this.props.image}}>
                    <Text style={styles.text} >{this.props.name}</Text>
                    </Image>                    
                </CardImage>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 200
    },
    text: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: 50,
        marginTop: 160,
        paddingLeft: 20,
        fontSize: 24,
        color: 'white'
    },
    card: {
        width: 600
    }
})

export default CharacterCard;