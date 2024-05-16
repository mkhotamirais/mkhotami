import toast from "react-hot-toast";
import { useDeleteProductMutation } from "../../../../../app/api/productApiSlice";
import { Modal } from "../../../../../components/Components";

const ShopAdmProdModalDel = ({ onClose, itemId, modalId, item }) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const submitDel = (e) => {
    e.preventDefault();
    deleteProduct(modalId)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
      })
      .catch((err) => [toast.error(err?.data?.message)]);
  };

  return (
    <Modal
      onClose={onClose}
      modalId={itemId}
      itemId={modalId}
      closeBtn="true"
      confirmDel="true"
      submitDel={submitDel}
      loadDel={isLoading}
    >
      <div className="py-3">
        <div>Delete {item?.name}, Apakah kamu yakin?</div>
      </div>
    </Modal>
  );
};
ShopAdmProdModalDel.propTypes;

export default ShopAdmProdModalDel;
