import * as React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Swal from "sweetalert2"

export const ListPw = ({ password }) => (
  <CopyToClipboard
    text={password}
    onCopy={() =>
      Swal.fire({
        title: "Password Copied",
        text: "hit ctrl+v or cmd+v to save it somewhere",
        icon: "success",
        showCloseButton: true,
        confirmButtonText: "Cool",
      })
    }
  >
    <pre style={{ textAlign: "center", cursor: "copy" }}>
      <span
        style={{
          background: "lightcyan",
          border: "1px dotted gray",
          color: "gray",
          fontSize: "1.1rem",
        }}
      >
        {password}
      </span>
    </pre>
  </CopyToClipboard>
)
