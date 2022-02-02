import React from 'react';
import { 
    View, 
    Text,
} from 'react-native';

import { styles } from './styles';

import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    value: string,
    result: string
}

export function CalculatorDisplay({value, result} : Props){
    return (
        <LinearGradient
            style = {styles.display}
            colors={['#13D8FC', '#309AFF']}
        >
            <Text style = {styles.title}>
                Calculator
            </Text>
            <Text style = {styles.result}>
                ({result})
            </Text>
            <Text
                style = {styles.displayText}
                numberOfLines={2}
            >
                {value}
            </Text> 
        </LinearGradient>
    );
}