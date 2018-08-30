import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Text, StatusBar, View } from 'react-native'
import { connect } from 'react-redux'

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }

  handlePress = (currency) => {
    const { navigation, dispatch } = this.props
    const { type } = navigation.state.params
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency))
    }

    navigation.goBack(null)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <Text>Passenger List Screen</Text>
        {/* <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        /> */}
      </View>
    )
  }
}

export default connect()(CurrencyList)
