 import PropagateLoader from "react-spinners/PropagateLoader"
const Loader = () => {

    
  return (
    <div className="fixed inset-0 flex items-center justify-center">
    {
        <PropagateLoader
        color='red'
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    }
    </div>
  )
}

export default Loader