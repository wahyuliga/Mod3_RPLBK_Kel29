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
            this.setState({Deskripsi: 'Bagi Anda penikmat buku motivasi, teramat sayang bila Anda tak melahap isi buku ini. Bagi Anda para pemimpin, eksekutif, guru, orangtua, atau pelatih olahraga, buku ini sangat membantu dalam mengubah para pembelajar bermasalah menjadi insan-insan sukses dan bahagia. Sebagai pribadi pun, Anda tak bakal kecewa dengan buku hasil penelitian 20 tahun lebih dari ahli kenamaan di bidang psikologi kepribadian ini.'})
        } else if(index === 1){
            this.setState({Deskripsi: 'SELAMA dua setengah juta tahun, berbagai spesies manusia hidup dan punah di Bumi, sampai akhirnya tersisa satu, Homo sapiens, Manusia Bijaksana, sejak seratusan ribu tahun lalu. Namun spesies ini bisa menyebar ke seluruh dunia dan beranak-pinak hingga berjumlah 7 miliar, dan kini menjadi kekuatan alam yang dapat mengubah kondisi planet. Apa penyebabnya?'})
        } else if(index === 2){
            this.setState({Deskripsi: 'Lebih dari 2.000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental yang tangguh dalam menghadapi naik-turunnya kehidupan. Jauh dari kesan filsafat sebagai topik berat dan mengawang-awang, Filosofi Teras justru bersifat praktis dan relevan dengan kehidupan Generasi Milenial dan Gen-Z masa kini.'})
        }
    }

    render() {
        return (
            <>
                <div>
                    <h3>Detail Buku</h3>
                </div>
                <br/>
                <div className="text-start">
                    {this.state.Deskripsi}
                </div>
                
                
            </>
        );
    }
}

export default DetailProduct;