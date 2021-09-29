import * as React from "react"
import { useEffect, useState } from "react"
import { makePws } from "./makePws"
import { ListPw } from "./ListPw"
import { Options } from "./Options"

const Arndp = () => {
  const [criteria, setCriteria] = useState(defaultCriteria)
  const [passwords, setPasswords] = useState([
    "You must enable JavaScript to generate passwords",
  ])

  useEffect(() => {
    makePws(criteria, setPasswords)
  }, [criteria])

  return (
    <>
      <Options criteria={criteria} setCriteria={setCriteria} />
      <Passwords passwords={passwords} />
    </>
  )
}

export default Arndp

const Passwords = ({ passwords }) =>
  passwords.map(password => <ListPw password={password} key={password} />)

const defaultCriteria = {
  uc: true,
  lc: true,
  numbers: true,
  space: true,
  symbols: true,
  non_az: true,
  tlr: 0,
  length: 24,
  numberOfPws: 5,
}
