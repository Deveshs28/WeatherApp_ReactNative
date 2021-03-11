import { StyleSheet } from 'react-native';

const whiteColor = "#ffffff"
const blackColor = "#000000"

// Create styles to be used in component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteColor
    },
    searchBox: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: whiteColor,
        borderWidth: 0.75,
        borderColor: blackColor,
        borderRadius: 2,
        height: 45,
        fontSize: 14,
        marginHorizontal: 10,
        marginVertical: 7,
        color: blackColor
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
        marginTop:7,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#005077',
        backgroundColor: 'white',
    },
    titleBar: {
        backgroundColor: '#f1f1f1',
        elevation: 5,
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 7,
        color: blackColor,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    errorLabel: {
        fontSize: 16,
        color: blackColor,
        marginTop: 30,
        textAlign: 'center'
    },
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 7,
        backgroundColor: 'white',
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
        color:'#005077'
    },
    conditionTextColor:{
        color:'#cc6721',
        fontSize: 14,
        marginVertical:5,
        fontWeight: 'bold',
    }
});

export default styles;