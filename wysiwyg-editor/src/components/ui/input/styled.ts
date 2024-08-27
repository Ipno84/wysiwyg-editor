import styled from '@emotion/styled';

const Input = styled.input({
    display: 'block',
    width: '100%',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    '&[type="checkbox"], &[type="color"]': {
        display: 'inline-block',
        width: 'auto',
    },
    '&[type="color"]': {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        width: '100%',
    },
});

export { Input };
