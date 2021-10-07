import React from "react";
import style from './Header.module.css'
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
//         <div>
//             <Navbar bg="white" expand="lg">
//                 <Navbar.Brand href="#" className="header-brand ps-4">Лаборатория робототехники</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto header-item pe-4">
//                         <Nav.Link href="#">О лаборатории</Nav.Link>
//                         <Nav.Link href="#">Учебная деятельность</Nav.Link>
//                         <Nav.Link href="#">Научная деятельность</Nav.Link>
//                         <Nav.Link href="#">Новости</Nav.Link>
//                         <Nav.Link href="#">Контакты</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div>
//     );
// }
//
        <header className={style.header}>
                <div className={style.head}>
                    <logo className={style.title}>
                        <img src = "/images/logo_itmo.svg" />
                    </logo>
                    <div className={style.lang}>
                        En
                        <span className={style.lang_icon}>
                        <img src = "/images/uk.svg" />
                    </span>
                    </div>
                </div>

            <section className={style.section}>
                <div className={style.logo}>
                    <img src = "/images/lab.svg" />
                    Лаборатория робототехники
                </div>
                <nav className={style.nav}>
                    <li><a href="">О лаборатории</a></li>
                    <li><a href="">Учебная деятельность</a></li>
                    <li><a href="">Научная деятельность</a></li>
                    <li><a href="">Нoвости</a></li>
                    <li><a href="">Контакты</a></li>
                </nav>
            </section>
            <div className={style.banner}>
                <img src = "/images/back.png" />
                <h1 className={style.start}>
                    Началась подача документов
                </h1>
                <p className={style.text}>
                    <img src = "/images/btn_left.svg" />
                    Программа предполагает углубленное изучение вопросов, связанных с проектированием, исследованием, производством и эксплуатацией мехатронных и робототехнических систем и комплексов.
                    <img src = "/images/btn_right.svg" />
                    <img src = "/images/btn_detail.svg" />
                </p>
            </div>
</header>
    )
}
export default Header;