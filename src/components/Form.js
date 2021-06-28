import React from 'react';

class Form extends React.Component{
    state = {
        name: "",
        address: "",
        // genderArray: [{"keyword":"M","value": "male"},{"keyword":"F","value": "Female"}],
        genderArray: [{"M":"male"},{"F":"Female"}],
        selectedGender: "F",
    }
    name = (e)=> {
        this.setState({name:e.target.value })
    }

    address = (e)=> {
        this.setState({address:e.target.value })
    }

    // createSelectItems(gender) {
    //     let items = [];
        
    //     gender.map(element => {
    //         items.push(<option value={element.keyword}>{element.value}</option>); 
    //     });
    //     return items;
    // }

    createSelectItems(gender) {
        let items = [];
        
        gender.map(element => {
            Object.keys(element).forEach(function(key) {
                items.push(<option key={key} value={key}>{element[key]}</option>);
            })
        });
        return items;
    }

    updateGender = (e) => {
        this.setState({selectedGender:e.target.value })
    }
    SubmitForm = (e)=>{
        e.preventDefault();
        const {name,address,selectedGender} = this.state;
        console.log(name,address,selectedGender);
        console.log(e);
    }


    render(){
        const {name,address,genderArray,selectedGender} = this.state;
        return (
            <div className="container bg-light p-3">
                <div className="row justify-content-center">
                    <div className="col-lg-6 mt-5">
                        <form onSubmit={this.SubmitForm}>
                            <input value={name} onInput={this.name} type="text" placeholder="Enter Something" className="form-control mb-3" />
                            <em>{name}</em>
                            <textarea onInput={this.address} className="form-control mb-3" name="" id="" cols="30" rows="10" value={address}/>
                            <em>{address}</em>

                            <select name="" id="" className="form-control mb-3" value={selectedGender} onChange={this.updateGender}>
                            {this.createSelectItems(genderArray)}
                            </select>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
