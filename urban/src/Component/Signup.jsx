import React from 'react'
import {
    Modal,
    FormControl,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input,
    ModalCloseButton,
    FormHelperText,
    FormLabel,
    Button,useDisclosure
  } from '@chakra-ui/react'

  function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>btn</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Enter a Email'/>
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel>Email Password</FormLabel>
                <Input type='password' placeholder='Enter a Password'/>
                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'>
                    Submit
                </Button>
            </FormControl>
            </ModalBody>

          </ModalContent>
        </Modal>
      </>
    )
  }

export default Signup