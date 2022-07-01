export const gifItem = ({id, title, url})=>{
    return(
        <li>
            <GifItem id={id} title={title} url={url}/>
        </li>
    )
}