import React , {Component} from 'react'
import './AddItem.css'

class AddItem extends Component{
    state:{
        name:'',
        age: '',
    }
    handleChange=(e)=>{
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if (e.target.name.value === '' || e.target.age.value === ''      ) {
            return false
        }        else {
            this.props.addItem(this.state);
            this.setState({
                name: '',
                age:'',
            })
        }
        document.getElementById('myForm').reset();

    }

    render() {

        return (
            <div>
                <form id="myForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name.." id="name" onChange={this.handleChange}  />
                    <input type="number" placeholder="Enter age.." id="age" onChange={this.handleChange}  />
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
}
export default AddItem;