import * as React from "react"

export const Options = p => (
  <div style={{ display: "flex", textAlign: "center", marginBottom: "2rem" }}>
    <Uc {...p} />
    <Lc {...p} />
    <Numbers {...p} />
    <Space {...p} />
    <Symbols {...p} />
    <NonAzChars {...p} />
    <Regenerate {...p} />
  </div>
)

const Regenerate = ({ criteria, setCriteria }) => (
  <button onClick={() => setCriteria({ ...criteria, tlr: criteria.tlr + 1 })}>
    Regenerate
  </button>
)

const Uc = ({ criteria, setCriteria }) => (
  <label for="uc">
    <input
      id="uc"
      type="checkbox"
      checked={criteria.uc}
      onChange={() => setCriteria({ ...criteria, uc: !criteria.uc })}
    />{" "}
    Uppercase (A-Z)
  </label>
)

const Lc = ({ criteria, setCriteria }) => (
  <label for="lc">
    {" "}
    <input
      id="lc"
      type="checkbox"
      checked={criteria.lc}
      onChange={() => setCriteria({ ...criteria, lc: !criteria.lc })}
    />{" "}
    Lowercase (a-z)
  </label>
)

const Numbers = ({ criteria, setCriteria }) => (
  <div>
    <input
      id="numbers"
      type="checkbox"
      checked={criteria.numbers}
      onChange={() => setCriteria({ ...criteria, numbers: !criteria.numbers })}
    />{" "}
    <label for="numbers">Numbers (0-9)</label>
  </div>
)

const Space = ({ criteria, setCriteria }) => (
  <label for="space">
    <input
      id="space"
      type="checkbox"
      checked={criteria.space}
      onChange={() => setCriteria({ ...criteria, space: !criteria.space })}
    />{" "}
    Space <span style={{ whiteSpace: "nowrap" }}>(" ")</span>
  </label>
)

const Symbols = ({ criteria, setCriteria }) => (
  <label for="symbols">
    <input
      id="symbols"
      type="checkbox"
      checked={criteria.symbols}
      onChange={() => setCriteria({ ...criteria, symbols: !criteria.symbols })}
    />{" "}
    Symbols <span style={{ whiteSpace: "nowrap" }}>(!#$%... etc)</span>
  </label>
)

const NonAzChars = ({ criteria, setCriteria }) => (
  <label for="non_az">
    <input
      id="non_az"
      type="checkbox"
      checked={criteria.non_az}
      onChange={() => setCriteria({ ...criteria, non_az: !criteria.non_az })}
    />{" "}
    Non A-z Chars <span style={{ whiteSpace: "nowrap" }}>(üéâäà... etc)</span>
  </label>
)
