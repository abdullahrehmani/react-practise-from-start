import React, {Component} from 'react'
class Contents extends Component {
    state={
        displayMenu:true,
        selectedFood:'Nothing',
        menu:["biryani" , "qourma" , "Ice Cream ", "Bootels" ]
    }
    handleClick=()=>{
        if(this.state.displayMenu === true){
            this.setState ({ displayMenu:false})
        }
        else{
            this.setState({displayMenu:true})
        }
    }
    updateSelection=(value , index)=>{
        console.log(index)
        this.setState({selectedFood: value})
    }
    render() {
        const menuItems = this.state.menu.map((value , index)=>{
            return <li key={index} onClick={()=>{this.setState({selectedFood:value})}} >{value}</li>
        })
        return(
            <div>
                <button onClick ={this.handleClick}>Toglle Menu</button>
                <h2>seelected food :{this.state.selectedFood}</h2>
                <ul>
                    {this.state.displayMenu === true ? menuItems: ''}
                </ul>
            </div>
        )
    }

}
export default Contents