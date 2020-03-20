
import styled from "styled-components";
import tw from "tailwind.macro";


export const SpinStyle = styled.div.attrs((props: any) => ({
  className: ` flex justify-center my-12`

}))`
& {
 
  g{
    fill:red
  }
  svg{
    ${(props: any) => props.theme.icon}
  

    ${tw`h-24 `}
  }
}



`;


export const CardStyle = styled.div.attrs((props: any) => ({
  className: ` rounded-lg p-8 text-center`
}))`
${(props: any) => props.theme.bgCard}
`;

export const LastUpdateStyle = styled.div.attrs((props: any) => ({
  className: `text-green-600 text-center`
}))`
`;
export const AlertWarningStyle = styled.div.attrs((props: any) => ({
}))`
${(props: any) => props.theme.warning}`;

export const WrapperSelect2 = styled.div.attrs((props: any) => ({
  className: `flex justify-center  `
}))`
& {
    .flag-select  {
      ${tw`m-2 w-100 `}
   }
   .filterBox input {
    ${tw`p-1 text-lg `}
    border: 1px solid ${({ theme }: any) => theme.text};
  }
  .flag-select__btn {
    ${(props: any) => props.theme.bgCard}
    ${tw`w-100 `}

    color: ${({ theme }: any) => theme.text};
    ::after {
      border-top: 5px solid ${({ theme }: any) => theme.text};
    }
  }
  .flag-select__option--placeholder {
    ${tw`flex `}

  }
  .flag-select__options {

    border: 1px solid ${({ theme }: any) => theme.body};
    ${(props: any) => props.theme.bgCard}
    max-height: 300px;
    width:100%
  }
  .flag-select__option__icon {
    width: 1.8em;
    height: 1.8em;
 
}
  .flag-select__option:not(.flag-select__option--placeholder):hover, .flag-select__option:not(.flag-select__option--placeholder):focus {
    ${tw`hover:bg-gray-500 `}
}
}
  `;

export const WrapperSelect = styled.div.attrs((props: any) => ({
  className: `mt-8 w-3/4 md:w-1/3 mx-auto `
}))`
  & {
    .react-select__control{
      ${(props: any) => props.theme.bgCard}
      border: 1px solid ${({ theme }: any) => theme.body};

    }
    .react-select__value-container{
      ${(props: any) => props.theme.bgCard}
      border: 1px solid ${({ theme }: any) => theme.body};

    }
    .react-select__menu{
      ${(props: any) => props.theme.bgCard}
      border: 1px solid ${({ theme }: any) => theme.body};
    }
    .react-select__option:active{
      ${tw`hover:bg-gray-500 bg-gray-500  `}
    }
    .react-select__option--is-selected{
      ${tw`hover:bg-gray-500 bg-gray-500  `}
    }
    .react-select__option:hover{
      ${tw`hover:bg-gray-500 bg-gray-500  `}
    }
    .react-select__single-value{
      color:  ${({ theme }: any) => theme.text};
    }
 .react-select__input{
  color:  ${({ theme }: any) => theme.text};

 }
    
  }
    `;



export const StatsStyle = styled.div.attrs((props: any) => ({
  className: `flex w-100 flex-wrap `
}))`
& {
    h4 {
      ${tw` `}
   }
}
  `;


















/*

export const CardStylea = styled.div.attrs((theme: any) => ({
  className: `${({ theme }: any) => { console.log(theme) }} bg-red-600 rounded-md m-5 p-5 text-center`
}))`
background: ${tw`${({ theme }: any) => theme.bgCard}`}
  & {
    h4 {
      ${tw` `}
   }
}
`;

export const CardStylde = styled.div.attrs((props: any) => ({
  // we can define static props
  type: "password",
  // or we can define dynamic ones
  size: props.size || "1em",
  className: ` ${props.theme.bgCard} rounded-md m-5 p-5 text-center`
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${(props: any) => console.log(props.theme.bgCards)};
  padding: ${(props: any) => props.size};
  ${tw` ${({ props }: any) => console.log(props)}`}
`;


*/