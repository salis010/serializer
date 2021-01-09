import { ICounter } from './types'

export const serialize = (counter: ICounter): string => {
	const replacer = (key, value) => {
		if(typeof value === 'function') return value.toString() 

		return value
	}
	return JSON.stringify(counter, replacer)
}

export const deserialize = (str: string): ICounter => {
    
    const reviver = (key, value) => {  
        if(/function/.test(value)) {
		  const functionString = `(${value})`    
		  return eval(functionString)  
		}   
		return value
	  }

      return JSON.parse(str, reviver)
}
