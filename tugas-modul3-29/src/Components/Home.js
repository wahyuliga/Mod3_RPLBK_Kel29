import { Component } from "react"; 
import React from "react";
import DetailProduct from "./DetailProduct";
import Harga from "./Harga";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buku: [
                ['Mindset', 'Carol Dweck', 111000, 'https://cdn.gramedia.com/uploads/items/mindset__w600_hauto.jpg'],
                ['Sapiens', 'Yuval Noah Harari', 125000, 'https://mojokstore.com/wp-content/uploads/2020/02/Sapiens.jpg'],
                ['Filosofi Teras', 'Henry Manampiring', 98000, 'https://ebooks.gramedia.com/ebook-covers/45496/image_highres/ID_FITE2018MTH12.jpg']
            ],
            DetailProduct: false,
            Harga: false,
            Index: 0
        }
    }

    componentDidMount() {
        alert('Selamat Datang di Galeri Buku')
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
                Harga: !this.state.Harga,
                Index: index
            }
        })
    }

    render() {
        const {buku} = this.state

        return (
            <>
                <div className="container">
                    <h3>Galeri Buku</h3>
                    {buku.map((value, index) => (
                        <div className="card shadow" style={{width: "15rem", margin: "auto", float: "left", marginLeft: "50px", marginRight: "50px", marginTop: "50px"}}>
                            <img width="100px" src={value[3]} className="card-img-top" alt={value[0]} />
                            <div className="card-body">
                                <h5 className="card-title">{value[0]}</h5>
                                <p>{value[1]}</p>
                                <p>Rp. {value[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                            </div>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.detailProduct({index})}>Detail Buku</button>
                            <button onClick={() => this.buyProduct({index})}>Beli Buku</button>
                        </div>                
                    ))}
                    <div>
                        {this.state.DetailProduct && <DetailProduct nomor={this.state.Index} />}
                        {this.state.Harga && <Harga nomor={this.state.Index} />}
                    </div>
                </div>                 
            </>
        )
    }
}

export default Home;