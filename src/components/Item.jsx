
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const Item = ({ item }) => (
    
    <Card className='cardImg border-success mb-3 text-center' style={{ width: '18rem' }}>
        <Card.Img className='card-header img-thumbnail' src={item.image} />
        <Card.Body className='text-danger'>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Precio:  ${item.price}</Card.Text>
            <Link to={`/item/${item.id}`} >
                <Button variant="primary">Ver detalle</Button>
            </Link>
        </Card.Body>
    </Card>
    
    /*
    <div className='d-inline-block m-2'>
            <div className='card'>
                <img className='card-image' src={product.image} alt='productos' />
                <h2 className='card-title'>{product.title}</h2>
                <p className='card-text'>Gool de River</p>
            </div>
    </div>
*/
);