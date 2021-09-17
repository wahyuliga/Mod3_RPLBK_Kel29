import React, { Component } from "react";

class Harga extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Buku: '',
            Harga: 0,
            Kuantitas: 1,
            TotalHarga: 0,
            Nama: '',
            Alamat: ''
        }
    }

    componentDidMount() {
        const index = this.props.nomor.index;
        if(index === 0){
            this.setState({Buku: 'Mindset', Harga: 111000, TotalHarga: 111000})
        } else if(index === 1){
            this.setState({Buku: 'Sapiens', Harga: 125000, TotalHarga: 125000})
        } else if(index === 2){
            this.setState({Buku: 'Filosofi Teras', Harga: 98000, TotalHarga: 98000})
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState(() => {
            return {
                [name]: value
            }
        })
        this.hitungTotal()
    }

    hitungTotal = () => {
        this.setState((state) => { 
            return { 
                TotalHarga: state.Harga * state.Kuantitas 
            } 
        })
    }

    render() {
        return (
            <>
                <div>
                    <br/>
                    <h5>Beli Buku {this.state.Buku}</h5>
                </div>
                <p>Masukkan jumlah buku</p>
                <input onChange={this.handleChange} type="number" name="Kuantitas" min="1" value={this.state.Kuantitas}/>
                <p>Total Harga</p>
                <p>Rp. {this.state.TotalHarga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
            </>
        );
    }
}

export default Harga;