import {useContext} from 'react'
import ExpansesContext from './ExpansesContext'

const useExpanses = () => useContext(ExpansesContext);

export default useExpanses;