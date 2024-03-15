import { Container } from "react-bootstrap";
import  './styles.modules.css'
import {Header,Footer} from "@components/common/index";
import { Outlet } from "react-router-dom";
function MainLayout(){
    return ( <Container className="containerr">
                <Header />
                <div className='wrapper'> 
                    <Outlet />
                </div>
                <Footer />
            </Container> )
}

export default MainLayout;

