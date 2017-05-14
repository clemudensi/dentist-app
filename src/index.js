import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import ABout from './About';
import Contact from './Contact';
import BookApt from './BookApt';
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';


class Access extends React.Component {
    render() {
        return (

                    <div>
                        <HashRouter>
                            <Switch>
                                <Route exact path="/" component={Banner}/>
                                <Route path="/about" component={ABout} />
                                <Route path="/bookapt" component={BookApt} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </HashRouter>

                    </div>
        );
    }
}

ReactDOM.render(
    <Access />,
    document.getElementById('root')
);

