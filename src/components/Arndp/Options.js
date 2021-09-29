import * as React from "react"
import {
  Box,
  Button,
  Text,
  Select,
  Checkbox,
  Kbd,
  Flex,
} from "@chakra-ui/react"
import { RepeatIcon } from "@chakra-ui/icons"

export const Options = p => (
  <Flex
    d={{ base: "block", lg: "flex" }}
    textAlign={{ base: "none", lg: "center" }}
    mb={8}
    whiteSpace="nowrap"
    justifyContent="space-between"
    alignItems="center"
  >
    <Box d="flex" alignItems="center">
      <Box mr={4}>
        <Regenerate {...p} />
      </Box>
      <Box>
        <Length {...p} />
      </Box>
    </Box>
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
  </Flex>
)

const Uc = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.uc}
    onChange={() => setCriteria({ ...criteria, uc: !criteria.uc })}
    size="lg"
  >
    <Text as="span" d={{ base: "inline", lg: "none" }}>
      Uppercase{" "}
    </Text>
    <Kbd>A-Z</Kbd>
  </Checkbox>
)

const Lc = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.lc}
    onChange={() => setCriteria({ ...criteria, lc: !criteria.lc })}
    size="lg"
  >
    <Text as="span" d={{ base: "inline", lg: "none" }}>
      Lowercase{" "}
    </Text>
    <Kbd>a-z</Kbd>
  </Checkbox>
)

const Numbers = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.numbers}
    onChange={() => setCriteria({ ...criteria, numbers: !criteria.numbers })}
    size="lg"
  >
    <Text as="span" d={{ base: "inline", lg: "none" }}>
      Numbers{" "}
    </Text>
    <Kbd>0-9</Kbd>
  </Checkbox>
)

const Space = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.space}
    onChange={() => setCriteria({ ...criteria, space: !criteria.space })}
    size="lg"
  >
    Space <Kbd>&nbsp;</Kbd>
  </Checkbox>
)

const Symbols = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.symbols}
    onChange={() => setCriteria({ ...criteria, symbols: !criteria.symbols })}
    size="lg"
  >
    <Text as="span" d={{ base: "inline", lg: "none" }}>
      Symbols{" "}
    </Text>
    <Kbd>!#$%&hellip;</Kbd>
  </Checkbox>
)

const NonAzChars = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.non_az}
    onChange={() => setCriteria({ ...criteria, non_az: !criteria.non_az })}
    size="lg"
  >
    <Text as="span" d={{ base: "inline", lg: "none" }}>
      Non A-z Chars{" "}
    </Text>
    <Kbd>üéâø&hellip;</Kbd>
  </Checkbox>
)

const Length = ({ criteria, setCriteria }) => (
  <Select
    placeholder="Size"
    size="sm"
    onChange={e => setCriteria({ ...criteria, length: e.target.value })}
    minW={20}
    maxW={20}
  >
    {[
      8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100,
    ].map(length => (
      <option key={length} value={length}>
        {length}
      </option>
    ))}
  </Select>
)

const Regenerate = ({ criteria, setCriteria }) => (
  <Button
    colorScheme="purple"
    onClick={() => setCriteria({ ...criteria, tlr: criteria.tlr + 1 })}
  >
    <RepeatIcon />
  </Button>
)
