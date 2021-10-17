import * as React from "react"
import { useState, useEffect } from "react"
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
import { isMobile } from "react-device-detect"
import { useThemectx } from "../ThemeProvider"

const Tt = p => (isMobile ? p.children : <Tooltip {...p} />)

export const Options = p => {
  const [{ colorScheme }] = useThemectx()

  return (
    <Flex
      d={{ base: "block", lg: "flex" }}
      textAlign={{ base: "none", lg: "center" }}
      whiteSpace="nowrap"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box d="flex" alignItems="center" my="2">
        <Tt label="Re-generate passwords" hasArrow>
          <Box mr={4}>
            <Regenerate {...p} colorScheme={colorScheme} />
          </Box>
        </Tt>
        <Tt label="Set the password length" hasArrow>
          <Box>
            <Length {...p} colorScheme={colorScheme} />
          </Box>
        </Tt>
      </Box>
      <Tt label="Include UPPERCASE letters" hasArrow>
        <Box my="2">
          <Uc {...p} colorScheme={colorScheme} />
        </Box>
      </Tt>
      <Tt label="Include lowercase letters" hasArrow>
        <Box my="2">
          <Lc {...p} colorScheme={colorScheme} />
        </Box>
      </Tt>
      <Tt label="Include numbers" hasArrow>
        <Box my="2">
          <Numbers {...p} colorScheme={colorScheme} />
        </Box>
      </Tt>
      <Tt label="Include white-space in the password" hasArrow>
        <Box my="2">
          <Space {...p} colorScheme={colorScheme} />
        </Box>
      </Tt>
      <Tt label="Include symbols" hasArrow>
        <Box my="2">
          <Symbols {...p} colorScheme={colorScheme} />
        </Box>
      </Tt>
      <Tt label="Include non A-z characters" hasArrow>
        <Box my="2">
          <NonAzChars {...p} colorScheme={colorScheme} />
        </Box>
      </Tt>
      <Tt
        label="Don't show the password, but copy them to clipboard when clicked"
        hasArrow
      >
        <Box my="2">
          <Hide {...p} colorScheme={colorScheme} />
        </Box>
      </Tt>
    </Flex>
  )
}

const Uc = ({ criteria, setCriteria, colorScheme }) => (
  <Checkbox
    isChecked={criteria.uc}
    onChange={() => setCriteria({ ...criteria, uc: !criteria.uc })}
    size="lg"
    colorScheme={colorScheme}
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Uppercase
      </Text>
      <Kbd>A-Z</Kbd>
    </Flex>
  </Checkbox>
)

const Lc = ({ criteria, setCriteria, colorScheme }) => (
  <Checkbox
    isChecked={criteria.lc}
    onChange={() => setCriteria({ ...criteria, lc: !criteria.lc })}
    size="lg"
    colorScheme={colorScheme}
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Lowercase
      </Text>
      <Kbd>a-z</Kbd>
    </Flex>
  </Checkbox>
)

const Numbers = ({ criteria, setCriteria, colorScheme }) => (
  <Checkbox
    isChecked={criteria.numbers}
    onChange={() => setCriteria({ ...criteria, numbers: !criteria.numbers })}
    size="lg"
    colorScheme={colorScheme}
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Numbers
      </Text>
      <Kbd>0-9</Kbd>
    </Flex>
  </Checkbox>
)

const Space = ({ criteria, setCriteria, colorScheme }) => (
  <Checkbox
    isChecked={criteria.space}
    onChange={() => setCriteria({ ...criteria, space: !criteria.space })}
    size="lg"
    colorScheme={colorScheme}
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Space
      </Text>
      <Kbd>"&nbsp;"</Kbd>
    </Flex>
  </Checkbox>
)

const Symbols = ({ criteria, setCriteria, colorScheme }) => (
  <Checkbox
    isChecked={criteria.symbols}
    onChange={() => setCriteria({ ...criteria, symbols: !criteria.symbols })}
    size="lg"
    colorScheme={colorScheme}
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Symbols
      </Text>
      <Kbd>!#$%&hellip;</Kbd>
    </Flex>
  </Checkbox>
)

const NonAzChars = ({ criteria, setCriteria, colorScheme }) => (
  <Checkbox
    isChecked={criteria.non_az}
    onChange={() => setCriteria({ ...criteria, non_az: !criteria.non_az })}
    size="lg"
    colorScheme={colorScheme}
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Non A-z Chars
      </Text>
      <Kbd>üéâø&hellip;</Kbd>
    </Flex>
  </Checkbox>
)

const Hide = ({ criteria, setCriteria, colorScheme }) => (
  <Checkbox
    isChecked={criteria.hide}
    onChange={() => setCriteria({ ...criteria, hide: !criteria.hide })}
    size="lg"
    colorScheme={colorScheme}
  >
    <Flex alignItems="center">
      <Text as="small" d={{ base: "inline", lg: "none" }} mr={1}>
        Hide passwords
      </Text>
      <Kbd d={{ base: "none", lg: "inline" }}>Hide</Kbd>
    </Flex>
  </Checkbox>
)

const Length = ({ criteria, setCriteria, colorScheme }) => (
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

const Regenerate = ({ criteria, setCriteria, colorScheme }) => {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    setRotate(r => r + 180)
  }, [criteria])

  return (
    <Button
      colorScheme={colorScheme}
      onClick={() => setCriteria({ ...criteria, tlr: criteria.tlr + 1 })}
    >
      <RepeatIcon
        style={{ transform: `rotate(-${rotate}deg)`, transition: "0.4s" }}
      />
    </Button>
  )
}
