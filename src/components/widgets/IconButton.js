import styled from 'styled-components';

export const IconButton = styled.button`
background: none;
border: none;
cursor: pointer;
padding: 10px;
display: flex;
align-items: center;
color: inherit;
border-radius: 50%;
transition: color 0.1s ease;

&:hover {
color: var(--primary-color);
}
`;