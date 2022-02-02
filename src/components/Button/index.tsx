import React from 'react';
import {
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';

type props = TouchableOpacityProps & {
    title: string,
    operation?: boolean,
    double?: boolean,
    clear?: boolean,
}

export function Button({
    title, 
    operation, 
    double, 
    clear,
    ...rest
} : props){
    const stylesDouble = [styles.text, {}]

    if(double) stylesDouble.push(styles.buttonDouble)
    if(operation) stylesDouble.push(styles.buttonOperation)
    if(clear) stylesDouble.push(styles.buttonClear)
    
    return (
        <TouchableOpacity 
            {...rest}
        >
            <Text 
                style = {stylesDouble}
            > 
                {title} 
            </Text>
        </TouchableOpacity>
    );
}