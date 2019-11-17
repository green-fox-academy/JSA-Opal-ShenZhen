import React from 'react'
import {
    Button,
    View,
    TextInput,
    Image,
} from 'react-native'
import styles from './styles.js'

const Header = () => {
    const narTitles = [
        { key: "PORTFOLI" },
        { key: "WATCHLIST" }
    ]

    const renderItems = (titles) => (
        titles.map(title => (
            <View style={styles.narTitle}>
                <Button
                    title={title["key"]}
                    color="#e17055"
                />
            </View>
        ))
    )

    return (
        <View>
            {/* Three children can be wrapped into components */}
            <View style={styles.search}>
                <Image
                    style={styles.listIcon}
                    source={require('../../assets/list-icon.png')}
                />
                <TextInput style={styles.input}></TextInput>
                <Image
                    style={styles.searchButton}
                    source={require('../../assets/search-button.png')}
                />
            </View>

            <View style={styles.navBars}>
                {renderItems(narTitles)}
            </View>
        </View>
    );
}

export default Header
