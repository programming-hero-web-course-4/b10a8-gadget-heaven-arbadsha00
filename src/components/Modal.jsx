import successImg from "../assets/Group.png";

const Modal = ({ total,handlePurchase }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-center ">
          <img className="mx-auto" src={successImg} alt="" />
          <h3 className="font-bold text-2xl mt-4">Payment Successful</h3>
          <p className="py-4">Thanks for purchasing.</p>
                  <p>Total : { total}</p>
          <div className="modal-action">
            <form className="w-full" method="dialog">
           
              <button onClick={()=>handlePurchase()}  className="btn w-full rounded-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
