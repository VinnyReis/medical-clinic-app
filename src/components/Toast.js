import { Toast as bootstrapToast } from 'bootstrap';

function Toast({message, toastRef}){
  return(
    <div className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
      <div ref={toastRef} className="toast align-items-center text-bg-primary text-light border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    </div>
  );
} export default Toast;

export function showToast(toastRef){
  const toastObject = new bootstrapToast(toastRef.current)
  toastObject.show();
};