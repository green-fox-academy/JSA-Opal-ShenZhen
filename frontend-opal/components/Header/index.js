import React from 'react'
import {
    Button,
    View,
    TextInput,
    Image,
} from 'react-native'
import styles from './styles'
import ListIcon from '../../assets/list-icon.png';
import SearchIcon from '../../assets/search-button.png';

const Header = () => {
    const narTitles = [
        { id: 1, key: "PORTFOLI" },
        { id: 2, key: "WATCHLIST" }
    ]

    const handlePress = (key) => key === "PORTFOLIO";

    const renderItems = (titles) => (
        titles.map(title => (
          <View
            key={title.id}
            style={[styles.narTitle, handlePress(title.key) && styles.buttonPressed]}
          >
            <Button
              title={title.key}
              color="#e17055"
            />
          </View>
        ))
    )

    return (
      <View>
        <View style={styles.search}>
          <Image
            style={styles.listIcon}
            source={ListIcon}
          />
          <TextInput style={styles.input} />
          <Image
            style={styles.searchButton}
            source={SearchIcon}
          />
        </View>

        <View style={styles.navBars}>
          {renderItems(narTitles)}
        </View>
      </View>
    );
}

export default Header
