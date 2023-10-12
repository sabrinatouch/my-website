import MagicHatIcon from "./images/magichat";
import { Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import ThemeToggleButton from "./theme-toggle-button";

const LogoBox = styled.span`
    line-height: 20px;
    display: inline-flex;
    align-items: center;
    font-weight: 700;
`

const Logo = () => {
    return (
        <LogoBox>
            <ThemeToggleButton />
            {/* <MagicHatIcon /> */}
            <Link href="/">
                <Heading 
                    variant="logo-title" 
                    ml={2} 
                >
                    Sabrina Touch
                </Heading>
            </Link>
        </LogoBox>
    )
}

export default Logo