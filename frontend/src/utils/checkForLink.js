import React from 'react'
import { Link } from '@styled-icons/boxicons-regular'
import Flex from '../styles/components/Flex'
import NavLink from '../styles/components/NavLink'

export default function checkForLink(props) {
  if (props.match(/http/i)) {
    return (
      <>
        <NavLink
          color="primary"
          href={props}
          props={props}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props}
        </NavLink>
        <Link size="1em" color="#f49342" />
      </>
    )
  }
  if (props.match(/www./i)) {
    return (
      <Flex>
        <NavLink
          color="primary"
          href={`http://${props}`}
          title={props}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props}
        </NavLink>
        <Link size="1em" color="#f49342" />
      </Flex>
    )
  }
  return <>{props}</>
}
