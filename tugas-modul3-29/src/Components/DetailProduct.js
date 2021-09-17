import React, { Component } from "react";

class DetailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Deskripsi: ''
        }
    }

    componentDidMount() {
        const index = this.props.nomor.index;
        if(index === 0){
            this.setState({Deskripsi: 'Mindset ditulis oleh Carol Dweck'})
        } else if(index === 1){
            this.setState({Deskripsi: 'Sapiens ditulis oleh Yuval Noah Harari'})
        } else if(index === 2){
            this.setState({Deskripsi: 'Filosofi Teras ditulis oleh Henry Manampiring'})
        }
    }

    render() {
        return (
            <>
                <div>
                    <p>Detail Buku</p>
                </div>
                <span>Ini masih coba-coba, index buku: {this.state.Deskripsi}</span>
                
            </>
        );
    }
}

export default DetailProduct;