import {TableRow, TableCell } from "@mui/material";
 
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
                                    <TableCell>
                                        {dp.key}
                                    </TableCell>
                                    <TableCell>
                                        {dp.value}
                                    </TableCell>
                                </TableRow>
                    })
                }     

            </>
}
