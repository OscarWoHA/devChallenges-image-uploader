import type { NextPage } from "next";
import { useState } from "react";
import Upload from "../components/Upload";
import Uploaded from "../components/Uploaded";
import Uploading from "../components/Uploading";

const Home: NextPage = () => {
  const [state, setState] = useState<UploadState>({
    uploading: false,
    url: undefined,
  });

  if (state.uploading === true) {
    return <Uploading />;
  } else {
    if (state.url === undefined) {
      return <Upload state={state} setState={setState} />;
    } else {
      return <Uploaded url={state.url} />;
    }
  }
};

export default Home;
