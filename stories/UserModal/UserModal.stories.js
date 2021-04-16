import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../CenterView';
import { UserModalContent } from '../../components/UserModal';

storiesOf('UserModal', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Default', () => (
        <UserModalContent
            name={text('Name', 'Samir Comprés')}
            username={text('Username', '@samirant15')}
            email={text('Email', 'samriant15@gmail.com')}
            logout={action('logout-pressed')}
            logoutTxt='LOG OUT'
        />
    ));