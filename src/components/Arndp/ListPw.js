import * as React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Swal from "sweetalert2"
import { ScaleFade, Text, Box } from "@chakra-ui/react"
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
        <Box
          bg={themeColor}
          rounded="md"
          shadow="md"
          cursor="copy"
          textAlign="center"
          my={4}
          p={4}
        >
          <Text
            as="pre"
            wordBreak="break-all"
            whiteSpace="pre-wrap"
            fontFamily="mono"
            d="inline"
            borderWidth={1}
            borderStyle="dotted"
            borderColor="white"
            fontSize="xl"
            color="white"
          >
            {hide ? "****************" : password}
          </Text>
        </Box>
      </CopyToClipboard>
    </ScaleFade>
  )
}
