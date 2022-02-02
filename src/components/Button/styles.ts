import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    text: {
        backgroundColor: theme.colors.white,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 55,
        fontFamily: theme.fonts.light,
        color: theme.colors.text,
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonOperation: {
        color: theme.colors.primaryBlue
    },
    buttonClear: {
        color: theme.colors.clear,
        width: (Dimensions.get('window').width / 4) * 2,
    },
});