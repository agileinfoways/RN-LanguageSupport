import { StyleSheet } from 'react-native';
import { COLORS, CONST } from '../global/constants.global';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.LIGHT,
    },
    card:{
        margin: 10,
        padding: 10,
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 0.2,
            width: 0.2
        },
        elevation: 1,
        backgroundColor:COLORS.WHITE,
        borderRadius: 5,
    },
    img:{
        width:20,
        height:20
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 2,
        padding: 5,
        borderColor: COLORS.GRAY,
        borderBottomWidth: 0.5,
    },
    text:{
        fontSize: 14,
        marginLeft: 5,
    },
    title:{
        fontSize:16,
        color:COLORS.BLACK,
        marginBottom: 10,
    },
    selectionView:{
        flex:1,
        margin: 10,
        padding: 10,
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 0.2,
            width: 0.2
        },
        elevation: 1,
        backgroundColor:COLORS.WHITE,
        borderRadius: 5,
    },
    mainView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 20,
    }
})