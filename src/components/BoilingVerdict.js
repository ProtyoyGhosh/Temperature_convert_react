// import React from 'react'

const BoilingVerdict = ({celcius=0}) => {
    if(celcius>=100){
        return ("The water will boil ");
    }else{
        return("The water won't boil");
    }
}

export default BoilingVerdict