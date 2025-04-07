import Alert from "react-bootstrap/Alert";

function AlertWelcome({ className }) {
  return (
    <Alert variant="warning" className={`special-elite-regular text-center bg-black w-100 ${className}`}>
      <Alert.Heading className="fw-bold fs-4 text-white">
        Welcome in Epibooks
      </Alert.Heading>
      <p className="text-warning special-elite-regular">Troverai qui il libro dei tuoi incubi</p>
      <hr />
      <p className="mb-0">
        <span className="text-info opacity-75 special-elite-regular">
          “Alcuni pensano che io sia una persona orribile, ma non è vero.
        </span>
        <br />
        <span className="text-success opacity-75 special-elite-regular">
          Io ho il cuore di un bambino -
        </span>
        <br />
        <span className="fw-bold text-danger special-elite-regular">
          in un barattolo sulla mia scrivania.” (Stephen King)
        </span>
      </p>
    </Alert>
  );
}

export default AlertWelcome;
