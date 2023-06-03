import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    border: 0;
    text-decoration: none;
    transition: color 0.3s ease 0s;
    cursor: pointer;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.txtColor};
    background-color: ${({ theme }) => theme.colors.green};
`
