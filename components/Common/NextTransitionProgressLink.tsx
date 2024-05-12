"use client"
import { ComponentPropsWithoutRef, startTransition } from 'react'
import { useProgress } from "react-transition-progress"

import { Link as NextTransitionLink } from "react-transition-progress/next"

interface Props extends ComponentPropsWithoutRef<'a'> {
    href: string,
    onClickHandler?: () => any,
    children: React.ReactNode
    replace?: boolean
}

function NextTransitionProgressLink({ href, onClickHandler, children, replace, ...rest }: Props) {
    const startProgress = useProgress()

    return (
        <NextTransitionLink
            href={href}
            {...rest}
            onClick={() => {
                if (onClickHandler) {
                    onClickHandler()
                } else {
                    startTransition(startProgress)
                }
            }}
        >
            {children}
        </NextTransitionLink >
    )
}

export default NextTransitionProgressLink