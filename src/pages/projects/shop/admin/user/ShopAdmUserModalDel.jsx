import { useDeleteUserMutation } from "../../../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { Modal } from "../../../../../components/Components";

const ShopAdmUserModalDel = ({ onClose, itemId, modalId, item }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
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
        <div>Delete {item?.username}, Apakah kamu yakin?</div>
      </div>
    </Modal>
  );
};
ShopAdmUserModalDel.propTypes;

export default ShopAdmUserModalDel;