import * as React from "react"
import { useEffect, useState } from "react"
import { Flex, Box, Text, Spinner } from "@chakra-ui/react"
import { makePws } from "./makePws"
import { ListPw } from "./ListPw"
import { Options } from "./Options"

const Arndp = () => {
  const [criteria, setCriteria] = useState(defaultCriteria)
  const [passwords, setPasswords] = useState([])

  useEffect(() => {
    setPasswords(makePws(criteria))
  }, [criteria])

  return (
    <>
      <Options criteria={criteria} setCriteria={setCriteria} />
      <Passwords passwords={passwords} hide={criteria.hide} />
      <Text my={4} d={passwords.length ? "block" : "none"}>
        New passwords generated on{" "}
        <Text as="b" d="inline-block">
          {new Date().toDateString()} @ {new Date().toLocaleTimeString()}
        </Text>
        .{" "}
        <Text as="span" d="inline-block">
          Click on a password to <i>copy</i> it 😎
        </Text>
      </Text>
    </>
  )
}

export default Arndp

const Passwords = ({ passwords, hide }) =>
  passwords.length ? (
    passwords
      .filter(pw => (pw ? pw : null))
      .map((pw, tlr) => <ListPw password={pw} key={tlr} hide={hide} />)
  ) : (
    <Box my={8} textAlign="center">
      <Text as="noscript" color="red" d="block">
        You must enable JavaScript to generate passwords
      </Text>
      <Flex alignItems="center" justifyContent="center" as="i">
        Generating
        <Spinner mx={4} color="purple" />
        passwords
      </Flex>
    </Box>
  )

const defaultCriteria = {
  uc: true,
  lc: true,
  numbers: true,
  space: true,
  symbols: true,
  non_az: true,
  tlr: 0,
  length: 24,
  numberOfPws: 3,
  hide: false,
}
