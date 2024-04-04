import { 
    Box,
    Image,
    Text,
    Link
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
            textDecoration={active ? 'underline' : 'none'}
        >
            {children}
        </Link>
    )
}

const WorkItem2 = ({id, href, thumbnail, title, description}) => {

    return (
        <Box pl={2} pr={2}>
            <TransitionAnimation>
                <LinkItem
                    href={href}
                    target="_blank"
                >
                    <HoverAnimation>
                        <Image src={thumbnail} borderRadius='15px' style={{ width: '100%', overflow: 'hidden' }} />
                    </HoverAnimation>
                        <Box mt={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text variant="sub-title" style={{ lineHeight: '1.1' }}>
                                {title}
                            </Text>
                            <Text style={{ fontSize: '14px', fontWeight: '400', textTransform: 'uppercase', borderWidth: '2px', borderRadius: '25px', padding: '6px 10px', textAlign: 'center', lineHeight: '0.9'}}>
                                {description}
                            </Text>
                        </Box>
                </LinkItem>
            </TransitionAnimation>
        </Box>
    )
}

export default WorkItem2

