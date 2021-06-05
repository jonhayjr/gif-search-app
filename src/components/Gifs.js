import {Row, Col, Container} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

//Import Components
import Gif from './Gif';
import NoGifs from './NoGifs'

const Gifs = ({gifs, isLoading}) => {


    return (
        <Container fluid={true}>
           {   isLoading ?
                (<p className='lead'>loading...</p>)
                : gifs.length > 0 ? 
                    (
                    <Row noGutters={true}>
                        {gifs.map(gif =>
                        <Col
                        xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
                        lg={{ span: 2 }} xl={{ span: 1 }}
                        ><Gif key={gif.id} src={gif.images.fixed_height.url}/>
                        </Col>)}
                    </Row>)
               : (<NoGifs />)
           }
        </Container>
    )
}

export default withRouter(Gifs)
