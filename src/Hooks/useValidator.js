import React, {useState} from 'react';

export default function useValidator(fieldRules) {
    const [errors, setErrors] = useState(
        Object.keys(fieldRules).reduce((prev, curr)=>{ 
            prev[curr] = ''
            return prev
        } , {})
    )
    const validators = {
        required : val => {
           if( !val || !val?.length ) return '*required '
           return ''
        },
        email : (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            return re.test(String(email).toLowerCase()) ? '' : '*must be valid email'
        }
    }
    const validate = fields => {
        let newErrors = {...errors}
        let isInvalid = false;
        Object.entries(fieldRules).forEach( ([field, rules]) => {
            let value = fields[field];
            let errorMessage = '';
            for (let i = 0; i < rules.length; i++) {
                let incorrect = validators[rules[i]](value);
                errorMessage += incorrect
                if(errorMessage.length) break;
            }
           
            if(errorMessage.length) {
                newErrors[field] = errorMessage;
                isInvalid = true;
            }else {
                newErrors[field] = ''
            }
        })
        setErrors(newErrors);
        return isInvalid
    }
    return {
        errors : errors,
        validateFields: validate
    } ;
}
