import * as React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

export const ListPw = ({ password }) => (
  <CopyToClipboard text={password} onCopy={() => console.log("copied")}>
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
