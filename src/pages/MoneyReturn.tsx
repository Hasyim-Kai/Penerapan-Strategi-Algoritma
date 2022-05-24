import { useState } from "react";
import InvoiceStepBar from "../components/InvoiceStepBar";
import MyDropdown from "../components/MyDropdown";
import { currencyGreedyAlgorithm, Rupiah } from "../Logic/greedy";

export default function MoneyReturn() {
    const [nominalPembayaran, setNominalPembayaran] = useState(0)
    const [kembalian, setKembalian] = useState<{}>()

    const [currency, setCurrency] = useState<string[]>([])
    const [jumlahCurrency, setJumlahCurrency] = useState<string[]>([])

    const moneyImgStyle = 'w-64 m-3'

    // const Rupiah = {
    //     seratusRibu : 100000,
    //     limaPuluhRibu : 50000,
    //     duaPuluhRibu : 20000,
    //     sepuluhPuluhRibu : 10000,
    //     limaRibu : 5000,
    //     duaRibu : 2000,
    //     seribu: 1000,
    //     limaRatus: 500
    // }

    function checkCurrency(money: string, id: string | number) {
        if (money === 'seratusRibu') {
            return <img className={moneyImgStyle} src="/images/idr/100000.jpg" alt="seratusRibu" key={id} />
        } else if (money === 'limaPuluhRibu') {
            return <img className={moneyImgStyle} src="/images/idr/50000.jpg" alt="limaPuluhRibu" key={id} />
        } else if (money === 'duaPuluhRibu') {
            return <img className={moneyImgStyle} src="/images/idr/20000.jpg" alt="duaPuluhRibu" key={id} />
        } else if (money === 'sepuluhPuluhRibu') {
            return <img className={moneyImgStyle} src="/images/idr/10000.jpg" alt="sepuluhPuluhRibu" key={id} />
        } else if (money === 'limaRibu') {
            return <img className={moneyImgStyle} src="/images/idr/5000.jpg" alt="limaRibu" key={id} />
        } else if (money === 'duaRibu') {
            return <img className={moneyImgStyle} src="/images/idr/2000.jpg" alt="duaRibu" key={id} />
        } else if (money === 'seribu') {
            return <img className={moneyImgStyle} src="/images/idr/1000.jpg" alt="seribu" key={id} />
        } else if (money === 'limaRatus') {
            return <img className={moneyImgStyle} src="/images/idr/500.jpg" alt="limaRatus" key={id} />
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        let aaa = currencyGreedyAlgorithm(Rupiah, (nominalPembayaran - 200000))
        setKembalian(aaa)
        setCurrency(Object.keys(aaa))
        setJumlahCurrency(Object.values(aaa))
        // for(let currencyInput in aaa){
        //     setCurrency(currency.push(currencyInput))
        //     setJumlahCurrency(jumlahCurrency.push(aaa[currencyInput]))
        //     setJumlahCurrency([...currency, aaa[currencyInput]])
        // console.log(currency)
        // console.log(jumlahCurrency)
        // }
    }

    return <>
        <InvoiceStepBar />

        {/* SUCCESS */}
        <div className="text-center w-fit my-12 mx-auto">
            {/* <MyDropdown /> */}
            <img className="mx-auto" src="/images/icons/green_success.svg" alt="Success" />
            <h1 className="font-bold text-xl my-5">Pembayaran Berhasil!</h1>
            <p className="text-gray-500">Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>

        {/* <PdfHandler/> */}
        <div className="border-2 rounded-xl p-7 my-12 max-w-3xl mx-auto">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-2xl mb-2">Harga : Rp. 200.000</h1>
                    <h1 className="font-semibold text-xl mb-2">Masukkan Nominal Pembayaran Tunai</h1>
                    <input className="px-4 py-2 rounded-md border-2" type="number" onChange={(e) => setNominalPembayaran(Number(e.target.value))} required />
                </div>
            </div>

            {/* PDF */}
            <section className="mx-auto mt-8">
                <div className="flex justify-between items-center pb-3 border-b-2">
                    <h1 className="font-semibold text-2xl">Uang Kembalian</h1>
                    <button className="px-3 py-2 rounded-lg text-white bg-blue-400 border-2 border-blue-500" onClick={handleSubmit}>Bayar</button>
                </div>

                <div className="mt-7 w-fit mx-auto grid grid-cols-2 gap-5">
                    <div>
                        {currency.map((item, id) => checkCurrency(item, id))}
                    </div>
                    <div className="text-center pt-12">
                        {jumlahCurrency.map((item, id) => <p className="mb-[4.5rem] text-4xl font-bold border-b-2 pb-3" key={id}>{item}</p>)}
                    </div>
                </div>
            </section>
        </div>
    </>
}