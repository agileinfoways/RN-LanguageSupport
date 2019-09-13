import { StyleSheet } from 'react-native';
import { COLORS, CONST } from '../global/constants.global';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.LIGHT,
    },
    title:{        
        fontSize:16,
        color:COLORS.BLACK,
        marginBottom: 10,
        alignSelf:'flex-start',
    },
    textArea:{
        margin: 10,
        width:CONST.DEVICE_WIDTH,
    },
    viewStyle:{
        marginTop: 10,
        marginHorizontal:5,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    row:{
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: COLORS.DARK,
        borderBottomWidth: 1,
    },
    btnView:{
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
        width:CONST.DEVICE_WIDTH/2,
        alignItems: 'center',
    },
    textBlack:{
        fontSize:16,
        color:COLORS.BLACK,
    },
    textWhite:{
        fontSize:16,
        color:COLORS.WHITE,
    },
    langBtnView:{
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 0.2,
            width: 0.2
        },
        elevation: 1,
        backgroundColor:COLORS.BLUE_GRAY,
        borderRadius: 5,
        alignItems: 'center',
    },
})