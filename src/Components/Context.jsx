import React, { useContext ,useReducer,useEffect} from "react";
import reducer from "./reducer"
let API="https://hn.algolia.com/api/v1/search?";
const initialState={
     isLoading:true,
    query:"html",
    nbPages:0,
    page:0,
    hits:[]
}

const AppContext=React.createContext();
const AppProvider=({children})=>{
    const  [state,dispatch]=useReducer(reducer,initialState)

    
    const fectNewData= async (url)=>{

        dispatch({type:"SET_LOADING"})
        try{
            const res=await fetch(url);
            const data= await res.json();
            // isLoading=false;
        
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages
                }
            })

        }catch(error){
            console.log(error);
        }
    }
//for remove
    const remove=(post_ID)=>{
        dispatch({type:"REMOVE_POST",payload:post_ID})
    }
//for search
    const searchItems=(searchQuery)=>{
        dispatch({type:"SEARCH_ITEMS",payload:searchQuery})
    }
//for pagination
const getNextPage=()=>{
    dispatch({type:"NEXT_PAGE"});
}

const getPrevPage=()=>{
    dispatch({type:"PREV_PAGE"});
}
//for fetch API
    useEffect(() => {
      fectNewData(`${API}query=${state.query}&page=${state.page}`);
    
     
    }, [state.query,state.page])


    return(
        <AppContext.Provider value={{...state,remove,searchItems,getNextPage,getPrevPage}}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext};