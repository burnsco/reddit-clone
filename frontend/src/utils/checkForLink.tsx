import React from 'react'
import { Flex, Link } from '@chakra-ui/core'

export default function checkForLink(props: string) {
  if (props.match(/http/i)) {
    return (
      <>
        <Link
          color="primary"
          href={props}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props}
        </Link>
        <Link size={1} color="#f49342" />
      </>
    )
  }
  if (props.match(/www./i)) {
    return (
      <Flex>
        <Link
          color="primary"
          href={`http://${props}`}
          title={props}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props}
        </Link>
        <Link size={1} color="#f49342" />
      </Flex>
    )
  }
  return <>{props}</>
}
