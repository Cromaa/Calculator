import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    display: {
        flex: 1,
        paddingRight: 20,
        alignItems: 'flex-end',
    },
    displayText: {
        fontSize: 100,
        color: theme.colors.white,
    },
    result: {
        fontSize: 35,
        color: theme.colors.white,
        fontFamily: theme.fonts.light,
        bottom: -30
    },
    title: {
        fontSize: 32,
        color: theme.colors.white,
        fontFamily: theme.fonts.regular,
        textAlign: 'center',
        paddingTop: getStatusBarHeight(),
    },
});