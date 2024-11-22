import { 
    Box,
    Image,
    Text,
    Link,
    Spacer,
    SimpleGrid
} from '@chakra-ui/react'
import TransitionAnimation from './transitionanimation'
import HoverAnimation from './hoveranimation'
import NextLink from 'next/link'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href

    return (
        <Link
            href={href}
            as={NextLink}
            target={target}
            {...props}
            style={{ textDecoration: 'none' }}
        >
            {children}
        </Link>
    )
}

const WorkItem2 = props => {
    const {id, href, thumbnail, title, description, target, path, year, subtitle} = props

    return (
        <Box pl={2} pr={2}>
            <LinkItem
                href={href}
                path={path}
                target={target}
            >
                <HoverAnimation>
                    <Image src={thumbnail} borderRadius='15px' style={{ width: '100%', overflow: 'hidden' }} alt="thumbnail" />
                </HoverAnimation>
                <SimpleGrid mt={5} columns={{ base: 1, md: 2 }} spacing={2}>
                    <Box>
                        <Text variant="sub-title" style={{ lineHeight: '1.1' }} fontWeight={'bold'}>
                            {title}
                        </Text>
                        <Text fontSize='16px' fontWeight={'400'}>{subtitle}</Text>
                    </Box>
                    <Box display='flex' justifyContent={{ base: 'flex-start', md: 'flex-end' }} alignItems={'flex-end'} gap={1}>
                        <Text fontSize='12px' style={{ fontWeight: '400', textTransform: 'uppercase', borderWidth: '1px', borderRadius: '25px', padding: '6px 10px', textAlign: 'center', lineHeight: '0.9'}} color={'blackAlpha.500'} borderColor={'blackAlpha.200'} alignContent={'center'} height='auto'>
                            {description}
                        </Text>
                        <Text fontSize='12px' style={{ fontWeight: '400', textTransform: 'uppercase', borderWidth: '1px', borderRadius: '25px', padding: '6px 10px', textAlign: 'center', lineHeight: '0.9'}} color={'whiteAlpha.900'} backgroundColor={'blackAlpha.500'} alignContent={'center'} height='auto'>
                            {year}
                        </Text>
                    </Box>
                </SimpleGrid>
            </LinkItem>
        </Box>
    )
}

export default WorkItem2

