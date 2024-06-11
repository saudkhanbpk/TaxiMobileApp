import { View, Text,SafeAreaView,Image,ImageBackground ,StyleSheet} from 'react-native'
import {React,useState} from 'react'
import img1 from "../../assets/Images/bg-image.jpg";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';


const OTPinputs = () => {

    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  return (
    <SafeAreaView style={styles.root}>
    <Text style={{color:"white",textAlign:"center",fontFamily:"Roboto-Bold", fontSize:22}}>Enter Verification Code</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
   
  )
}

const styles =StyleSheet.create({
    root: {paddingHorizontal: 40},
  title: {textAlign: 'center', fontSize: 30,color:"white"},
  codeFieldRoot: {marginTop: 30},
  cell: {
    width: 60,
    height: 60,
    fontSize: 24,
    color:"#000",
    textAlign: 'center',
    padding:10,
  backgroundColor:"white",
 borderRadius:50,
 fontFamily:"Roboto-Bold"
  },
  focusCell: {
    borderColor: '#000',
  },
    container: {
        flex: 1, 
        marginTop:20,
        paddingHorizontal:20
      },
     

})
export default OTPinputs