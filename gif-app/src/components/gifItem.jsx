import '../css/large.css';

export const GifItem = ({title, url}) => {

    const handleGetImage = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = title;
        link.click();
    }
    return (
        <>
        <div className="card">
            <img src={url} alt="gif" />
            <p>{title}</p>
        </div>
        {/**Button to get image*/}
        <button className="button-30" role="button" onClick={handleGetImage}>Get more</button>
        </>
    )
}
