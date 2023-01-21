import swal from "sweetalert";
const clic=()=>{
  return swal("Good job!", "Product Added Successfully", "success");
}
const Alertsfun = () => {
  return <div>
    <button onClick={clic}>ADD PRODUCT</button>
  </div>
  
};
export default Alertsfun;
