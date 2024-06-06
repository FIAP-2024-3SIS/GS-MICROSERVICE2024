import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    background-color: #22d3ee;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        font-size: 24px;
        font-weight: bold;
        transition: 0.7s;
    }
    a:hover {
        transform: scale(1.3);
    }
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

export const DataTable = styled.table`
    border: 1px solid black;
    width: 100%;
`



export const TableBody = styled.tbody `
    display: table-row-group;
    width: 100%;
` 

export const TData = styled.td `
    text-align: center;
`

export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;

    /* gap: 15px; */

    
`

export const Buttons = styled.button`
    padding: 10px;
    border-radius: 1px;
    margin:20px;
    border: 0;


    background-color: #22d3ee; 
    color: white;
`