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
        { id: 1, key: "PORTFOLI" },
        { id: 2, key: "WATCHLIST" }
    ]

    const handlePress = (key) => key === "PORTFOLIO";

    const renderItems = (titles) => (
        titles.map(title => (
            <View
                key={title["id"]}
                style={[styles.narTitle, handlePress(title["key"]) && styles.buttonPressed]}
            >
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
