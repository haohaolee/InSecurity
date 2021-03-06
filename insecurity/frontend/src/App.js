import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Me from "./pages/me/Me";
import {Col, Container, Row} from "react-bootstrap";
import Topic from "./pages/topic/Topic";
import SearchResult from "./pages/searchresult/SearchResult";
import ArticleDetail from "./pages/articledetail/ArticleDetail";
import Admin from "./pages/admin/Admin";
import Cookie from "./pages/Cookie/Cookie";

function App() {
    return (
        <div className="App">
            <Header/>
            <Container>
                <Row>
                    <Col md={2}> </Col>
                    <Col md={8}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/topic" component={Topic}/>
                            <Route exact path="/search" component={SearchResult}/>
                            <Route exact path="/article" component={ArticleDetail}/>

                            <Route exact path="/home" component={Home}/>
                            {/*<Route exact path="/column" component={Column}/>*/}


                            <Route exact path="/write" component={Write}/>

                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>

                            <Route exact path="/admin" component={Admin}/>

                            <Route exact path="/me" component={Me}/>
                            <Route exact path="/cookie" component={Cookie}/>

                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
