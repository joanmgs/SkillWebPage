import "../styles/loading.css";

export default function Loader() {
  return (
    <div className="loading-container">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
