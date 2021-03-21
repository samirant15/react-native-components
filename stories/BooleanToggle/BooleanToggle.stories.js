import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import CenterView from '../CenterView';
import BooleanToggle from '../../components/BooleanToggle';

storiesOf('BooleanToggle', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Default', () => (
        <BooleanToggle
            disabled={false}
            value={true}
            onChange={action('changed-value')}
            colors={{
                positiveTxtColorFg: text('Positive Txt Color Fg', '#1B5F2E'),
                positiveTxtColorBg: text('Positive Txt Color Bg', '#90E0A6'),
                negativeTxtColorFg: text('Negative Txt Color Fg', '#B80000'),
                negativeTxtColorBg: text('Negative Txt Color Bg', '#FF8585'),
                neutralTxtColorFg: text('Neutral Txt Color Fg', '#000000'),
                neutralTxtColorBg: text('Neutral Txt Color Bg', '#EAEAEC'),
            }}
        />
    ));