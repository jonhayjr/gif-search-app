import {Row, Col, Container} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

//Import Components
import Gif from './Gif';
import NoGifs from './NoGifs'

const Gifs = ({gifs, isLoading}) => {


    return (
        <Container fluid={true}>
           {   isLoading ?
                (<p className='h4'>Loading...</p>)
                : gifs.length > 0 ? 
                    (
                    <Row noGutters={true}>
                        {gifs.map(gif =>
                        <Col fluid
                        xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 4 }}
                        lg={{ span: 3 }} xl={{ span: 3}}
                        ><Gif key={gif.id} src={gif.images.fixed_height.url}/>
                        </Col>)}
                    </Row>)
               : (<NoGifs />)
           }
        </Container>
    )
}

export default withRouter(Gifs)
