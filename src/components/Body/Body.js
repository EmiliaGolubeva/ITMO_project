import React, {Component} from "react";
import style from './Body.module.css'
import { CardGroup, Card,  } from 'react-bootstrap';
import news1 from '../Body/new1.png'
class Body extends Component {
    render() {
        return (
            <main className={style.main}>
                <section className={style.events}>
            //         <CardGroup>
            //             <Card>
            //                 <Card.Img variant="top" src="new1.png/100px160" />
            //                 <Card.Body>
            //                     <Card.Title>Card title</Card.Title>
            //                     <Card.Text>
            //                         This is a wider card with supporting text below as a natural lead-in to
            //                         additional content. This content is a little bit longer.
            //                     </Card.Text>
            //                 </Card.Body>
            //                 <Card.Footer>
            //                     <small className="text-muted">Last updated 3 mins ago</small>
            //                 </Card.Footer>
            //             </Card>
            //             <Card>
            //                 <Card.Img variant="top" src="new1.png/100px160" />
            //                 <Card.Body>
            //                     <Card.Title>Card title</Card.Title>
            //                     <Card.Text>
            //                         This card has supporting text below as a natural lead-in to additional
            //                         content.{' '}
            //                     </Card.Text>
            //                 </Card.Body>
            //                 <Card.Footer>
            //                     <small className="text-muted">Last updated 3 mins ago</small>
            //                 </Card.Footer>
            //             </Card>
            //             <Card>
            //                 <Card.Img variant="top" src="holder.js/100px160" />
            //                 <Card.Body>
            //                     <Card.Title>Card title</Card.Title>
            //                     <Card.Text>
            //                         This is a wider card with supporting text below as a natural lead-in to
            //                         additional content. This card has even longer content than the first to
            //                         show that equal height action.
            //                     </Card.Text>
            //                 </Card.Body>
            //                 <Card.Footer>
            //                     <small className="text-muted">Last updated 3 mins ago</small>
            //                 </Card.Footer>
            //             </Card>
            //         </CardGroup>
                </section>
                <section className={style.subjects}>

                </section>
            </main>
        );
    }
}

export default Body;