import { Link } from "react-router-dom";

export default function InvoiceStepBar() {
    return <div className="border-b-2 border-blue-500 w-full py-5 shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row">
            <Link to='/money-return'><img src="/images/icons/fi_arrow-left.svg" alt="arrow-left" /></Link>
            <div className="ml-6 mr-auto">
                <h1 className="mb-2 font-bold text-lg">Tiket</h1>
                <p>Order ID: xxxxxxx</p>
            </div>

            <div className="flex gap-4 items-center text-sm">
                {/* ITEM */}
                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-blue-700 p-1 h-4"><img src="/images/icons/white_check.svg" alt="white_check" /></div>
                    <p>Pilih Metode</p>
                </div>

                <div className="w-7 border border-blue-700"></div>

                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-blue-700 p-1 h-4"><img src="/images/icons/white_check.svg" alt="white_check" /></div>
                    <p>Bayar</p>
                </div>

                <div className="w-7 border border-blue-700"></div>

                <div className="flex gap-3 items-center">
                    <img src="/images/icons/number3.svg" alt="number3" />
                    <p>Tiket</p>
                </div>
            </div>
        </div>
    </div>
}