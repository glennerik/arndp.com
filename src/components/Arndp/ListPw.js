import * as React from "react"

export const ListPw = ({ password }) => (
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
)
