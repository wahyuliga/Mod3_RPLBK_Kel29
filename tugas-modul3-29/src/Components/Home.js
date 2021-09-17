import { Component } from "react"; 
import React from "react";
import DetailProduct from "./DetailProduct";
import Checkout from "./Checkout";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buku: [
                ['Mindset', 'Carol Dweck', 111000],
                ['Sapiens', 'Yuval Noah Harari', 125000],
                ['Filosofi Teras', 'Henry Manampiring', 98000]
            ],
            DetailProduct: false,
            Checkout: false,
            Index: 0
        }
    }

    detailProduct = (index) => {
        this.setState(() => {
            return {
                DetailProduct: !this.state.DetailProduct,
                Index: index
            }
        })
    }

    buyProduct = (index) => {
        this.setState(() => {
            return {
                Checkout: !this.state.Checkout,
                Index: index
            }
        })
    }

    render() {
        const {buku} = this.state

        return (
            <>
                {buku.map((value, index) => (
                    <div className="card shadow" style={{width: "20rem", margin: "auto", float: "left", marginLeft: "25px"}}>
                        {/* <img src={value.gambar} className="card-img-top" alt={value.jenis} /> */}
                        <div className="card-body">
                            <h5 className="card-title">{value[0]}</h5>
                            <p>{value[1]}</p>
                            <p>Rp. {value[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                        </div>
                        <button onClick={() => this.detailProduct({index})}>Detail Buku</button>
                        <button onClick={() => this.buyProduct({index})}>Beli Buku</button>
                    </div>                
                ))}
                {this.state.DetailProduct && <DetailProduct nomor={this.state.Index} />}
                {this.state.Checkout && <Checkout nomor={this.state.Index} />}                 
            </>
        )
    }
}

export default Home;