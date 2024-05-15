import { useDeleteUserMutation } from "../../../../app/api/userApiSlice";
import { Modal } from "../../../../components/Components";
import toast from "react-hot-toast";

const ShopModalDel = ({ onClose, itemId, modalId }) => {
  const [deleteUser] = useDeleteUserMutation();
  const submitDel = (e) => {
    e.preventDefault();
    deleteUser(modalId)
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success(res?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return (
    <Modal onClose={onClose} modalId={itemId} itemId={modalId} closeBtn="true" confirmDel="true" submitDel={submitDel}>
      <div className="flex flex-col">
        <div>satu</div>
        <div>satu</div>
        <div>satu</div>
      </div>
    </Modal>
  );
};
ShopModalDel.propTypes;

export default ShopModalDel;
