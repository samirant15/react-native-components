import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UPLOAD_TYPE = 'upload';

const Loading = ({ text, type }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 5, alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#014380" />
            <Text style={{ marginTop: 10, fontSize: 18, color: "#014380" }}>{text}</Text>
            {type == UPLOAD_TYPE && <Ionicons name="cloud-upload-outline" size={80} color="#014380" />}
        </View>
    )
}

export default Loading;