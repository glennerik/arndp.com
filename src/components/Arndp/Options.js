import * as React from "react"
import { Flex, Box, Button, Text } from "@chakra-ui/react"
import { RepeatIcon } from "@chakra-ui/icons"

const Nw = ({ children }) => (
  <Text as="span" whiteSpace="nowrap">
    {children}
  </Text>
)

export const Options = p => (
  <Flex
    mb={4}
    d={{ base: "block", md: "flex" }}
    textAlign={{ base: "left", md: "center" }}
  >
    <Box>
      <Uc {...p} />
    </Box>
    <Box>
      <Lc {...p} />
    </Box>
    <Box>
      <Numbers {...p} />
    </Box>
    <Box>
      <Space {...p} />
    </Box>
    <Box>
      <Symbols {...p} />
    </Box>
    <Box>
      <NonAzChars {...p} />
    </Box>
    <Box>
      <Regenerate {...p} />
    </Box>
  </Flex>
)

const Regenerate = ({ criteria, setCriteria }) => (
  <Button
    colorScheme="purple"
    onClick={() => setCriteria({ ...criteria, tlr: criteria.tlr + 1 })}
  >
    <RepeatIcon />
  </Button>
)

const Uc = ({ criteria, setCriteria }) => (
  <label for="uc">
    <input
      id="uc"
      type="checkbox"
      checked={criteria.uc}
      onChange={() => setCriteria({ ...criteria, uc: !criteria.uc })}
    />{" "}
    Uppercase <Nw>(A-Z)</Nw>
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
    Lowercase <Nw>(a-z)</Nw>
  </label>
)

const Numbers = ({ criteria, setCriteria }) => (
  <label for="numbers">
    <input
      id="numbers"
      type="checkbox"
      checked={criteria.numbers}
      onChange={() => setCriteria({ ...criteria, numbers: !criteria.numbers })}
    />{" "}
    Numbers <Nw>(0-9)</Nw>
  </label>
)

const Space = ({ criteria, setCriteria }) => (
  <label for="space">
    <input
      id="space"
      type="checkbox"
      checked={criteria.space}
      onChange={() => setCriteria({ ...criteria, space: !criteria.space })}
    />{" "}
    Space <Nw>(" ")</Nw>
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
    Symbols <Nw>(!#$%... etc)</Nw>
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
    Non A-z Chars <Nw>(üéâäà... etc)</Nw>
  </label>
)
