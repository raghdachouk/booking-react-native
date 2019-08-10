import React, { // eslint-disable-line no-unused-vars
  Component
} from 'react'

import {
  Image,
  View
} from 'react-native'

type Style = number | string | Object | Array<?Style>

type Props = {
  placeholderColor?: string,
  style: {
    width: number,
    height: number,
    [key: string]: Style
  },
  source: {
    uri: string
  }
}

type State = {
  loaded: bool
}

export default class AsyncImage extends Component {

  props: Props
  state: State

  constructor(props: Props) {
    super(props)
    this.state = { loaded: false }
  }

  render() {
    const {
      placeholderColor,
      style,
      source
    } = this.props

    return (
      <View
        style={style}>

        <Image
          source={source}
          resizeMode={'contain'}
          style={[
            style,
            {
              position: 'absolute',
              resizeMode: 'cover'
            }
          ]}
          onLoad={this._onLoad} />

        {!this.state.loaded &&
          <View>
          <Image source={require('./assets/loading.gif')}
          style={{
            height: 300, width: 300
            
          }}
        /></View>
        }
      </View>
    )
  }

  _onLoad = () => {
    this.setState(() => ({ loaded: true }))
  }
}