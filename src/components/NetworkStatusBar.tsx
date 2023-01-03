import React from 'react'
import styled from 'styled-components'
import { useNetwork } from '../hooks/useNetwork'

interface Props {
    height: number
}

const NetworkStatus = styled.div<Props>`
    background-color: red;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    width: 100%;
    height: ${props => props.height + 'px'};
    overflow: hidden;
    transition: all .5s ease-in-out;
`


export const NetworkStatusBar = () => {

    const { height } = useNetwork();

    return (
        <NetworkStatus height={height} >
            SIN CONEXION 
        </NetworkStatus>
    )
}
