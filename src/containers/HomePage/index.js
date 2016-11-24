import React, {Component} from 'react';
import {Container, Header, Title, Content} from 'native-base';
import CharacterList from '../CharacterList';

import myTheme from '../../themes/myTheme';

class HomePage extends Component {

    render() {
        return (
            <Container theme={myTheme}>
                <Header>                       
                        <Title>Game Of Thrones Example</Title>
                </Header>
				<Content>                    
					<CharacterList />
				</Content>
			</Container>
        )
    }
}

export default HomePage;