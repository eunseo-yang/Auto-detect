import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
    Main,
    Auth,
    NotFound,
    SelectCategory,
    Home,
    Memo,
    Past,
    LiveCam,
    PastDetail,
    SignUp,
    PrepareCam,
    EndCam, PastDetailDetail
} from "../pages";
import '../styles/index.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    backgroundColor: '#0B0B3B',

    palette: {
        primary: {
            main: '#0B0B3B'
        },
        secondary: {
            main: '#E33E7F'
        },
        typography: {
            fontFamily: "Do hyeon",
        }
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/home" exact={true} component={Main} />
                        <Route path="/auth/:kind" exact={true} component={Auth} />
                        <Route path="/selectCategory" exact={true} component={SelectCategory} />
                        <Route path="/memo" exact={true} component={Memo} />
                        <Route path="/past" exact={true} component={Past} />
                        <Route path="/liveCam" exact = {true} component={LiveCam} />
                        <Route path="/startCam" exact = {true} component={PrepareCam} />
                        <Route path="/endCam" exact = {true} component={EndCam} />
                        <Route path="/signUp" exact = {true} component={SignUp} />
                        <Route path="/past/:id" exact={true} component={PastDetail} />
                        <Route path="/past/:id/detail" exact={true} component={PastDetailDetail} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </MuiThemeProvider>

        );
    }
}
export default App;


    // state = {
    //     posts: []
    // };

//     async componentDidMount() {
//         try {
//             const res = await fetch('http://127.0.0.1:8000/api/');
//             const posts = await res.json();
//             this.setState({
//                 posts
//             });
//         } catch (e) {
//             console.log(e);
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.posts.map(item => (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <span>{item.content}</span>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }



