import React from 'react';
import { View,Text,TouchableOpacity,Image } from 'react-native';
import styles from '../style/home.style';
import { CONST } from '../global/constants.global';
import { strings,changeLocal } from '../locales/I18n';
import { observer } from "mobx-react/native";

@observer
export default class SelectionComponent extends React.Component{

    constructor(){
        super();
        this.state={
            isVisible:false
        }
    }

    changeLanguage(language){        
        changeLocal(language)
    }

    render(){
        return(
            <View style={styles.container}>          
                <View style={styles.textArea}>
                    <Text style={styles.title}>{strings('login.hello')}</Text>
                    <Text style={styles.title}>{strings('login.message')}</Text>
                </View>

                <TouchableOpacity style={styles.btnView} onPress={()=>{this.setState({isVisible:!this.state.isVisible})}}>
                    <Text style={styles.textBlack}>Change Language</Text>
                </TouchableOpacity>

                {(this.state.isVisible) &&
                    <View style={styles.viewStyle}>
                        <TouchableOpacity style={styles.langBtnView} onPress={()=>{this.changeLanguage('hi',this.setState({isVisible:false}))}}>
                            <Text style={styles.textWhite}>{CONST.LANG_HINDI}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.langBtnView} onPress={()=>{this.changeLanguage('ar',this.setState({isVisible:false}))}}>
                            <Text style={styles.textWhite}>{CONST.LANG_ARABIC}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.langBtnView}  onPress={()=>{this.changeLanguage('en',this.setState({isVisible:false}))}}>
                            <Text style={styles.textWhite}>{CONST.LANG_ENGLISH}</Text>   
                        </TouchableOpacity>
                    </View>
                }       
                
                    
            </View>
        )
    }
} 