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
    jobname: {
        fontWeight: 'bold',
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
});

export const jobListItemStyle = StyleSheet.create({
    container: {
      padding: 12,
      margin: 7,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#bdbdbd'
    },
    jobname: {
      fontWeight: 'bold',
    },
  });