import { useDeleteKamusMutation } from "../../../../app/api/kamusApiSlice";
import { Modal } from "../../../../components/Components";
import toast from "react-hot-toast";

const AdmKamusModalDel = ({ onClose, item, modalId }) => {
  const [deleteKamus, { isLoading }] = useDeleteKamusMutation();
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
      <div className="my-3">Delete {item?.name}, are you sure?</div>
    </Modal>
  );
};
AdmKamusModalDel.propTypes;

export default AdmKamusModalDel;
