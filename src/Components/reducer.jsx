const reducer=(state,action)=>{
    switch(action.type){
        case "GET_LOADING":
            return{
                ...state,
                isLoading:true

            }

        case "GET_STORIES":
            return {
                ...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages
            }
            case "REMOVE_POST":
                return {
                    ...state,
                    hits:state.hits.filter((posts)=> posts.objectID!==action.payload)
                    
                }
                case "SEARCH_ITEMS":
                    return {
                        ...state,
                        query:action.payload
                        
                    }

                case "NEXT_PAGE":
                    let pageNumInc=state.page+1;
                    state.isLoading=true;
                    let loading=state.isLoading;
                    if(pageNumInc>=state.nbPages){
                        pageNumInc=0;
                        loading=false;
                    }
                    return {
                         ...state,
                         isLoading:loading,
                        page:pageNumInc
                            
                    }

                case "PREV_PAGE":
                    let pageNum=state.page-1;
                    state.loading=true
                    let prevLoading=state.loading;
                    if(pageNum<=0){
                        pageNum=0;
                        prevLoading=false;
                        
                    }
                    return {
                         ...state,
                         isLoading:prevLoading,
                        page:pageNum
                                
                     }
           
    }
return state;
}
export default reducer