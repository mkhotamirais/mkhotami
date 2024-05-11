import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SiskoInvoice = () => {
  const [invoice, setInvoice] = useState({});
  useEffect(() => {
    axios.get(`https://demo.sistemtoko.com/public/show_invoice/101C2O`).then((res) => setInvoice(res.data.sale));
  }, []);

  return (
    <div className="bg-white rounded">
      {invoice.sale_id && (
        <table className="w-full">
          <tbody className="text-left">
            <tr>
              <th>Id</th>
              <td>{invoice?.sale_id}</td>
            </tr>
            <tr>
              <th>Customer/Phone</th>
              <th>
                {invoice?.customer?.name} - {invoice?.customer?.phone}
              </th>
            </tr>
            <tr>
              <th>Customer Address</th>
              <td>{invoice?.customer?.address}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>Rp{invoice?.sale_price?.toLocaleString("id-ID")}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{invoice?.sale_date}</td>
            </tr>
            <tr>
              <th>Product Name</th>
              <td>{invoice?.items[0]?.name}</td>
            </tr>
            <tr>
              <th>Product Weight</th>
              <td>{invoice?.items[0]?.weight}gr</td>
            </tr>
            <tr>
              <th>Product Price</th>
              <td>Rp{invoice?.items[0]?.buyPrice.toLocaleString("id-ID")}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{invoice?.sale_payment_status}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{invoice?.sale_keterangan}</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link
        to={"/public-apis/sisko"}
        className="inline-block border p-2 bg-slate-500 text-white rounded my-3 hover:opacity-70"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default SiskoInvoice;
