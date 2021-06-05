import {Row, Col, Container} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

//Import Components
import Gif from './Gif';
import NoGifs from './NoGifs'

const Gifs = ({gifs, isLoading, handleImageClick}) => {


    return (
        <Container fluid={true}>
           {   isLoading ?
                (<p className='h4'>Loading...</p>)
                : gifs.length  ? 
                    (
                    <Row noGutters={true}>
                        {gifs.map(gif =>
                        <Col key={gif.id}
                        xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 4 }}
                        lg={{ span: 3 }} xl={{ span: 3}}
                        ><Gif src={gif.images.fixed_height.url} url={gif.images.downsized.url} handleImageClick={handleImageClick}/>
                        </Col>)}
                    </Row>)
               : (<NoGifs />)
           }
        </Container>
    )
}

export default withRouter(Gifs)
