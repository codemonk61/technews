
import { useGlobalContext } from './Context'

const Stories = () => {

    const { hits, isLoading,remove } = useGlobalContext()
    if (isLoading) {
        return (
            <div id="preloader"></div>
        )
    }


    return (
        <>
            <div className="stories-div">
                <h1></h1>
                {
                    hits.map((posts) => {
                        const { title, author, objectID, url, num_comments } = posts;
                        return( 
                            <div className="card" key={objectID}>
                                <h2>{title}</h2>
                                <p>By <span>{author}</span> | <span> {num_comments} </span>comments
                                </p>
                                <div className="card-button">
                                    <a href={url} target="_blank">Read More</a>
                                    <a href="#" onClick={()=>remove(objectID)}>Remove</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Stories