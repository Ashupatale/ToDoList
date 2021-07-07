import React from 'react'

const userContext=React.createContext()

const Provider=userContext.Provider
const Consumer=userContext.Consumer

export default {Provider,Consumer}