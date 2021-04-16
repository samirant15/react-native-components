import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Button, Text } from '@ui-kitten/components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Col, Grid, Row } from 'react-native-easy-grid';

const UserModal = ({ name, username, email, visible, onClose, logout, logoutTxt }) => {

    return (
        <Modal visible={visible} onBackdropPress={onClose} style={styles.modal} backdropStyle={styles.backdrop}>
            <UserModalContent
                name={name}
                username={username}
                email={email}
                logout={logout}
                logoutTxt={logoutTxt}
            />
        </Modal >
    )
}

const UserModalContent = ({ name, username, email, logout, logoutTxt }) => {

    return (
        <View style={styles.content}>
            <View style={styles.view}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', alignContent: 'center' }} >
                    <FontAwesome5 style={{ textAlign: 'center' }} name='user-circle' size={80} color='#FCB922' />
                    <Grid style={{ paddingVertical: 10 }}>
                        {
                            name && (
                                <Row>
                                    <Col size={20}><FontAwesome5 style={{ textAlign: 'right' }} size={20} name="id-card" color="#014380" /></Col>
                                    <Col size={80}><Text style={{ fontSize: 20, marginLeft: 10 }}>{name}</Text></Col>
                                </Row>
                            )
                        }
                        {
                            username && (
                                <Row>
                                    <Col size={20}><FontAwesome5 style={{ textAlign: 'right' }} size={20} name="user" color="#014380" /></Col>
                                    <Col size={80}><Text style={{ fontSize: 20, marginLeft: 10 }}>{username}</Text></Col>
                                </Row>
                            )
                        }
                        {
                            email && (
                                <Row>
                                    <Col size={20}><FontAwesome5 style={{ textAlign: 'right' }} size={20} name="envelope" color="#014380" /></Col>
                                    <Col size={80}><Text style={{ fontSize: 20, marginLeft: 10 }}>{email}</Text></Col>
                                </Row>
                            )
                        }
                    </Grid>
                    <Button style={{ marginHorizontal: 10 }} status='danger' size='small' onPress={logout}>{logoutTxt}</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        alignItems: 'center'
    },
    content: {
        top: 0,
        width: '80%',
        minHeight: 300,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 8,
        borderColor: '#014380',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.,
        elevation: 20
    },
    view: {
        flex: 1,
    },
});

export default UserModal;
export { UserModalContent }