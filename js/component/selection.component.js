import React from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';
import styles from '../style/selection.style';
import { CONST } from '../global/constants.global';
import { changeLocal } from '../locales/I18n';
import { observer } from "mobx-react/native";
import I18n from 'react-native-i18n';

@observer
export default class SelectionComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isSelectedLang:false,
        }
    }

    gotoHomeScreen(language){
        this.props.navigation.navigate('HomeScreen');
        changeLocal(language)
    }

    render(){
        return(
            <View style={styles.container}>

            <View style={styles.mainView}>   
                <TouchableOpacity style={styles.selectionView} onPress={()=>{
                    this.gotoHomeScreen((I18n.locale).substring(0,2))
                    }}>
                <Text style={styles.title}>{CONST.MOBILE_LANG}</Text>
                </TouchableOpacity>             
                <TouchableOpacity style={styles.selectionView} onPress={()=>{this.setState({isSelectedLang:true})}}>
                <Text style={styles.title} >{CONST.SELECT_LANG}</Text>
                </TouchableOpacity>
                
            </View>

            {(this.state.isSelectedLang) && 
                <View style={styles.card}>                
                    <TouchableOpacity style={styles.item} onPress={()=>{this.setState({isSelectedLang:false}); this.gotoHomeScreen('en')}}>
                        <Image source={{uri:'flag'}} style={styles.img} />
                        <Text style={styles.text}>{CONST.LANG_ENGLISH}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={()=>{this.setState({isSelectedLang:false}); this.gotoHomeScreen('hi')}}>
                        <Image source={{uri:'flag'}} style={styles.img} />
                        <Text style={styles.text}>{CONST.LANG_HINDI}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={()=>{this.setState({isSelectedLang:false}); this.gotoHomeScreen('ar')}}>
                        <Image source={{uri:'flag'}} style={styles.img} />
                        <Text style={styles.text}>{CONST.LANG_ARABIC}</Text>
                    </TouchableOpacity>
                </View>
            }
                
            </View>
        )
    }
} 