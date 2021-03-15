import { StyleSheet } from 'react-native';
import ColorConstants from '../constants/ColorConstants'

// Create styles to be used in component
const ItemStyle = StyleSheet.create({
    card: {
        shadowColor: ColorConstants.blackColor,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 7,
        backgroundColor: ColorConstants.whiteColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginTop: 7
    },
    tempTitle: {
        fontSize: 16,
        marginVertical: 5
    },
    otherText: {
        fontSize: 14
    },
    highlightedText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: ColorConstants.highlightedTxt
    },
    conditionTextColor: {
        color: ColorConstants.conditionTxt,
        fontSize: 14,
        marginVertical: 5,
        fontWeight: 'bold',
    }
});

export default ItemStyle;