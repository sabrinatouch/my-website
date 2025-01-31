import { Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image.js'

const LogoBox = styled.span`
    line-height: 20px;
    display: inline-flex;
    align-items: center;
    font-weight: 700;
`

const Logo = () => {
    return (
        <LogoBox>
            <Link href="/">
                <Image 
                    src="/favicon.png"
                    width={48}
                    height={48}
                    style={{borderRadius: '5px'}}
                    alt="self portrait drawing of Sabrina"
                />
                {/* <Heading 
                    variant="logo-title" 
                    ml={2}
                >
                    Sabrina Touch
                </Heading> */}
            </Link>
        </LogoBox>
    )
}

export default Logo