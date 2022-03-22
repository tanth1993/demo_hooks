import { useEffect, useRef } from "react"

export default function useDidMount(callback, dependencies) {
    const isMounted = useRef(false)

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return
        }
        return callback()
    }, dependencies)
}