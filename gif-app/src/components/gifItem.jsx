//import '../css/large.css';
import PropTypes from 'prop-types';

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
            <p data-testid='test-title'>{title}</p>
        </div>
        {/**Button to get image*/}
        <button className="button-30" role="button" onClick={handleGetImage}>Get more</button>
        </>
    )
}

//we make sure that all the props we are getting are the kind we want
GifItem.protoTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

GifItem.defaultProps = {
    title: 'Gif',
    url: '...'
}