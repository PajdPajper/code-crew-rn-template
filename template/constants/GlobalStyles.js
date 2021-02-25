import { Dimensions, StyleSheet } from 'react-native';
import Colors from './Colors'

const height = Dimensions.get('window').height

export default StyleSheet.create({
  background: {
    backgroundColor: Colors.SECONDARY
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'rgba(27, 27, 78, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    textTransform: 'uppercase',
    lineHeight: 24,
    letterSpacing: 2,
    fontSize: 16,
  },
  onboardTitle: {
    marginTop: height * 0.05,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 42.19,
    color: Colors.WHITE
  },
  onboardDescription: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.WHITE
  },
  footerProgress: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 20,
  },
  circleProgress: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: Colors.WHITE,
    opacity: 0.4
  },
  circleProgressActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: Colors.WHITE
  },
  fixedBottom: {
    bottom: height * 0.03
  },
  itemsCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  // TEXT
  textCenter: {
    textAlign: 'center'
  },
  h1: {
    color: '#23232B',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 34,
    // lineHeight: 24
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.2
  },
  subTitle: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.41,
    letterSpacing: 0.2
  },
  card: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 10
  },
  backButton: {
    color: Colors.GREY,
    fontSize: 24
  }
})
