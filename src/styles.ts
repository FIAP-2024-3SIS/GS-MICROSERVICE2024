import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    background-color: #22d3ee;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    align-items: center;

    text-decoration: none;
    color: white;
    font-size: 24px;
    font-weight: bold;
`

export const FiltersContainner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 50px;
    padding: 10px;

    border: 1px solid black;

    h2 {
        margin-left: 110px
    }

    button {
        margin-left: 110px
    }
`

export const SelectFilters = styled.div`
 display: flex;
 flex-direction: row;
 margin: 0 auto;
 gap: 5px;
`

export const DataTable = styled.div`
    
`