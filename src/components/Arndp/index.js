import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { Flex, Box, Text, Spinner } from "@chakra-ui/react"
import { makePws } from "./makePws"
import { ListPw } from "./ListPw"
import { Options } from "./Options"
import { useGetThemeColor, useThemectx } from "../ThemeProvider"

const Arndp = () => {
  const [criteria, setCriteria] = useState(defaultCriteria)
  const [passwords, setPasswords] = useState([])
  const [, dispatch] = useThemectx()
  const isInitMount = useRef(true)

  useEffect(() => {
    setPasswords(makePws(criteria))
  }, [criteria])

  useEffect(() => {
    if (isInitMount.current) {
      isInitMount.current = false
    } else {
      dispatch({ type: "nextColor" })
    }
  }, [criteria, isInitMount, dispatch])

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
          <i>Click on a password to copy it</i> 😎
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
      .map(pw => <ListPw password={pw} key={pw} hide={hide} />)
  ) : (
    <Box my={8} textAlign="center">
      <Text as="noscript" color="red" d="block">
        You must enable JavaScript to generate passwords
      </Text>
      <Flex alignItems="center" justifyContent="center" as="i">
        Generating
        <ThemeColoredSpinner mx={4} />
        passwords
      </Flex>
    </Box>
  )

const ThemeColoredSpinner = p => {
  const { themeColor } = useGetThemeColor()
  return <Spinner {...p} color={themeColor} />
}

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
  hide: true,
}
