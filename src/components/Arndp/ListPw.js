import * as React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Swal from "sweetalert2"
import { ScaleFade, Text, Box, Tooltip } from "@chakra-ui/react"
import { isMobile } from "react-device-detect"
import { useGetThemeColor } from "../ThemeProvider"
import { savePassword } from "./encryptedLs"

const Tt = p => (isMobile ? p.children : <Tooltip {...p} />)

export const ListPw = ({ password, hide }) => {
  const { themeColor } = useGetThemeColor()

  return (
    <Tt label="Click to copy" hasArrow>
      <ScaleFade in={true}>
        <CopyToClipboard
          text={password}
          onCopy={() =>
            Swal.fire({
              title: "Password Copied",
              html: 'Press <i><b>ctrl+v</b></i> or <i><b>cmd+v</b></i> <span style="display:inline-block">to paste it somewhere</span>',
              icon: "success",
              showCloseButton: true,
              confirmButtonText: "Save it",
              confirmButtonColor: themeColor,
              showDenyButton: true,
              denyButtonText: "Close",
              denyButtonColor: "gray",
            }).then(async result => {
              if (result.isConfirmed) {
                const { value: name } = await Swal.fire({
                  title: "Give it a name",
                  footer:
                    '<div>Passwords are stored securely in your browser with <a href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" target="_blank" style="text-decoration:underline">AES</a> encryption.</div>',
                  input: "text",
                  inputLabel: "(you can change this later)",
                  inputPlaceholder: "Name to remember password usage",
                  confirmButtonText: "Save",
                  confirmButtonColor: themeColor,
                  showDenyButton: true,
                  denyButtonText: "Close",
                  denyButtonColor: "gray",
                })

                if (name) {
                  savePassword({ name, password })
                }
              }
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
    </Tt>
  )
}
