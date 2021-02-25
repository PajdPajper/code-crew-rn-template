import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Container, Content, Form, Textarea} from 'native-base'
import Modal from 'react-native-modal';
import Button from "../Button";
import GlobalStyles from "../../constants/GlobalStyles";
import Colors from "../../constants/Colors";
export default (props) => {

    useEffect(() => {
    }, []);

    const { content, title, message_type } = props.messageDetails
    console.log('message details', props.messageDetails)

    const _renderTextMessage = () => (
        <View>
            <Modal
                isVisible={props.modal}
                backdropColor="white"
                backdropOpacity={0.96}
                hasBackdrop={true}
            >
                <Content padder>
                    <TouchableOpacity onPress={() => {
                        props.toggleModal()
                    }}>
                        <Text style={{textAlign: 'right'}}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    <Text style={style.title}>{ title }</Text>
                    <Text style={style.subtitle}>{ content }</Text>

                    <Form>
                        <Textarea rowSpan={5} bordered placeholder="Textarea" />
                    </Form>

                    <View style={GlobalStyles.itemsCenter}>
                        <Button
                            {...props}
                            title="Submit"
                            style={[GlobalStyles.itemsCenter, {width: '60%', marginTop: 40}]}
                            method={() => console.log('test')}
                        />
                    </View>
                </Content>
            </Modal>
        </View>
    )

    const _renderYesNo = () => (
        <View>
            <Modal
                isVisible={props.modal}
                backdropColor="white"
                backdropOpacity={0.96}
                hasBackdrop={true}
            >
                <Content padder>
                    <TouchableOpacity onPress={() => {
                        props.toggleModal()
                    }}>
                        <Text style={{textAlign: 'right'}}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    <Text style={style.title}>{ title }</Text>
                    <Text style={style.subtitle}>{ content }</Text>

                    <View style={GlobalStyles.itemsCenter}>
                        <Button
                            {...props}
                            title="Yes"
                            style={[GlobalStyles.itemsCenter, {width: '40%', marginTop: 40}]}
                            method={() => console.log('test')}
                        />
                        <Button
                            {...props}
                            title="No"
                            style={[GlobalStyles.itemsCenter, {width: '40%', marginTop: 20}]}
                            method={() => console.log('test')}
                        />
                    </View>
                </Content>
            </Modal>
        </View>
    )

    const renderContent = () => {
       if (message_type === '1') {
           return _renderTextMessage()
       } else if (message_type === '2') {
           return _renderYesNo()
       } else if (message_type === '3') {
           return _renderTextMessage()
       } else if (message_type === '4') {
           return <View />
       } else {
           return <View />
       }
    }
    return renderContent()
}

const style = StyleSheet.create({
    title: {
        marginTop: 10,
        color: Colors.PRIMARY,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        color: Colors.SECONDARY,
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20
    }
})
