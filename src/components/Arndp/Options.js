import * as React from "react"
import {
  Box,
  Button,
  Text,
  Select,
  Checkbox,
  Kbd,
  Flex,
  Tooltip,
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
      <Tooltip label="Re-generate passwords" hasArrow>
        <Box mr={4}>
          <Regenerate {...p} />
        </Box>
      </Tooltip>
      <Tooltip label="Set the password length" hasArrow>
        <Box>
          <Length {...p} />
        </Box>
      </Tooltip>
    </Box>
    <Tooltip label="Include UPPERCASE letters" hasArrow>
      <Box>
        <Uc {...p} />
      </Box>
    </Tooltip>
    <Tooltip label="Include lowercase letters" hasArrow>
      <Box>
        <Lc {...p} />
      </Box>
    </Tooltip>
    <Tooltip label="Include numbers" hasArrow>
      <Box>
        <Numbers {...p} />
      </Box>
    </Tooltip>
    <Tooltip label="Include white-space in the password" hasArrow>
      <Box>
        <Space {...p} />
      </Box>
    </Tooltip>
    <Tooltip label="Include symbols" hasArrow>
      <Box>
        <Symbols {...p} />
      </Box>
    </Tooltip>
    <Tooltip label="Include non A-z characters" hasArrow>
      <Box>
        <NonAzChars {...p} />
      </Box>
    </Tooltip>
  </Flex>
)

const Uc = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.uc}
    onChange={() => setCriteria({ ...criteria, uc: !criteria.uc })}
    size="lg"
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Uppercase
      </Text>
      <Kbd>A-Z</Kbd>
    </Flex>
  </Checkbox>
)

const Lc = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.lc}
    onChange={() => setCriteria({ ...criteria, lc: !criteria.lc })}
    size="lg"
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Lowercase
      </Text>
      <Kbd>a-z</Kbd>
    </Flex>
  </Checkbox>
)

const Numbers = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.numbers}
    onChange={() => setCriteria({ ...criteria, numbers: !criteria.numbers })}
    size="lg"
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Numbers
      </Text>
      <Kbd>0-9</Kbd>
    </Flex>
  </Checkbox>
)

const Space = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.space}
    onChange={() => setCriteria({ ...criteria, space: !criteria.space })}
    size="lg"
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Space
      </Text>
      <Kbd>"&nbsp;"</Kbd>
    </Flex>
  </Checkbox>
)

const Symbols = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.symbols}
    onChange={() => setCriteria({ ...criteria, symbols: !criteria.symbols })}
    size="lg"
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Symbols
      </Text>
      <Kbd>!#$%&hellip;</Kbd>
    </Flex>
  </Checkbox>
)

const NonAzChars = ({ criteria, setCriteria }) => (
  <Checkbox
    isChecked={criteria.non_az}
    onChange={() => setCriteria({ ...criteria, non_az: !criteria.non_az })}
    size="lg"
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Non A-z Chars
      </Text>
      <Kbd>üéâø&hellip;</Kbd>
    </Flex>
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
