import { useDeleteUserMutation } from "../../../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { Modal } from "../../../../../components/Components";

const ShopAdmUserModalDel = ({ onClose, itemId, modalId }) => {
  const [deleteUser] = useDeleteUserMutation();
  const submitDel = (e) => {
    e.preventDefault();
    deleteUser(modalId)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
      })
      .catch((err) => [toast.error(err?.data?.message)]);
  };
  return (
    <Modal onClose={onClose} modalId={itemId} itemId={modalId} closeBtn="true" confirmDel="true" submitDel={submitDel}>
      <div className="flex flex-col">
        <div>Apakah kamu yakin?</div>
      </div>
    </Modal>
  );
};
ShopAdmUserModalDel.propTypes;

export default ShopAdmUserModalDel;
