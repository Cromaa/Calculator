import React, {useState} from 'react';
import { 
    View, 
    Text 
} from 'react-native';

import { Button } from '../../components/Button';
import { CalculatorDisplay } from '../../components/CalculatorDisplay';

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

export function Calculator(){
    const [calc, setCalc] = useState('')
    const [result, setResult] = useState('')

    const operators = ['/', '*', '-', '+', '.']

    const updateCalc = (value: any) => {
        if(
            (operators.includes(value) && calc === '' ) || 
            (operators.includes(value) && operators.includes(calc.slice(-1)))
        ){
            return;
        }

        setCalc(calc + value);

        if(!operators.includes(value)){
            setResult(eval(calc + value).toFixed(4).toString())
        }
    }

    const calculate = () => {
        if(operators.includes(calc.slice(-1))){
            return;
        }
        setCalc(eval(calc).toFixed(4).toString())
    }

    const delLast = () => {
        if(calc == ''){
            return;
        } 
        const value = calc.slice(0, -1);
        setResult(value)
        setCalc(value)
    }

    const delAll = () => {
        setCalc('')
        setResult('')
    }

    return (
        <View style = {styles.container}>
            <CalculatorDisplay 
                value = {calc || '0'}
                result = {result || '0'}
            />
            <View style = {styles.keyboard}>
                <Button onPress={delAll} clear title = 'AC'/>
                <Button onPress={delLast} title = 'DEL'/>
                <Button onPress={() => updateCalc('/')} operation title = '/'/>

                <Button onPress={() => updateCalc('1')} title = '1'/>
                <Button onPress={() => updateCalc('2')} title = '2'/>
                <Button onPress={() => updateCalc('3')} title = '3'/>
                <Button onPress={() => updateCalc('*')} operation title = 'x'/>

                <Button onPress={() => updateCalc('4')} title = '4'/>
                <Button onPress={() => updateCalc('5')} title = '5'/>
                <Button onPress={() => updateCalc('6')} title = '6'/>
                <Button onPress={() => updateCalc('+')} operation title = '+'/>

                <Button onPress={() => updateCalc('7')} title = '7'/>
                <Button onPress={() => updateCalc('8')} title = '8'/>
                <Button onPress={() => updateCalc('9')} title = '9'/>
                <Button onPress={() => updateCalc('-')} operation title = '-'/>

                <Button onPress={() => updateCalc('0')} double title = '0'/>
                <Button onPress={() => updateCalc('.')} title = '.'/>
                <Button onPress={calculate}operation title = '='/>
            </View>
        </View>
    );
}