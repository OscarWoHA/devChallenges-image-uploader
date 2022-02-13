import Check from "@mui/icons-material/Check";
import { toast } from "react-toastify";

export default function Uploaded({ url }: { url: string }) {
  return (
    <section className="container text-center">
      <Check className="uploaded-icon" sx={{ fontSize: 35 }} />
      <h1 className="title title--uploaded">Uploaded Successfully!</h1>

      <img className="uploaded-image" src={url} />

      <div className="uploaded-input">
        <input
          onClick={({ currentTarget }) => currentTarget.select()}
          type="text"
          value={url}
        />
        <button
          className="button uploaded-input__button"
          onClick={() => {
            try {
              navigator.clipboard.writeText(url);
              toast.success("Link has been copied to clipboard!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
            } catch {
              toast.error("Link could not be copied to clipboard!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
            }
          }}
        >
          Copy Link
        </button>
      </div>
    </section>
  );
}
