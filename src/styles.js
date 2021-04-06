import { StyleSheet, Dimensions } from 'react-native';


export const introduction = StyleSheet.create({
    bannerContainer: {
        flex:1,
    },
    bannerView: {
        flex:1,
    },
    banner: {
        height: Dimensions.get('window').height / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    bannerScroll: {
        alignItems: 'center',
    },
});


export const jobItemStyle = StyleSheet.create({
    container: {
        padding: 12,
        margin: 7,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#bdbdbd',
    },
    jobname: {
        fontWeight: 'bold',
    },
});
