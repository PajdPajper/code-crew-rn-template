import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {AppNavigator} from './navigation/navigator';
import {Root} from 'native-base';
import {useSelector, Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

console.disableYellowBox = true;

export default (props) => {
  // let [fontsLoaded] = useFonts({
  //   Regular: require('./assets/Fonts/TitilliumWeb/TitilliumWeb-Regular.ttf'),
  //   Bold: require('./assets/Fonts/TitilliumWeb/TitilliumWeb-Bold.ttf'),
  //   SemiBold: require('./assets/Fonts/TitilliumWeb/TitilliumWeb-SemiBold.ttf'),
  //   Italic: require('./assets/Fonts/TitilliumWeb/TitilliumWeb-Italic.ttf'),
  //   Roboto: require('native-base/Fonts/Roboto.ttf'),
  //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  // });
  const [fontsLoaded, setFontsLoaded] = useState(true);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
        <Root>
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </Root>
    );
  }
};
