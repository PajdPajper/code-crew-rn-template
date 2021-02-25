import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Text,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
} from 'native-base';
import Button from '../../components/Button';
import GlobalStyles from '../../constants/GlobalStyles';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {logout} from '../../store/actions/auth';
import {
  fetchCalendar,
  fetchMessages,
  fetchVideos,
  fetchMessageDetails,
} from '../../services/index';
import MessageReplay from '../../components/Home/MessageReplay';
import Colors from '../../constants/Colors';
import CalendarIcon from '../../assets/icons/calendar.png';
import ClockIcon from '../../assets/icons/clock.png';
import WatchLaterIcon from '../../assets/icons/watch_later.png';

import {navigate} from '../../utils/utils';

const DATA = [
  {
    date: 1,
    title: 'Mon',
    active: true,
  },
  {
    date: 2,
    title: 'Tue',
  },
  {
    date: 3,
    title: 'Wed',
  },
  {
    date: 4,
    title: 'Thu',
  },
  {
    date: 5,
    title: 'Fri',
  },
  {
    date: 6,
    title: 'Sat',
  },
];

export default (props) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [modal, setModal] = useState(false);
  const [messageDetails, setMessageDetails] = useState({});
  const user = useSelector((state) => state.auth.user);

  console.log('state user', user);

  useEffect(() => {
    fetchData();
    console.log(Colors.PRIMARY);
  }, []);

  const handleMessageDetails = async (id) => {
    const res = await fetchMessageDetails(id);
    setMessageDetails(res);
    console.log('res', res);
  };
  const toggleModal = (id) => {
    setModal(!modal);
    handleMessageDetails(id);
  };
  const fetchData = async () => {
    const calendar = await fetchCalendar();
    const messages = await fetchMessages();
    setMessages(messages.splice(0, 2));
    const videos = await fetchVideos();
    setVideos(videos);
    console.log('videos', videos);
  };
  const Item = ({date, title, active, hasEvent}) => (
    <View>
      <View
        style={[style.item, active && {backgroundColor: user.default_color}]}>
        <Text
          style={[
            style.day,
            {color: user.default_color},
            active && style.dayActive,
          ]}>
          {date}
        </Text>
        <Text
          style={[
            style.day,
            {color: user.default_color},
            active && style.dayActive,
          ]}>
          {title}
        </Text>
      </View>
      {hasEvent && (
        <View style={{marginLeft: 15, marginTop: 3}}>
          <Image source={ClockIcon} style={style.clockIcon} />
        </View>
      )}
    </View>
  );
  const renderItem = ({item}) => (
    <Item title={item.title} date={item.date} active={item.active} />
  );

  return (
    <Container>
      <Content>
        <View style={style.container}>
          {/*  User details */}
          <View style={[GlobalStyles.row, {justifyContent: 'space-between'}]}>
            <View style={GlobalStyles.row}>
              <Image
                style={style.userImage}
                source={{
                  uri: 'https://randomuser.me/api/portraits/women/65.jpg',
                }}
              />

              <View>
                <Text style={style.userName}>Susan Smitty</Text>
                <Text style={{marginTop: 4}}>
                  <Image style={style.calendarIcon} source={CalendarIcon} />
                  <View>
                    <Text style={[style.date, {color: user.default_color}]}>
                      Mon 2 OCT
                    </Text>
                  </View>
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Videos */}
        <View style={style.container}>
          <View style={[GlobalStyles.row, {justifyContent: 'space-between'}]}>
            <Text
              style={[
                GlobalStyles.title,
                {marginBottom: 16, color: user.default_color},
              ]}>
              Home data
            </Text>
            <TouchableOpacity>
              <Text
                style={[GlobalStyles.subTitle, {color: user.default_color}]}>
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {/* Videos */}
          <Button title="Sign out" method={() => dispatch(logout())} />

        </View>
      </Content>
      <MessageReplay
        modal={modal}
        toggleModal={toggleModal}
        messageDetails={messageDetails}
      />
      {/*<View style={GlobalStyles.itemsCenter}>*/}
      {/*    <Button*/}
      {/*        {...props}*/}
      {/*        title="Sign Out"*/}
      {/*        style={[GlobalStyles.itemsCenter, {width: '60%', bottom: 40}]}*/}
      {/*        method={() => dispatch(logout())}*/}
      {/*    />*/}
      {/*</View>*/}
    </Container>
  );
};

const width = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    padding: 24,
  },
  card: {
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 24,
    borderRadius: 10,
    height: 64,
  },
  userImage: {
    width: 62,
    height: 62,
    borderRadius: 10,
    marginRight: 24,
  },
  userName: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '700',
    color: Colors.SECONDARY,
    marginTop: 4,
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  date: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.41,
    letterSpacing: 0.2,
    color: Colors.PRIMARY,
    marginTop: 5,
  },
  item: {
    marginTop: 16,
    marginRight: 20,
    paddingTop: 15,
    backgroundColor: Colors.PRIMARY_LIGHT,
    opacity: 14.64,
    width: 48,
    height: 75,
    borderRadius: 12,
    paddingBottom: 20,
    justifyContent: 'center',
  },
  day: {
    color: Colors.PRIMARY,
    fontSize: 16,
    // fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
  },
  itemActive: {
    backgroundColor: Colors.PRIMARY,
  },
  dayActive: {
    color: Colors.WHITE,
  },
  messagesWrapper: {
    backgroundColor: '#F2F4F9',
    padding: 26,
  },
  messagesTitle: {
    color: Colors.SECONDARY,
    fontWeight: '700',
    fontSize: 16,
  },
  messagesContent: {
    color: Colors.SECONDARY,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  clockIcon: {
    alignItems: 'center',
    width: 14,
    height: 14,
  },
  watchLaterIcon: {
    width: 16,
    height: 15,
    marginRight: 5,
    marginTop: 2,
  },
  readButton: {
    width: 51,
    height: 28,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 2,
    marginTop: 4,
    shadowColor: 'rgba(27, 27, 78, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  readButtonText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto',
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  videoCover: {
    borderRadius: 10,
    width: width * 0.885,
    height: 160,
  },
  videoInfo: {
    height: 36,
    padding: 10,
    marginTop: -36,
    opacity: 0.8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: Colors.WHITE,
  },
  videoTitle: {
    color: Colors.SECONDARY,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Roboto',
    lineHeight: 16.41,
    letterSpacing: 0.2,
    marginLeft: 24,
  },
  videoDuration: {
    color: Colors.SECONDARY,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    lineHeight: 16.41,
    letterSpacing: 0.2,
    marginRight: 24,
  },
  videoWrapper: {
    marginBottom: 16,
    shadowColor: '#4a4a4a',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7.27,
    elevation: 10,
  },
  clientLogo: {
    alignSelf: 'flex-end',
    width: 36,
    height: 36,
    marginRight: 16,
    marginBottom: 27,
  },
});
