import { storiesOf } from '@storybook/react-native';
import { text, select } from '@storybook/addon-knobs';
import React from 'react';
import CenterView from '../CenterView';
import Loading from '../../components/Loading';

storiesOf('Loading', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Default', () => (
        <Loading
            text={text('Loading Text', 'Loading Text...')}
            type={select('Type', { 'Default': null, 'Upload': 'upload' }, null, 'Options')}
        />
    ))
    .add('Uploading', () => (
        <Loading
            text={text('Loading Text', 'Uploading 90%...')}
            type={select('Type', { 'Default': null, 'Upload': 'upload' }, 'upload', 'Options')}
        />
    ));