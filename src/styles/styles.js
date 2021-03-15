import { StyleSheet } from 'react-native';
import ColorConstants from '../constants/ColorConstants'

// Create styles to be used in component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstants.whiteColor
    },
    searchBox: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: ColorConstants.whiteColor,
        borderWidth: 0.75,
        borderColor: ColorConstants.blackColor,
        borderRadius: 2,
        height: 45,
        fontSize: 14,
        marginHorizontal: 10,
        marginVertical: 7,
        color: ColorConstants.blackColor
    },
    searchContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        marginTop: 7,
        fontSize: 18,
        fontWeight: 'bold',
        color: ColorConstants.headerBckg,
        backgroundColor: ColorConstants.whiteColor,
    },
    titleBar: {
        backgroundColor: ColorConstants.titleBckgColor,
        elevation: 5,
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 7,
        color: ColorConstants.blackColor,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    errorLabel: {
        fontSize: 16,
        color: ColorConstants.blackColor,
        marginTop: 30,
        textAlign: 'center'
    }
});

export default styles;