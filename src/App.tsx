import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

import { useDropzone } from 'react-dropzone'

export const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Container>
        <Heading>React Dropzone</Heading>
        <Basic />
      </Container>
    </ChakraProvider>
  )
}

function Basic(props: any) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => (
    <li key={file?.path}>
      {file?.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <Box p='10' border='1px solid' borderColor='gray.100' {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Box>
      <aside>
        <Heading fontSize={'2xl'}>Files</Heading>

        <UnorderedList>
          <ListItem>{files}</ListItem>
        </UnorderedList>
      </aside>
    </section>
  );
}