import {withRouter} from 'react-router-dom';

//Import Components
import Gif from './Gif';
import NoGifs from './NoGifs'

const Gifs = ({gifs, isLoading}) => {

    return (
        <div className={!gifs.length ? '' : 'gifs'}>
           {   isLoading ?
                (<p className='lead'>loading...</p>)
                : gifs.length > 0 ? 
                    (gifs.map(gif =>
                    <Gif key={gif.id} src={gif.images.fixed_height.url}/>))
               : (<NoGifs />)
           }
        </div>
    )
}

export default withRouter(Gifs)
