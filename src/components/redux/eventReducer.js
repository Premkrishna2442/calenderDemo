import {request,success,failure} from './userType'



const initialState={
    loading:false,
    events:[],
    error:''
}


const EventReducer=(state=initialState,action)=>{
   switch(action.type){
        case request:
            return{
                ...state,
                loading:true
            }
        case success:
            return{
                
                events:action.payload,
                error:'',
                loading:false
            }  
            
        case failure:
            return{
                events:'',
                loading:false,
                error:action.payload
            }
           default:
               return {
                   state
               } 
    }

}

export default EventReducer