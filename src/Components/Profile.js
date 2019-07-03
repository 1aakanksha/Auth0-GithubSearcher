import React,{Component} from 'react';

class Profile extends Component {


  render(){
    let userdata= this.props.userData;
    let followers = `${userdata.homeURL}/followers`;
    let following = `${userdata.homeURL}/following`;
    let repos = `${userdata.homeURL}/repositories`;

    if(userdata.message === "Not Found"){
      return(
        <div className="notfound">
          <h2>Heyy</h2>
        <p>Are you sure,whom you are looking for?</p>
        </div>
      );
    }
    else{
      return(
        <section className="github-profile">
          <div className="github-profile-info">
            <a href={userdata.homeURL} target="_blank" title={userdata.name || userdata.useraname}><img src={userdata.avatar} /></a>
            <h2><a href={userdata.homeURl} title={userdata.username} target="_blank">{userdata.name || userdata.username}</a></h2>
            <h3>{userdata.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
              <li>
                <a href={followers} target="_blank" title="No of followers"><i>{userdata.followers}</i><span>Followers</span></a>
              </li>
              <li>
                <a href={repos} target="_blank" title="No of repos"><i>{userdata.repos}</i><span>Repository</span></a>
              </li>
              <li>
                <a href={following} target="_blank" title="No of following"><i>{userdata.following}</i><span>Following</span></a>
              </li>
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default Profile;
