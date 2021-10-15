import * as React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Swal from "sweetalert2"
import { ScaleFade, Text } from "@chakra-ui/react"
import { useGetThemeColor } from "../ThemeProvider"

export const ListPw = ({ password, hide }) => {
  const { themeColor } = useGetThemeColor()

  return (
    <ScaleFade in={true}>
      <CopyToClipboard
        text={password}
        onCopy={() =>
          Swal.fire({
            title: "Password Copied",
            text: "hit ctrl+v or cmd+v to save it somewhere",
            icon: "success",
            showCloseButton: true,
            confirmButtonText: "Cool",
            confirmButtonColor: themeColor,
          })
        }
      >
        <Text
          as="pre"
          bg={themeColor}
          rounded="md"
          shadow="md"
          cursor="copy"
          my={4}
          textAlign="center"
          p={4}
        >
          <Text
            as="span"
            borderWidth={1}
            borderStyle="dotted"
            borderColor="white"
            fontSize="xl"
            color="white"
          >
            {hide ? "****************" : password}
          </Text>
        </Text>
      </CopyToClipboard>
    </ScaleFade>
  )
}
