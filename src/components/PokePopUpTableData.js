import {TableRow, TableCell } from "@mui/material";
import '../styles/pokepopuptable.css'; 
/*
    
    Structure of data prop should be

    [{
        key: 'weight'
        value: 10    
    },
    {
        key: 'height'
        value: 21
    }, ...]

*/

export default function PokePopUpTableData({data}) {
    return  <>
                { 
                    data.map((dp) => {
                        return  <TableRow>
                                    <TableCell className = 'popuptablecell'>
                                        {dp.key}
                                    </TableCell>
                                    <TableCell className = 'popuptablecell'>
                                        {dp.value}
                                    </TableCell>
                                </TableRow>
                    })
                }     

            </>
}
