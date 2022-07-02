import styles from '../css/styles.css';

export const GifItem = ({title, url}) => {

    return (
        <>
        <div className="card">
            <img src={url} alt="gif" />
            <p>{title}</p>
        </div>
        {/**Add a button to delete each item*/}
        <button className="delete-button">Delete Image</button>
        
        </>
    )
}
