import React, { Component } from 'react';
// NAVBAR RESPONSIVE 
import Toolbar from '../toolbar/Toolbar';
import SideDrawer from '../sideDrawer/SideDrawer'
import BackDrop from '../Backdrop/BackDrop'

class NavbarR extends Component {
    state ={
        sideDrawerOpen :false
    };
    drawerToggleClickHandler = () =>{
    
        this.setState((prevState)=>{
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
        console.log('escucho');
    }
    backDropClickHandler = () =>{
    this.setState({sideDrawerOpen:false})
    }
    
    render() {
        // let sideDrawer;
        let backDrop;
        if(this.state.sideDrawerOpen){
            // sideDrawer =  <SideDrawer/>;
            backDrop =<BackDrop click={this.backDropClickHandler}/>;

        }
        return (
            <div  style={{height:'100%'}}>
                 <Toolbar  drawerClickHandle = {this.drawerToggleClickHandler}/>
                 <SideDrawer show={this.state.sideDrawerOpen} />
                 {backDrop}
               
                
            </div>
        );
    }
}

export default NavbarR;