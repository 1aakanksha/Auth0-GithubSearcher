import React,{Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      accessToken: '',
      profile: {}
    };
  }

  static defaultProps ={
    clientID:'eHLAPr6ocTmJmLJxzkJQjxah5QHIcoyh',
    domain:'dev-ro3acc0b.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID,this.props.domain);
    this.lock.on('authenticated', (authResult)=>{
      console.log(authResult);

      this.lock.getProfile(authResult.accessToken ,(error,profile)=>{
        if(error){
          console.log(error);
          return;
        }

        this.setProfile(authResult.accessToken, profile);
      });
    });

    this.getProfile();
  }

  setProfile(accessToken,profile){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('profile',JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
    console.log("done");
  }


  getProfile(){
    if(localStorage.getItem('accessToken') != null){
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, ()=>{
        console.log(this.state);
      });

    }
    console.log("i m inside");
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      accessToken: '',
      profile: ''
    }, ()=> {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }

  render(){
    let gitty;
    if(this.state.accessToken){
      gitty = <Github />
    }else{
      gitty= "Click on login to view github viewer"
    }
    return(
      <div className="App">
        <Header
          lock ={this.lock}
          accessToken={this.state.accessToken}
          onLogout= {this.logout.bind(this)}
          onLogin={this.showLock.bind(this)}
          />
        {gitty}
      </div>
    );
  }
}
export default App;
