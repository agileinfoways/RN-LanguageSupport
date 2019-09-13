## Plugin Integration

```
yarn add react-native-i18n
```



## Documentation


### Steps

- Create .json file for language that need to be translate on your project.
- Create a file for language translation same as in demo on ../locales/I18n.js
- Import all language .json files that you need in project on that file.


```
import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

//language file for translation
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import ar from '../locales/ar.json';

I18n.fallbacks = true;

I18n.translations = {
    en,
    hi,
    ar
};

const currentLocale = I18n.currentLocale();


export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

ReactNative.I18nManager.allowRTL(isRTL);

export function strings(name, params = {}){
    return I18n.t(name,params);
};

export function changeLocal(language){
    I18n.locale = language;
}

export default I18n;
```

Use on screen like below:



```
import React from 'react';
import { View,Text } from 'react-native';
import styles from '../style/home.style';
import { strings } from '../locales/I18n';

export default class SelectionComponent extends React.Component{    

    render(){
        return(
            <View style={styles.container}>          
                 <Text style={styles.title}>{strings('login.hello')}</Text>               
            </View>
        )
    }
} 
```



## Some Useful Links

- <https://github.com/AlexanderZaytsev/react-native-i18n>
- <https://github.com/fnando/i18n-js>