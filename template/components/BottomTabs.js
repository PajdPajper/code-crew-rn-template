import React, {Component} from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base';
import {View, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
import HomeIcon from '../assets/icons/home.png';
import MapIcon from '../assets/icons/map.png';
import UserIcon from '../assets/icons/user.png';
import Home from '../screens/Home/Home';

const menuItems = [
  {
    title: 'Home',
    icon: HomeIcon,
    screen: 'Home',
  },
  {
    title: 'Explore',
    icon: MapIcon,
    screen: 'Explore',
  },
  {
    title: 'Profile',
    icon: UserIcon,
    screen: 'Profile',
  },
];

const isActive = (item, route) => {
  return item.screen === route;
};

export default (props) => {
  console.log(props);
  return (
    <Footer style={{marginBottom: 0}}>
      <FooterTab style={style.footer}>
        {menuItems.map((item) => {
          return (
            <View key={item.screen}>
              <Button
                onPress={() => {
                  props.navigation.navigate(item.screen);
                }}>
                <Image source={item.icon} style={style.menuIcon} />
                {/*<Icon*/}
                {/*  type="MaterialIcons"*/}
                {/*  name={item.icon}*/}
                {/*  style={*/}
                {/*    isActive(item, props.route) ? style.activeIcon : style.icon*/}
                {/*  }*/}
                {/*/>*/}
                <Text
                  style={isActive(item, props.route) ? style.text : style.text}>
                  {item.title}
                </Text>
              </Button>
            </View>
          );
        })}
      </FooterTab>
    </Footer>
  );
};

const style = StyleSheet.create({
  footer: {
    backgroundColor: '#F9F9F9',
    height: 78,
    marginTop: -20,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 1,
    borderTopColor: '#cfcfcf',
  },
  text: {
    fontSize: 11,
    letterSpacing: 0.2,
    fontFamily: 'Roboto',
    color: Colors.SECONDARY,
    fontWeight: '500',
  },
  activeText: {
    fontSize: 14,
    color: Colors.PRIMARY,
    textTransform: 'capitalize',
    fontWeight: 'normal',
  },
  icon: {
    fontSize: 25,
    color: Colors.GREY,
  },
  activeIcon: {
    fontSize: 28,
    color: Colors.PRIMARY,
  },
  homeIcon: {
    color: Colors.GREY,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 25,
  },
  homeText: {
    fontSize: 12,
    color: Colors.DARK_GREY,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  centerButton: {
    zIndex: 0,
    backgroundColor: '#3783F5',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 58,
    height: 58,
    borderRadius: 50,
    marginRight: 11,
    marginTop: -20,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
});
