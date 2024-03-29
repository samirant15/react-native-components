import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonGroup, Text } from '@ui-kitten/components';

const BooleanToggle3State = ({ value, controlled, onChange, positiveTxt, onlyNa, hideNa, naText, negativeTxt, disabled, colors }) => {

    const { positiveTxtColorFg, positiveTxtColorBg } = colors || { positiveTxtColorFg: null, positiveTxtColorBg: null };
    const { negativeTxtColorFg, negativeTxtColorBg } = colors || { negativeTxtColorFg: null, negativeTxtColorBg: null };
    const { naTxtColorFg, naTxtColorBg } = colors || { neutralTxtColorFg: null, neutralTxtColorBg: null };
    const { neutralTxtColorFg, neutralTxtColorBg } = colors || { neutralTxtColorFg: null, neutralTxtColorBg: null };

    // if controlled == true then value will be used
    // if controlled != true the value will be initial and localValue will be used

    const [localValue, setLocalValue] = useState(value);

    const changeValue = (val) => {
        if (disabled)
            return;

        setLocalValue(val);
        onChange(val);
    }

    let val = controlled == true ? value : localValue;

    return (
        val === 'true' ? (
            <ButtonGroup size='small' appearance='outline' status='control'>
                <Button onPress={() => changeValue('true')} style={{ display: onlyNa ? 'none' : null, backgroundColor: positiveTxtColorBg || '#90E0A6' }}><Text style={{ ...styles.bold, color: positiveTxtColorFg || '#1B5F2E' }}>{positiveTxt || 'Sí'}</Text></Button>
                <Button onPress={() => changeValue('false')} style={{ display: onlyNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{negativeTxt || 'No'}</Text></Button>
                <Button onPress={() => changeValue('na')} style={{ display: hideNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{naText || 'N/A'}</Text></Button>
            </ButtonGroup>
        ) : val === 'false' ? (
            <ButtonGroup size='small' appearance='outline' status='control'>
                <Button onPress={() => changeValue('true')} style={{ display: onlyNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{positiveTxt || 'Sí'}</Text></Button>
                <Button onPress={() => changeValue('false')} style={{ display: onlyNa ? 'none' : null, backgroundColor: negativeTxtColorBg || '#FF8585' }}><Text style={{ ...styles.bold, color: negativeTxtColorFg || '#B80000' }}>{negativeTxt || 'No'}</Text></Button>
                <Button onPress={() => changeValue('na')} style={{ display: hideNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{naText || 'N/A'}</Text></Button>
            </ButtonGroup>
        ) : val === 'na' ? (
            <ButtonGroup size='small' appearance='outline' status='control'>
                <Button onPress={() => changeValue('true')} style={{ display: onlyNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{positiveTxt || 'Sí'}</Text></Button>
                <Button onPress={() => changeValue('false')} style={{ display: onlyNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{naText || 'No'}</Text></Button>
                <Button onPress={() => changeValue('na')} style={{ display: hideNa ? 'none' : null, backgroundColor: naTxtColorBg || '#F5B7BC' }}><Text style={{ ...styles.bold, color: naTxtColorFg || '#331B1D' }}>{naText || 'N/A'}</Text></Button>
            </ButtonGroup>
        ) : (
            <ButtonGroup size='small' appearance='outline' status='control'>
                <Button onPress={() => changeValue('true')} style={{ display: onlyNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{positiveTxt || 'Sí'}</Text></Button>
                <Button onPress={() => changeValue('false')} style={{ display: onlyNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{negativeTxt || 'No'}</Text></Button>
                <Button onPress={() => changeValue('na')} style={{ display: hideNa ? 'none' : null, backgroundColor: neutralTxtColorBg || '#EAEAEC' }}><Text style={{ ...styles.bold, color: neutralTxtColorFg || '#000000' }}>{naText || 'N/A'}</Text></Button>
            </ButtonGroup>
        )
    )
}

const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    },
});

export default BooleanToggle3State;