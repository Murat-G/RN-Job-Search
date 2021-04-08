import { StyleSheet, Dimensions } from 'react-native';


export const introduction = StyleSheet.create({
    bannerContainer: {
        flex: 1,
    },
    bannerView: {
        flex: 1,
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
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
});

export const jobs = StyleSheet.create({
    jobsContainer: {
        flex: 1,
    },
    jobsView: {
        flex: 1,
    },
    jobsText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    jobsButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    jobsButtonText: {
        color: 'white',
    },
    modalBackground: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    modalContainer: {
        borderBottomWidth: 2,
        borderColor: '#bdbdbd',
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    jobDesc: {
        padding: 5,
    },
    backButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        top: 5,
        left: 10,
        zIndex:1,
    },
});

export const jobListItemStyle = StyleSheet.create({
    container: {
        display:'flex',
        padding: 12,
        margin: 7,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#bdbdbd',
    },
    jobname: {
        fontWeight: 'bold',
    },
    returnButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.5,
        alignSelf: 'center',
        marginTop: 5,
    },
    textButton: {
        color:'white',
        textAlign:'center',
    },

});

export const JobSaveItemStyle = StyleSheet.create({
    returnButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.2,
        marginLeft: 10,
        marginTop:10,
    },
    textButton: {
        color:'white',
    },
    container:{
        flex: 1,
    },
});
