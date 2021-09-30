import * as React from "react"
import { useState, useEffect } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Swal from "sweetalert2"
import { ScaleFade, Text } from "@chakra-ui/react"

export const ListPw = ({ password }) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
    return () => setOpen(false)
  }, [])

  return (
    <ScaleFade in={isOpen}>
      <CopyToClipboard
        text={password}
        onCopy={() =>
          Swal.fire({
            title: "Password Copied",
            text: "hit ctrl+v or cmd+v to save it somewhere",
            icon: "success",
            showCloseButton: true,
            confirmButtonText: "Cool",
          })
        }
      >
        <Text
          as="pre"
          bg="purple.400"
          rounded="md"
          shadow="md"
          cursor="copy"
          my={4}
          textAlign="center"
        >
          <Text
            as="span"
            borderWidth={1}
            borderStyle="dotted"
            borderColor="white"
            fontSize="xl"
            color="white"
          >
            {password}
          </Text>
        </Text>
      </CopyToClipboard>
    </ScaleFade>
  )
}
