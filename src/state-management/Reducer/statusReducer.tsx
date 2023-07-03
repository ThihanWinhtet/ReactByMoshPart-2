
export interface Login {
    type : 'LOGIN' ,
    userName : string
}
export interface LogOut {
    type : 'LOGOUT'  
}

const statusReducer = (state : string, action : Login | LogOut) : string => {
    if (action.type === 'LOGIN') return action.userName;
    if (action.type === 'LOGOUT') return '';
  return '' 
}

export default statusReducer