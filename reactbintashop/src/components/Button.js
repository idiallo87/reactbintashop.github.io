import styled from 'styled-components';

export const ButtonContainer = styled.button `
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
color: #D500F9;
border:0.1rem solid #212121;
border-radius: 25px;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: linear-gradient(to right, #9E9E9E, #212121);
    color: #FFF;
    border: none;
    transform: scale(1.1, 1.1);
    transition: transform 500ms ease-in-out;
&:focus{
    outline:none;
}
`;