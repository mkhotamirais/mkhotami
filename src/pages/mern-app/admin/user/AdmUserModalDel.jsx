import { useDeleteUserMutation } from "../../../../app/api/userApiSlice";
import { Modal } from "../../../../components/Components";
import toast from "react-hot-toast";

const AdmUserModalDel = ({ onClose, item, modalId }) => {
  const [deleteKamus, { isLoading }] = useDeleteUserMutation();
  const handleDelete = (e) => {
    e.preventDefault();
    deleteKamus(item?._id)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };
  return (
    <Modal
      onClose={onClose}
      itemId={item?._id}
      modalId={modalId}
      closeBtn={true}
      confirmDel={true}
      submitDel={handleDelete}
      loadDel={isLoading}
    >
      <div className="my-3">Delete {item?.username}, are you sure?</div>
    </Modal>
  );
};
AdmUserModalDel.propTypes;

export default AdmUserModalDel;
