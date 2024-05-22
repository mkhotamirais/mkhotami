import { useSelector, useDispatch } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setCartMinus, setCartPlus } from "../../../app/client-app/siskoSlice";

const SiskoCart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.sisko);
  const dispatch = useDispatch();

  let content;
  if (cartItems?.length > 0) {
    content = cartItems.map((item) => (
      <tr key={item?.id}>
        <td>
          <figure className="size-16 sm:size-20 mx-auto rounded overflow-hidden">
            <img src={item?.photo} alt="image cart" className="object-center object-contain" />
          </figure>
        </td>
        <td>{item?.name}</td>
        <td>
          <div className="flex gap-1 items-center justify-center">
            <button onClick={() => dispatch(setCartMinus(item))} className="p-1">
              {item.qty === 1 ? <FaTrash className="text-[0.6rem]" /> : <FaMinus className="text-[0.5rem]" />}
            </button>
            <span>{item?.qty}</span>
            <button onClick={() => dispatch(setCartPlus(item))} className="p-1">
              <FaPlus className="text-[0.5rem]" />
            </button>
          </div>
        </td>
        <td>Rp{(parseInt(item?.price.split(".").join("")) * item?.qty).toLocaleString("id-ID")}</td>
      </tr>
    ));
  } else {
    content = (
      <tr>
        <td colSpan={4} className="py-3 italic">
          Cart kosong
        </td>
      </tr>
    );
  }
  return (
    <div>
      <table className="w-full border-separate text-sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {content}
          {cartItems.length > 0 && (
            <>
              <tr>
                <th className="py-4">Total Price</th>
                <th colSpan={2}></th>
                <th>Rp{totalPrice.toLocaleString("id-ID")}</th>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td>
                  <Link to="../checkout" className={"text-white bg-cyan-500 rounded p-1 px-2 shadow hover:opacity-70"}>
                    Checkout
                  </Link>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SiskoCart;
