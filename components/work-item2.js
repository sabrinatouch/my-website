import { 
    Box,
    Image,
    Text,
    Link
} from '@chakra-ui/react'
import TransitionAnimation from './transitionanimation'
import NextLink from 'next/link'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href

    return (
        <Link
            fontSize='20px'
            href={href}
            as={NextLink}
            target={target}
            {...props}
            textDecoration={active ? 'underline' : 'none'}
        >
            {children}
        </Link>
    )
}

const WorkItem2 = ({id, href, thumbnail, title, description}) => {

    return (
        <Box>
            <TransitionAnimation>
                <LinkItem
                    href={href}
                    target="_blank"
                >
                    <Image src={thumbnail} borderRadius='15px'>
                    </Image>
                    <Box style={{ marginTop: '18px' }}>
                        <Text variant='sub-title' style={{ fontWeight: '600' }}>
                            {title}
                        </Text>
                        <Text style={{ fontSize: '14px', fontWeight: '400' }}>
                            {description}
                        </Text>
                    </Box>
                </LinkItem>
            </TransitionAnimation>
        </Box>
    )
}

export default WorkItem2

