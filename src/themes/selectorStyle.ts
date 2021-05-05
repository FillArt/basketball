export const buildStyleSelect = () => ({
  clearIndicator: (styles: any) => ({
    ...styles,
    color: '#D1D1D1',
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: '#D1D1D1',
  }),
  control: (styles: any, { selectProps }: any) => ({
    ...styles,
    backgroundColor: '#F6F6F6',
    borderColor: selectProps.isError ? '#FF5761' : selectProps.isForm ? 'transparent' : '#D1D1D1',
    boxShadow: 'none',
    cursor: 'pointer',
    height: '40px',
    ':hover': {
      borderColor: '#D1D1D1',
      backgroundColor: selectProps.isForm ? '#F6F6F6' : 'white',
    },
    maxHeight: '40px',
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
    color: state.isFocused ? 'white' : '#9C9C9C',
    backgroundImage: (state.data.imageSrc && `url(${state.data.imageSrc})`),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 15px center',
    backgroundSize: '22px 22px',
    backgroundColor: (state.isFocused && '#FF768E'),
    cursor: 'pointer',
    wordBreak: 'break-word',
    borderBottom: !state.data.isLast && `1px solid #D1D1D1`,
    ':active': {
      backgroundColor: '#C60E2E',
      color: 'white',
    },
    '@media(max-width: 1300px)': {
      fontSize: '15px',
    },
    '@media(max-width: 930px)': {
      fontSize: '18px',
    },
    '@media(max-width: 475px)': {
      fontSize: '15px',
    },
  }),
  multiValue: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    padding: '1px 4px',
    borderRadius: '4px',
    color: 'white',
    backgroundColor: '#E4163A',

  }),
  singleValue: (styles: any, { selectProps }: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: selectProps.isForm ? '500' : 'normal',
    fontSize: '14px',
    lineHeight: selectProps.isForm ? '24px' : '19px',
    padding: '1px 4px',
    borderRadius: '4px',
    color: selectProps.isForm ? '#303030' : 'white',
    backgroundColor: selectProps.isForm ? 'transparent' : '#E4163A',
    paddingLeft: '0',
    marginLeft: '0',
    '@media(max-width: 380px)': {
      fontSize: '11px',
    },
    '@media(max-width: 320px)': {
      whiteSpace: 'break-spaces',
      wordBreak: 'break-all',
      lineHeight: 'normal',
    },
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: 'white',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#707070',
    marginLeft: '0',
  }),
  input: (styles: any) => ({
    ...styles,
    padding: '4px 8px',
  }),
  menuList: (styles: any) => ({
    ...styles,
    scrollbarColor: '#9C9C9C',
    scrollbarWidth: 'thin',
    padding: '0',
    '::-webkit-scrollbar-track': {
      backgroundColor: '#F6F6F6',
    },

    '::-webkit-scrollbar-thumb': {
      '-webkit-border-radius': '0px',
      borderRadius: '0px',
      backgroundColor: '#9C9C9C'
    },

    '::-webkit-scrollbar': {
      width: '2px',
    },
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    overflow: 'auto',
    maxHeight: '40px',
    height: '40px',
    scrollbarColor: '#9C9C9C',
    scrollbarWidth: 'thin',
    padding: '0 12px',

    '::-webkit-scrollbar-track': {
      backgroundColor: '#F6F6F6',
    },

    '::-webkit-scrollbar-thumb': {
      '-webkit-border-radius': '0px',
      borderRadius: '0px',
      backgroundColor: '#9C9C9C',
    },

    '::-webkit-scrollbar': {
      width: '1px',
    },
  }),
});
