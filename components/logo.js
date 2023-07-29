import MagicHatIcon from "./images/magichat";
import { Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    height: 30px;
    line-height: 20px;
    display: inline-flex;
    align-items: center;
    font-weight: 700;
    font-style: italic;
`

const Logo = () => {
    return (
        <LogoBox>
            <MagicHatIcon />
            <Heading variant="logo-title" ml={3} letterSpacing={'tighter'}>
                Sabrina Touch
            </Heading>
        </LogoBox>
    )
}

export default Logo