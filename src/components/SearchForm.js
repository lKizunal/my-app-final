import React, {Component} from 'react'
import './SearchStyle.css'


class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            search: '',
            categories: 'services'
    }
    }
    handleSearchChange = event => {
        this.setState({
            search: event.target.value
        })
    }
    handleCategoriesChange = event => {
        this.setState({
            categories: event.target.value
        })
    }
    render(){
        return(
            <form>
                <div>
                    <label style= {{color:'#00ff40'}}>Search Here</label>
                    <input type='text' value= {this.state.search} onChange={this.handleSearchChange}/>
                    <button style={{color:'#00ff40', backgroundColor: '#ff42f5'}}>Search</button>
                    <label className = "label">Categories</label>
                    <select className = "select" value={this.state.categories} onChange={this.handleCategoriesChange}>
                        <option value="services">Services</option>
                        <option value="employees">Employees</option>

                    </select>
                </div>
            </form>
        )
        }
}
export default SearchForm